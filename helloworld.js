///Reach.createClass argument of object type must be passed
var Hello = React.createClass({
  render: function(){
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name ="World" />
  document.getElementByID('container')
);


//HTML:
/*
<div id="container">
    <!-- This element's contents will be replaced with your component. -->
</div>
*/
