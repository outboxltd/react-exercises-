class BigBox extends React.Component {
    render() {
        return (
            <div className="BigBox">
                
                <Midlebox/>
            </div>
        );
    }
}


class Midlebox extends React.Component {
    render() {
        return (
            <div className="Midlebox">
               <TiradBox/> 
                
            </div>
        );
    }
}

class TiradBox extends React.Component {
    render() {
        return (
            <div className="TiradBox">
               <SmallBox/> 
               <SmallBox/> 

                
            </div>
        );
    }
}


class SmallBox extends React.Component {
    render() {
        return (
            <div className="SmallBox">
                
                
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        
        <BigBox/>,

    </div>,
    document.getElementById("root")
);