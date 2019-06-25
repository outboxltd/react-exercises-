class TheBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      "height": this.props.gova,
      "width" : this.props.rohav,
      "backgroundColor" : this.props.bgc
    };

   
    return (
      <div>  

      <div style={style}> {this.props.text}   </div>
      <div className={this.props.CCC}> {this.props.text} </div>


      </div>
    );
  }
}





// the app

class App extends React.Component {
  render() {
    return (
      <div>
        <TheBox text="fresh" gova="100px" rohav="100px" bgc="green" CCC="fresh"/>
        <TheBox text="calm" gova="100px" rohav="100px" bgc="blue" CCC="calm"/>
        <TheBox text="advanturs" gova="100px" rohav="100px" bgc="pink" CCC="advanturs"/>
        <TheBox text="happy" gova="100px" rohav="100px" bgc="purple" CCC="happy"/>


        

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