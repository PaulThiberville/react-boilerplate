import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsActions } from "../../store/posts";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const StyledPosts = styled.main`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const Post = styled.article`
  border-bottom: solid 2px lightgray;
  background-color: white;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function App() {
  const posts = useSelector(state => state.posts.value);
  const error = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, []);

  return (
    <StyledPosts>
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="Posts page." />
      </Helmet>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {posts.map(post => {
        return (
          <Post>
            <h2>{post.title}</h2> <p>{post.body}</p>
          </Post>
        );
      })}
    </StyledPosts>
  );
}

export default App;
