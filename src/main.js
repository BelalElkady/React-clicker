import React, { Component } from "react";
import { Card, Button, CardText } from "reactstrap";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd() {
    this.setState({
      count: this.state.count + 1
    });
  }
  onSub() {
    this.setState({
      count: this.state.count - 1
    });
  }
  onReset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div className="container mt-3 ">
        <div className="row ">
          <div className="col-4 offset-4 ">
            <Card
              body
              className="d-flex flex-column  "
              style={{ backgroundColor: "#F6FFFF", borderColor: "#A9A9A9" }}
            >
              <CardText className=" justify-content-center p-5 clicker-display">
                <h1 className="count-style">{this.state.count} </h1>
              </CardText>
              <div className="d-flex flex-row clicker-button-panel ">
                <Button
                  color="success"
                  className="w-100"
                  onClick={() => this.onAdd()}
                >
                  <i className="fas fa-plus" />
                </Button>
                <Button
                  color="warning"
                  className="w-100"
                  onClick={() => this.onReset()}
                >
                  <i className="fas fa-sync-alt" />
                </Button>
                <Button
                  color="danger"
                  className="w-100"
                  onClick={() => this.onSub()}
                >
                  <i className="fas fa-minus" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
