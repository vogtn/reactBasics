/** @jsx React.DOM */

var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.intialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
    return{
      intialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
        </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return(
      <ul>
      {
        this.props.items.map(function(item){
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    )
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));
