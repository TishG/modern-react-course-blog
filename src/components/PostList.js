import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

import UserHeader from "./UserHeader";
import "../index.css";

class PostList extends React.Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };
  render() {
    const postList = this.props.posts
      .map((post) => {
        return (
          <div className="post-item" key={post.id}>
            <span className="fas fa-user-circle" />
            <div className="title-body-container">
              <div>
                <span className="post-title">Title:</span> {post.title}
              </div>
              <div>
                <span className="post-body">Body:</span> {post.body}
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        );
      })
      .slice(0, 20);
    return <div>{postList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
