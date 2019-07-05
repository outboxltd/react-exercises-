import React from "react";
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Taskbbar from "../taskbbar/Taskbbar"



class Lists extends React.Component {
    constructor() {
        super();

        this.state = {
            // title: [],
            title: "WRITE YOUR  FIRST TASK",
            done : "eat sleep rave repeat"
        };



    } // end of constructor



    myCallback = (e) => {
        this.setState({ title: e.target.value});
       }

    render() {
        return (
            <div>

            <Taskbbar callbackFromParent={this.myCallback}/>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                To do
                 </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{this.state.title}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                DONE !!!
                 </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>{this.state.done}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>






            </div>
        )
    }
}

export default Lists