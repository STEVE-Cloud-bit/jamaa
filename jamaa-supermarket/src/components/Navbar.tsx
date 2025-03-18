import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background: #ff4500;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.a`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>Jamaa Supermarket</Logo>
      <NavLinks>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/products" passHref>
          <StyledLink>Products</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact Us</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About Us</StyledLink>
        </Link>
      </NavLinks>
    </Nav>
  );
}
