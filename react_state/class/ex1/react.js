

class App extends React.Component {
  constructor(props) {
    super(props)
    this.Show = this.Show.bind(this)
    this.Hide = this.Hide.bind(this)
  }

  state = {
    color : "blue",
    hide : "hide",
    
  }



  Show(e) {
    
    this.setState(
        {
          hide:"show",
        }
      )
}

Hide(e) {
    
  this.setState(
      {
        hide:"hide",
      }
    )
}


  render() {
      return(
          <div className="YallaApp">
         
             <button className="btny" onClick={this.Show} >show box</button>

             <button className="btny" onClick={this.Hide} >hide box</button>
             
             <div className={this.state.hide} >  </div>
          
          </div>
      )
  }  
}

ReactDOM.render(<App />,document.getElementById('app'))