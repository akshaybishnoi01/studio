import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gaming from './components/Gaming';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Featured from './components/Featured';
import Ourimpact from './components/Ourimpact';
import Clients from './components/Clients';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import PreLoader from './components/PreLoader';
function App() {
  return (
    <div className='overflow-hidden max-w-[1920px] mx-auto'>
    <PreLoader />
      <HeroSection />
      <Gaming />
      <About />
      <Featured />
      <Ourimpact />
      <Clients />
      <Faq />
      <Newsletter />
      <Footer />
      <GoToTopButton/>
    </div>
  );
}

export default App;
