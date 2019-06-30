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

      <div className={this.props.CCC}>  </div>


      </div>
    );
  }
}





// the app

class App extends React.Component {
  render() {
    return (
      <div>
        <TheBox   CCC="fresh"/>
        <TheBox  CCC="calm"/>
        <TheBox  CCC="advanturs"/>
        <TheBox  CCC="happy"/>


        

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