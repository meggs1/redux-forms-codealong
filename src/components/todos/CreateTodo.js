import React, { Component } from 'react'
import { connect } from 'react-redux';


class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ 
      type: 'ADD_TODO', payload: formData 
    })
  }
}


// Since we only need to dispatch an action here and we are not getting information from our store, we can use `null` instead of
// `mapStateToProps` as the first argument.
export default connect(null, mapDispatchToProps)(CreateTodo);
