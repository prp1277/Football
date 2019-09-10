import React from 'react';

class nlmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Paste some shit here' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Something was submitted' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}>{}</input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default nlmForm;
