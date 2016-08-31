//Extends React.component

class Comment extends React.Component{
  //Render method now a class member rather than object property
  render(){
    return <h1>{this.props.name}</h1>;
  }
}

React.render(<Comment name='Comment')/>, document.getElementById('container'));

//Setting States with classes
class Comment extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
  }
  render(){
    return <h1>{this.props.name}</h1>;
  }
}

 React.render(<Comment name={'Comment'}/>, document.getElementById('container'));


 //Stateless Components

 function CommentDisplay(props){
   return <div>
            <div>{this.props.counterProp}</div>
            <button onClick={this.props.incrementCounter}>+</button>
            <button onClick={this.props.decrementCounter}>-</button>
            </div>
 }
