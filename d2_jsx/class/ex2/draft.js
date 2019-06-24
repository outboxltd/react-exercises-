
class Title extends React.Component {
    render() {
        let text = "Welcome";
        let name = "gilad"
        let title = <h2>{text} {name} </h2> 
        return (
            <div>
                {title}
                <h4>And a subtitle</h4> </div>
        );
    }
}



