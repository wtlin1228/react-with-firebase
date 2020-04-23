import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../helpers";

export const PostsContext = createContext();

class PostsProvider extends Component {
  state = {
    posts: [],
  };

  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });
  };

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
      <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    );
  }
}

export default PostsProvider;
