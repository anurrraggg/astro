import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page" role="main" aria-label="Landing page">
      <Navbar />
      <HeroBanner />
    </main>
  );
}

export default HomePage;
