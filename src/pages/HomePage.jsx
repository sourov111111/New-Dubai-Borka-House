import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



import '../css/HomePage.css'

//components 
import HomeHeroSection from '../Components/HomeHeroSection';
import FeatureSection from '../Components/FeatureSection';
import Circuler from '../Components/Circuler';
import BanglaSetpONe from '../Components/BanglaSetpONe';
import BenifitSection from '../Components/BenifitSection';
import Fotter from '../Components/Fotter';


function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
<>

<div>
<HomeHeroSection/>
<FeatureSection/>
<Circuler/>
<BanglaSetpONe/>
<BenifitSection/>
<Fotter/>


</div>


</>
  )
}

export default HomePage