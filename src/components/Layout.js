import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0 8px;
  img {
    height: 50px;
    width: 150px;
    object-fit: contain;
  }

  nav {
    display: flex;
    background-color: white;
    a {
      width: 100px;
      height: 70px;
      border-bottom: 5px solid white;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: black;
        font-weight: bold;
      }

      &:hover {
        border-bottom: 4px solid black;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    img {
      margin-top: 8px;
    }
    nav {
      width: 100%;
      gap: 8px;
      display: flex;
      a {
        flex-grow: 1;
      }
    }
  }
`;

function Layout() {
  return (
    <>
      <StyledHeader>
        <img
          alt="logo"
          src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png"
        />
        <nav>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/posts/"}>
            <p>Posts</p>
          </Link>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
}

export default Layout;
