import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Jamaa Supermarket. All rights reserved.</p>
    </FooterContainer>
  );
}
