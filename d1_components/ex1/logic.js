class HelloWorldComponent extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>forth</li>

                </ul>
            </div>
        );
    }
}



ReactDOM.render(
    <div className="yalla">
        
        <HelloWorldComponent/>,

    </div>,
    document.getElementById("root")
);