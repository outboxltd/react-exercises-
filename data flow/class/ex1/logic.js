class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.state = {
            count: 0
        }
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <Clicker handleClick={this.increase}></Clicker>
                <span>{this.state.count}</span>
            </div>
        );
    }
}

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.props.handleClick();
    }
    render() {
        return (
            <button onClick={this.increment}>increment</button>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('logic'))