

class App extends React.Component {
  constructor(props) {
    super(props)
    this.blue = this.blue.bind(this)
    this.green = this.green.bind(this)
    this.orange = this.orange.bind(this)
  }

  state = {
    color : "white bb",
     
  }



  blue(e) {
    
    this.setState(
        {
          color:"blue bb",
        }
      )
}
green(e) {
    
    this.setState(
        {
          color:"green bb",
        }
      )
}
orange(e) {
    
    this.setState(
        {
          color:"orange bb",
        }
      )
}




  render() {
      return(
          <div className="YallaApp">
         
             <button className="btny" onClick={this.blue} >blue</button>

             <button className="btny" onClick={this.green} >green</button>

             <button className="btny" onClick={this.orange} >orange</button>
             
             <div className={this.state.color} >  </div>
          
          </div>
      )
  }  
}

ReactDOM.render(<App />,document.getElementById('app'))