// box Component
class Box extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
      let boxStyle = {
        margin: 20,
        padding: 10,
        height: 100,
        width: 100,
        backgroundColor: "red",
        border: "1px solid black",
        
      }
      return <div style={boxStyle}>{this.props.children}</div>
    }
  }

  // app Component
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        backgroundColor: "red",
      }
    }
  
  
  
    componentDidMount() {
      setInterval(() => {
        this.setState({
            backgroundColor: "yellow"
        });
      }, 500)
    }
  
  
    render() {
      return (
        <Box>
          
        </Box>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("app"));