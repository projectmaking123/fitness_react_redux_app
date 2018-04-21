import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postFormActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.createPost({title: this.state.title})
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    return (
      <div>
        <h1>
          ADD POST
        </h1>

        <form onSubmit={this.onSubmit}>
          <label>Title: </label>
          <br/>
          <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          />
          <button type="submit">
          Add Post
          </button>
        </form>

      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { createPost })(PostForm);
