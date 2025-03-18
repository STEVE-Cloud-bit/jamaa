import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: url("/images/supermarket.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Button = styled.a`
  background: #ff4500;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #e03e00;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Welcome to Jamaa Supermarket</Title>
      <Subtitle>Your one-stop shop for fresh groceries</Subtitle>
      <Button href="/products">Shop Now</Button>
    </HeroSection>
  );
}
