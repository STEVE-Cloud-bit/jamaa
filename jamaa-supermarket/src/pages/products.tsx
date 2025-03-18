import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";

const PageContainer = styled.div`
  padding: 40px;
  text-align: center;
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

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>All Products</h1>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Grid>
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <Price>${product.price.toFixed(2)}</Price>
            </Card>
          ))}
        </Grid>
      </PageContainer>
      <Footer />
    </>
  );
}
