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


class App extends React.Component {
  render() {
    return (
      <div>
        <Title text="If I Rule the DOM" goofan="cursive" bgc="yellow"/>
        <Title text="Talk is cheap. Show me the code" goofan="fantasy" />
        <Title text="hello this is me" goofan="ariel" />

      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

render();