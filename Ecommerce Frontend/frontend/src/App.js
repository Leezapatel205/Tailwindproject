
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Category from "./component/Category";
import FeatureSectionFruits from "./component/FeatureSectionFruits";
import FeatureSectionBreakfast from "./component/FeatureSectionBreakfast";
import BannerSection from "./component/BannerSection";
import BlogSection from "./component/BlogSection";
import NewsLetter from "./component/NewsLetter";
import FeatureSection from "./component/FeatureSection";

import Footer from "./component/Footer";


function App() {
  return (
   <main>
     <Navbar/>
     <Hero />
    <Category />
    <FeatureSectionFruits />
    <FeatureSectionBreakfast/>
    <BannerSection/>
    <BlogSection/>
    <NewsLetter/>
   <FeatureSection/>
   <Footer/>
   
    </main>
  );
}

export default App;
