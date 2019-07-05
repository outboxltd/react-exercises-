import React, { Component } from 'react';



class Taskbbar extends Component {
    constructor() {
        super();

        this.state = {
            askuser : "please enter task"
        };

                this.UserType = this.UserType.bind(this);

    }
    

    UserType(e) {
        let usertype = e.target.value
        console.log(usertype)
        this.setState({
            task: usertype,
            
        });
    }


    render() {
        return (
            <div>

                <input type="text" name="" id="" placeholder=          {this.state.askuser} onChange={this.UserType} />
                
                <button onClick={this.props.callbackFromParent} value={this.state.task}>add task</button>
            </div>
        );
    }
}

export default Taskbbar