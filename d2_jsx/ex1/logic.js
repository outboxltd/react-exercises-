class Factorial extends React.Component {
    calc(num) {
        var total = 1;
        for (var i = 0; i < num; i++) {
            total = total * (num - i);
        }
        return total;
    }
    render() {

        let result = this.calc(5);
        return (<div>{result}</div>
        );
    }
}



ReactDOM.render(
    <div className="Factorial">
        <Factorial />
    </div>,
    document.getElementById("root")
);

