class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.logos = [
      <img src="https://img.icons8.com/ios/50/000000/reddit.png" />,
      <img src="https://img.icons8.com/ios/50/000000/search.png" />,
      <img src="https://img.icons8.com/ios/50/000000/pinterest.png" />
    ];
    this.state = {
      num: Math.floor(Math.random() * 10)
    };
    this.restRan = this.restRan.bind(this);
  }
  restRan() {
    this.setState({
      num: 0
    });
  }
  render() {
    let display = [];
    for (let i = 0; i < this.logos.length; i++) {
      display[i] = <div className="logos"> {this.logos[i]} </div>;
      if (i === 2) {
        display[i] = (
          <div onClick={this.restRan} className="logos">
            {this.logos[i]}
            <div className="span"> {this.state.num}</div>{" "}
          </div>
        );
      }
    }
    return (
      <div className="container">
        <div> {display}</div>
      </div>
    );
  }
}
function render() {
  ReactDOM.render(
    <div>
      <Counter/>
    </div>,
    document.getElementById("root")
  );
}
render();
