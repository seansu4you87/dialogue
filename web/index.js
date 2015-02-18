var MyComponent = React.createClass({
  render: function() {
    return React.DOM.h1(null, "Ni hao, React");
  }
});

//React.renderComponent(
//    MyComponent(),
//    document.getElementById('example')
//);

var HelloMessage = React.createClass({
  render: function() {
    return (
        <div>
            <h1>Greetings, Professor {this.props.name}.</h1>
            <p>
                Would you like to play a game?<br />
                How about a nice game of
                <a href="http://nsa.gov">Chess</a>?
            </p>
        </div>
    );
  }
})

React.renderComponent(<HelloMessage name="Professor Falken" />, mountNode);

