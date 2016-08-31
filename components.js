//Basic component using JSX
<script type="text/jsx">
  /** @jsx React.DOM */
  ReactDOM.render(
    <h1>Hello, world</h1>
    document.getElementById('myDiv')
  );
  </script>

//basic component without JSx

React.render(
  React.createElement('h1',null,'Hello!'),
  document.getElementById('myDiv')
);

//Class component
//1st create class
var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>Hello, world!</h1>
    );
  }
});
//render to document
ReactDOM.render(
  <MyComponent/>,
  document.getElementById('myDiv')
);

//props
var myComponent = React.createClass({
  render: function(){
    return(
      <h1>Hello, {this.props.name}!</h1>
    );
  }
});
