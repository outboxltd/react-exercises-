
class Laser extends React.Component {
    activateLasers(){ 
        document.getElementById("greating").innerHTML = "hello world";
        console.log("clicked");
    }


      render() {
         return (
            <div> 
            <button onClick={this.activateLasers}> Activate Lasers</button>
            <div id="greating"></div>
            </div>
            );


    } }


ReactDOM.render(
    <div className="yoo">
        <Laser />
    </div>,
    document.getElementById("root")
);

