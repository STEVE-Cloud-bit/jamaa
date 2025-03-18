import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Jamaa Supermarket</h1>
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
