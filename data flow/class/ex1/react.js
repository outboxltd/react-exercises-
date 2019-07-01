
class App extends React.Component {
  constructor(props) {
    super(props)
    
  }

  state = {
    usertype : "",
  }




HeChange = (e) => {
  console.log(e.target.value)
  this.setState(
    {
      usertype:(e.target.value)
    }
  )
}

i

  render() {
      return(
          <div className="YallaApp">
          
            <form>
              <input type="text" onChange={this.HeChange}/>
            </form>

            <h1> {this.state.usertype}</h1>
            <h1> {this.state.usertype}</h1>
            <h1> {this.state.usertype}</h1>
          
          </div>
      )
  }  
}

ReactDOM.render(<App />,document.getElementById('app'))