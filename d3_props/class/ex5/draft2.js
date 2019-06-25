
class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.counter = 0;
        this.displayMessage = this.displayMessage.bind(this);
    }

    displayMessage() {
        this.counter = (this.counter)+1;
        let message = `the number is  ${this.counter}`; document.querySelector('#message').innerHTML = message;
    }


    Upto(n) {
        for (let i = 0; i < n; i++) {
            console.log(i)  
        }
    }
    
    render() {
        return (
        <div> 
            <button onClick={this.displayMessage}> + </button>
            <div id="message"> </div>


            <input type="text" id="usernum"/>
            <br/>   
            <br/>   

            <button onClick={this.Upto()}> ShowNumber </button>

            <div id="shownumber"> </div>



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

