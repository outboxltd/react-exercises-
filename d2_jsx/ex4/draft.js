
class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.counter = 0;
        this.displayMessage = this.displayMessage.bind(this);
    }

    displayMessage() {
        this.counter++;
        let message = `Hello ${this.counter}`; document.querySelector('#message').innerHTML = message;
    }

    render() {
        return (
        <div> 
            <button onClick={this.displayMessage}> Say Hello </button>
            <div id="message"> </div>
        </div>


        );
    }

}


ReactDOM.render(
    <div className="yoo">
        <ShowNumbers />
    </div>,
    document.getElementById("root")
);

