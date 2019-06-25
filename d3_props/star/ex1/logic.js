class TheBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      "height": this.props.gova,
      "width": this.props.rohav,
      "backgroundColor": this.props.bgc
    };


    return (
      <div >


        <div className={this.props.CCC}>

          <img src={this.props.src} alt={this.props.text} className="pico" ></img>

          <h3 className="center"> {this.props.title}</h3>

          <p className="center"> {this.props.blabla} </p>



        </div>


      </div>
    );
  }
}



// the app

class App extends React.Component {
  render() {
    return (
      <div className="cont">
        <TheBox text="fresh" CCC="fresh" src="https://image.flaticon.com/icons/svg/874/874970.svg" title="Ready to travel" blabla="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugiat architecto pariatur alias"/>

        <TheBox text="calm" CCC="calm" src="https://image.flaticon.com/icons/svg/875/875011.svg" title="select the date" blabla="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugiat architecto pariatur alias" />

        <TheBox text="advanturs" CCC="advanturs" src="https://image.flaticon.com/icons/svg/874/874997.svg" title="feels like home" blabla="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugiat architecto pariatur alias" />




      </div>
    );
  }
}

// the app


function render() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

render();