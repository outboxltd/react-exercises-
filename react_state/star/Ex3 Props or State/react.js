class SecondComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisible : true,
        text : "isVisible  with state",
    };    
  }

  render() {
      return(
          <div className="YallaApp">
            <h4>  {this.props.text}  </h4>    
            <h4>   {this.state.text} </h4> 
          </div>
      )
  }  
}

class App extends React.Component {
 
  render() {
      return(
          <div className="YallaApp">
          <SecondComponent text="isVisible  with prop"/>
          </div>
      )
  }  
}






ReactDOM.render(<App />,document.getElementById('app'))