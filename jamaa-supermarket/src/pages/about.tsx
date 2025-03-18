import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #ff4500;
  font-weight: bold;
`;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <Heading>About Jamaa Supermarket</Heading>
        <Paragraph>
          Welcome to <Highlight>Jamaa Supermarket</Highlight>, your trusted destination for fresh, high-quality
          groceries at unbeatable prices. We are committed to bringing you the best shopping experience with a
          wide range of products, from fresh produce to household essentials.
        </Paragraph>
        <Heading>Our Mission</Heading>
        <Paragraph>
          At Jamaa Supermarket, our mission is to <Highlight>provide fresh, affordable, and sustainable groceries</Highlight> 
          while ensuring customer satisfaction and convenience.
        </Paragraph>
        <Heading>Our Values</Heading>
        <Paragraph>✔ <Highlight>Quality:</Highlight> We offer only the best products for our customers.</Paragraph>
        <Paragraph>✔ <Highlight>Affordability:</Highlight> Competitive prices without compromising on quality.</Paragraph>
        <Paragraph>✔ <Highlight>Community:</Highlight> Supporting local farmers and businesses.</Paragraph>
        <Heading>Contact Us</Heading>
        <Paragraph>
          📍 Location: 123 Market Street, Nairobi  
          📞 Phone: +254 700 123 456  
          ✉ Email: support@jamaasupermarket.com
        </Paragraph>
      </AboutContainer>
      <Footer />
    </>
  );
}
