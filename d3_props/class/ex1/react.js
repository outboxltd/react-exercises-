class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      "fontFamily": this.props.goofan,
      "backgroundColor" : this.props.bgc
    };
    return (
      <h2 style={style}> {this.props.text} </h2>
    );
  }
}


// button
class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      "fontFamily": this.props.goofan,
      "backgroundColor" : this.props.bgc
    };
    return (
    <button>hello</button>

    );
  }
}
// button


// the app

class App extends React.Component {
  render() {
    return (
      <div>
        <Title text="If I Rule the DOM" goofan="cursive" bgc="yellow"/>
        <Title text="Talk is cheap. Show me the code" goofan="fantasy" />
        <Title text="hello this is me" goofan="ariel" />
        <Button/>

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