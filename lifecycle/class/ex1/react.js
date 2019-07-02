class Box extends React.Component {
  constructor(props) {
    console.log("app - constarctor")
    super(props);
  }

  componentWillMount() {
    console.log("box will be mounted")
  }
  componentDidMount() {
    console.log("box was mounted")
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    console.log("I received props!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("I was updated!");
  }

  render() {
    console.log("app - render")

    let boxStyle = {
      margin: 20,
      padding: 10,
      border: "1px solid black",
      display: this.props.isShown ? "block" : "none"
    }
    return <div style={boxStyle}>{this.props.children}</div>
  }
}
class App extends React.Component {
  constructor() {
    console.log("app - constarctor")
    super();
    this.state = {
      isShown: true
    }
    console.log("app - constarctor")
  }

  componentWillMount() {
    console.log("app will be mounted")
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShown: !this.state.isShown
      });
    }, 1000)
  }


  render() {
    console.log("app - render")
    return (
      <Box isShown={this.state.isShown}>
        <Box isShown={this.state.isShown} />
        <Box isShown={this.state.isShown} />
      </Box>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));