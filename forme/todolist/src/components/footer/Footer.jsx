import React from "react";
// import { Button } from 'react-bootstrap';


class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            title : "copyright shit"
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
                 <h5> {this.state.title}</h5> 

               

            </div>
        )
    }
}

export default Footer