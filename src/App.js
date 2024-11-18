
import { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import Recommends from './components/recommends/Recommends';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import Brides from './components/brides/Brides';
import ByMe from './components/ByMe/ByMe';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBarNew/>
 <FirstScreen scrolled={scrolled}/>
  <AboutMe/>
  <Recommends/>
  <ForthScreen/>

  <SecondScreen/>
  <ThirdScreen/>
  <ByMe/>
  </>
}

export default App;
