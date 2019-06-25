class Bigbox extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.class + " box"}> 
                {this.props.children}
                  
                     </div>
            </div>
        );
    }
}




class App extends React.Component {
    render() {
        return (
            <Bigbox class="green">
                <Bigbox class="blue">
                    <Bigbox class="pink">
                    <Bigbox class="purple"> </Bigbox>
                    <Bigbox class="purple"> </Bigbox>
                    </Bigbox>
                </Bigbox>
            </Bigbox>);
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);