import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;

  a {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;
const StyledHeader = styled.header`
  display: grid;
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
    grid-area: bar;
  }
  input {
    background-color: ${props => props.theme.lightBlue};
    height: 50px;
    padding: 10px;
    margin: 10px;
    border: none;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 25%;
    margin-top: 50px;
    grid-area: subbar;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a href="">BOX</a>
        </Link>
      </Logo>
      <input type="text" placeholder="Search for files.." />
    </div>
    <div className="sub-bar">
      <Nav />
    </div>
  </StyledHeader>
);
export default Header;
