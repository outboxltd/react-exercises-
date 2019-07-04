class Radio extends React.Component {
    constructor(props) {
      super(props);
      this.isProgramer = this.isProgramer.bind(this);
    }
  
    isProgramer(e) {
      this.props.programer(e.target.value);
    }
  
    render() {
      return (
        <div>
          <input
            type="radio"
            checked={this.props.checked}
            name={this.props.name}
            value={this.props.value}
            onClick={this.isProgramer}
          />{" "}
          {this.props.value}
        </div>
      );
    }
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.isProgramer = this.isProgramer.bind(this);
      this.state = {
        knowsJava: null,
        knowsPython: null
      };
    }
  
    // logic
    isProgramer(select) {
      if (select === "No") {
        this.setState({ knowsJava: true, knowsPython: true });
      } else {
        this.setState({ knowsJava: null, knowsPython: null });
      }
    }
  
    render() {
      return (
        <div>
          <h2>Have You Programed before?</h2>
          <Radio name="programing" value="Yes" programer={this.isProgramer} />
          <Radio name="programing" value="No" programer={this.isProgramer} />
          <h2>Have You Programed in Java?</h2>
          <Radio name="java" value="Yes" />
          <Radio name="java" value="No" checked={this.state.knowsJava} />
          <h2>Have You Programed in Python?</h2>
          <Radio name="python" value="Yes" />
          <Radio name="python" value="No" checked={this.state.knowsPython} />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));