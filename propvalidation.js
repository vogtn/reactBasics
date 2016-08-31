var CounterDisplay = React.createClass({
  render: function(){
    return <div>
            <div>{this.props.counterProp}</div>
        <br />
        <button onClick={this.props.incrementCounter}>+</button>
        <button onClick={this.props.decrementCounter}>-</button>
        </div>
  },
  //setup validation for each props
  propTypes: {
    //must be a number
    counterProp: React.PropTypes.number.isRequired,
    //must be functions
    incrementCounter: React.PropTypes.func.isRequired,
    decrementCounter: React.PropTypes.func.isRequired
  }
})
