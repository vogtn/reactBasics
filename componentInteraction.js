var CounterDisplay = React.createClass({
  render: function(){
    return <div>
            <div>{this.props.counterProp}</div>
            <button onClick ={this.props.incrementCounter}>+</button>
            <button onClick ={this.props.decrementCounter}>-</button>
            </div>
  }
})

var Counter = React.createClass({
  getInitialState: function(){
    return {
      counter: 0
    };
  },
  handleIncrement(){
    //update counter state
    this.setState({counter: this.state.counter+1});
  },
  handleDecrement(){
    this.setState({counter: this.state.counter-1});
  },
  render: function(){
    //pass down handlers to CounterDisplay component
    return <div>
           <h2>{this.props.name}</h2>
           <CounterDisplay
           counterProp={this.state.counter}
           incrementCounter={this.handleIncrement}
           decrementCounter={this.handleDecrement}></CounterDisplay>
        </div>
  }
});

ReactDOM.render(
  <Counter name={'Counter'} />,
  document.getElementById('Container')
);

//CounterDisplay click events are handled by Counter (parent component);
