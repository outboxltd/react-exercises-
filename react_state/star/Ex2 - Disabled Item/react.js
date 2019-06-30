class Button extends React.Component {
  constructor(value) {
      super();
      this.value = value;
      this.disableColor = this.disableColor.bind(this);
      this.state = {
          disabled: false
      };
  }

  disableColor(e) {
      e.target.disabled = !e.target.disabled ? true : false;
      this.setState({
          disabled: e.target.disabled
      });
  }

  render() {
      return <button disabled={this.state.disabled} onClick={this.disableColor}>{this.props.value}</button>
  }
}

class App extends React.Component {
  render() {
      return (
          <React.Fragment>
              <h1>Which color do you want?</h1>
              <h4>(disable the ones you don't want with a click)</h4>
              <span>
                  <Button value='blue'></Button>
                  <Button value='red'></Button>
                  <Button value='purple'></Button>
                  <Button value='green'></Button>
                  <Button value='yellow'></Button>
              </span>
          </React.Fragment>
      );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);