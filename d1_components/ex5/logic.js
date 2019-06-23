class TheBOX extends React.Component {
    render() {
        return (
            <div className="TheBOX">
                <input type="button" value="click"/>

            </div>
        );
    }
}



ReactDOM.render(
    <div>  <TheBOX/> </div>,
    document.getElementById("root")
);