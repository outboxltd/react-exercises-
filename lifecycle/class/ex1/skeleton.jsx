class Box extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
        return <div>{this.props.children}</div>

    }
  }

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <Box>
              
            </Box>
          );
      
    }
  }




  ReactDOM.render(<App />, document.getElementById("app"));