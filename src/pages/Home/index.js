import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledHome = styled.main`
  padding: 8px;
`;

function Home() {
  return (
    <StyledHome>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page." />
      </Helmet>
      <h1>Home</h1>
      <p>This is the home page</p>
    </StyledHome>
  );
}

export default Home;
