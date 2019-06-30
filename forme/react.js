

class App extends React.Component {
  constructor(props) {
    super(props)
    this.HeClick = this.HeClick.bind(this)
  }

  state = {
    name: 'gilad',
    age : 35,
    usertype : ""
  }

HeClick(e) {
    // console.log(e.target.id)
        console.log(this.state)
    // console.log(this.state.age)
    this.setState(
        {
        age:150
        }
      )
}
WhenMouseOver = (e) => {
    console.log(e.pageX)
    console.log(e.pageY)
    console.log(this.state.name)

}

WhenCopy(e){
  console.log("do nt copy !!!")
}

HeChange = (e) => {
  console.log(e.target.value)
  this.setState(
    {
      usertype:(e.target.value)
    }
  )
}

  render() {
      return(
          <div className="YallaApp">
             <h1 onCopy={this.WhenCopy}> hi you </h1> 
             <p> {Math.random()*10} </p>

             <h1 onMouseOver={this.WhenMouseOver}> my name is : {this.state.name} i m {this.state.age} </h1>

             <button className="btny" onClick={this.HeClick} id="1">click me</button>

            <form>
              <input type="text" onChange={this.HeChange}/>
            </form>
            <h1> {this.state.usertype}</h1>
            <h1> {this.state.usertype}</h1>

          </div>
      )
  }  
}

ReactDOM.render(<App />,document.getElementById('app'))