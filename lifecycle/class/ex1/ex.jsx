class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "yellow",
            backrountStack: ["red", "green", "blue", "purple", "pink", "gray", "blue", "purple"]
        }
    }

    componentDidMount() {
        let n = 0;
        setInterval(() => {
             if (n > 6) {
                 n = 0;
             }   
            n++
            this.setState({
                backgroundColor: (this.state.backrountStack[n])
            });
        }, 500)
    }

    componentDidUpdate() {
        // let n = 0;
        // setInterval(() => {
        //      if (n > 6) {
        //          n = 0;
        //      }   
        //     n++
        //     this.setState({
        //         backgroundColor: (this.state.backrountStack[n])
        //     });
        // }, 1000)       
      }



    render() {

        return <div style={{backgroundColor: this.state.backgroundColor} }>{this.props.children}</div>

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