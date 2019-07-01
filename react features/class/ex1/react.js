class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Please sign up.</h1>;
  }
}
class Greeting extends React.Component {
  render() {
    return this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
    
  }
}

ReactDOM.render(
  <Greeting isLoggedIn={true} />, 
  document.getElementById('app')
);