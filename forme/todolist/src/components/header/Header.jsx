import React from "react";
import { Button } from 'react-bootstrap';


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            title : "how are you ?"
        };

                this.SayHello = this.SayHello.bind(this);

    } // end of constructor


    SayHello(e) {
        this.setState({
            title: "hello",
            
        });
    }

    render() {
        return(
            <div>
                 <h1> {this.state.title}</h1> 

                <i id="logo" className="fas fa-list-alt"></i>

                 <Button variant="info" onClick={this.SayHello}>sayhello</Button>

            </div>
        )
    }
}

export default Header