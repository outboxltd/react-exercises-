class App extends React.Component {
  constructor(props) {
    super(props)
    this.HeClick = this.HeClick.bind(this)
  }

  state = {
    name: 'gilad',
    age : 100,
    usertype : "",
    count: 0,
    color : "blue",
    colors : ["red","green","blue"],
  }

HeClick(e) {
        console.log(this.state)
    this.setState(
        {
        age:150,
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

increce = (e) => {
  this.setState(
    {
    count: this.state.count +1,
    
    }
  )
}
decrece = (e) => {
  this.setState(
    {
    count: this.state.count -1,
    }
  )
}
Hesubmit = (e) => {
  event.preventDefault()
  console.log("you submit " + this.state.usertype)
}

  render() {
      return(
          <div className="YallaApp">
             <h1  style={{color:this.state.color}} onCopy={this.WhenCopy}> hi you </h1> 


             <h1 onMouseOver={this.WhenMouseOver}> my name is : {this.state.name} i m {this.state.age} year old</h1>

             <button className="btny" onClick={this.HeClick} id="1">change age</button>
              <h2> {this.state.count}</h2>


            <form onSubmit={this.Hesubmit}>
              <input type="text"  onChange={this.HeChange}/>
              <button >submit</button>

             
            </form>


            <h1 style={{color:this.state.colors[1]}}>  {this.state.usertype}</h1>


            <button onClick={this.increce}>+</button>
            <button onClick={this.decrece}>-</button>
          </div>
      )
  }  
}

ReactDOM.render(<App />,document.getElementById('app'))