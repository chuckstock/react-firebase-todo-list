var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },

  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-success"
          type="button">
          Add
        </button>
      </span>
    </div>
  },

  handleClick: function() {
    //send values to firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });

    //reset the value of the text input
    this.setState({text: ''});
  },

  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  }
})
