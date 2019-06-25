class Loto extends React.Component {
    loto() {
        
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let rando = getRandomInt(1, 10) 
            let title;
            if (rando > 5) {
                title = ("you won :)" + " the number is " + rando)
            } else {
                title = ("you lost :(" + " the number is " + rando)
            }

        return title;
    }
    render() {

        let result = this.loto();
        
        return (<div>{result} </div>
        );
    }
}





ReactDOM.render(
    <div className="yoo">
        <Loto />
    </div>,
    document.getElementById("root")
);

