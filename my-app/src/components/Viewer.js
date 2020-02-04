import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Row, Col, Container, NavDropdown } from "react-bootstrap";
import PDF from "./PDF";
import Description from "./Description";
import DownloadButton from "./DownloadButton";
import SimulationDropdown from "./SimulationDropdown";

export default class Viewer extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setState({
      isDataFetched: false,
      count: 0
    });
  }
  componentDidMount() {
    // replace this with AJAX call to backend
    fetch(`Tokyo/Tokyo.json`)
      .then(res => res.json())
      .then(data => {
        console.log("data:", data);

        this.setState({
          chip_image: data.chip_image,
          short_description: data.short_description,
          long_description: data.long_description,
          features: data.features,
          applications: data.applications,
          components: data.components,
          chip_name: this.props.match.params.name,
          path: null,
          isDataFetched: true
        });
        if (this.props.match.params.view !== undefined) {
          this.setState({ current_view: this.props.match.params.view });
        } else {
          this.setState({ current_view: "MODULEtop" });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.name !== this.props.match.params.name ||
      prevProps.match.params.view !== this.props.match.params.view
    ) {
      this.forceUpdate();
      this.setState({
        name: this.props.match.params.name,
        view: this.props.match.params.view
      });
    }
  }

  render() {
    if (!this.state.isDataFetched) return null;
    return (
      <Container>
        <h1> {this.state.chip_name} Viewer </h1>
        <h4>Currently at {this.state.current_view}</h4>
        <Description
          data={this.state.components}
          current_view={this.state.current_view}
        />
        {/* get the image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Row>
            <NavDropdown title="Go to different view" id="basic-nav-dropdown">
              <Link
                to={`/product/${this.state.chip_name}/MODULEtop`}
                className="nav-link"
                onClick={() => this.setState({ path: null })}
              >
                top
              </Link>
              {/* {Object.keys(() => this.state.path ? this.state.components[this.state.path] : this.state.components).map((d) => { */}
              {Object.keys(this.state.components).map(d => {
                return (
                  <Link
                    to={`/product/${this.state.chip_name}/${d}`}
                    className="nav-link"
                    onClick={() => this.setState({ path: d })}
                  >
                    {d}
                  </Link>
                );
              })}
            </NavDropdown>
            <Link
              to={`/product/${this.state.chip_name}`}
              className="nav-link"
              onClick={() => this.setState({ path: null })}
            >
              Go back to datasheet
            </Link>
            <SimulationDropdown
              chip_name={this.state.chip_name}
              data={this.state.components}
              current_view={this.state.current_view}
            />
          </Row>
        </div>

        {/* Link to clickable tree viewer https://reactjsexample.com/a-simple-react-tree-menu-component/ */}
        <PDF
          size={this.props.windowWidth}
          chip={this.state.chip_name}
          file={this.state.current_view}
        />
        <DownloadButton chip={this.state.chip_name} />
      </Container>
    );
  }
}
