import styled from "styled-components";
import { products } from "../data/products";

const Section = styled.section`
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ff4500;
`;

export default function FeaturedProducts() {
  return (
    <Section>
      <Title>Featured Products</Title>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <Price>${product.price.toFixed(2)}</Price>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
