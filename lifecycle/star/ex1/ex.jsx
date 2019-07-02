class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "yellow",
            TheClass : "ragil"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
             TheClass: "show"
            });
        }, 4000)
    }

    componentDidUpdate() {
       
      }



    render() {

        return <div className={this.state.TheClass} style={{backgroundColor: this.state.backgroundColor }}>
            {this.props.children}
            </div>

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

//   setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("app"));
//  }, 1000);