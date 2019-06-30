class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: this.props.size + "px",
            height: this.props.size + "px"
        };
        return (
            <div className={this.props.isNextTo ? "next-to" : ""} style={style}></div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Box size="15" isNextTo={true}> </Box>
                <Box size="40" isNextTo={true}> </Box>                
                <Box size="100" isNextTo={true}> </Box>
                <Box size="40" isNextTo={true}> </Box>
                <Box size="15" isNextTo={true}> </Box>                
                <Box size="250" isNextTo={false}> </Box>
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();
