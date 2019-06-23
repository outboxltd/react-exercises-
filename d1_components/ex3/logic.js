class Quiz extends React.Component {
    render() {
        return (
            <div className="QuizTitle">
                <QuizTitle />
                <Q1 />
                <Scroler />
                <Q2 />
                <Q2Input />

            </div>
        );
    }
}
class QuizTitle extends React.Component {
    render() {
        return (
            <div>
                <h2>   how do you like front end ?   </h2>
            </div>
        );
    }
}
class Q1 extends React.Component {
    render() {
        return (
            <div>
                <h3>   how do you like front end ?   </h3>

            </div>
        );
    }
}
class Scroler extends React.Component {
    render() {
        return (
            <div>
                <input type="range" id="start" name="volume"
         min="0" max="10"></input>
            </div>
        );
    }
}
class Q2 extends React.Component {
    render() {
        return (
            <div>
                <h3>   what is your favourite topic  ?   </h3>

            </div>
        );
    }
}
class Q2Input extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
            </div>
        );
    }
}


ReactDOM.render(
    <div>

        <Quiz />

    </div>,
    document.getElementById("root")
);