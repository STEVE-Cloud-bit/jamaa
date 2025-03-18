import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background: #ff4500;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #e63e00;
  }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <ContactContainer>
        <Heading>Contact Us</Heading>
        <Paragraph>We’d love to hear from you! Get in touch with us using the form below.</Paragraph>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit">Send Message</Button>
        </Form>
        <Heading>Or Reach Us At</Heading>
        <Paragraph>📍 Location: 123 Market Street, Nairobi</Paragraph>
        <Paragraph>📞 Phone: +254 700 123 456</Paragraph>
        <Paragraph>✉ Email: support@jamaasupermarket.com</Paragraph>
      </ContactContainer>
      <Footer />
    </>
  );
}
