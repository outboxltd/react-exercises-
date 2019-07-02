class Box1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }
    render() {
        return (<div>
            <input type="checkbox" onChange={() => {this.setState({checked: !this.state.checked})}} checked={this.state.checked} /> {this.props.text}
        </div>
        )
    }
}
class Box2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schecked: false,
        }
    }
    render() {
        return (<div>
            <input type="checkbox" onChange={() => {this.setState({checked: !this.state.checked})}} checked={this.state.checked}/> {this.props.text}
        </div>
        )
    }
}
class Box3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        }
    }
    render() {
        return (<div>
            <input type="checkbox" onChange={() => {this.setState({checked: !this.state.checked})}} checked={this.state.checked} /> {this.props.text}
        </div>
        )
    }
}
class Box4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        }
    }
    render() {
        return (<div>
            <input type="checkbox"  onChange={() => {this.setState({checked: !this.state.checked})}} checked={this.state.checked}/> {this.props.text} 
        </div>
        )
    }
}





class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (


            <div>
                <form>
                <Box1 text="i read the term of the app"  />
                <Box2 text="i like pizza"  />
                <Box3 text="i am a ninja"  />
                <Box4 text="i like to move it move it"  />

                </form>
            </div>
            



        );

    }
}




ReactDOM.render(<App />, document.getElementById("app"));

