import './App.css';
import FirstDiv from './components/FirstDiv';
import Navbar from './components/Navbar';
import SecondDiv from './components/SecondDiv';
import image1 from './firstImg.jpeg'
import image3 from './thirdImg.jpeg'
import image4 from './forthImg.jpeg'
import image2 from './secondImg.webp'
import InfoDiv from './components/InfoDiv';
import LastSection from './components/LastSection';
import Footer from './components/Footer';
import MediaIcons from './components/MediaIcons';


function App() {
  return (
    <div className="App">
     <Navbar />
     <FirstDiv img={image1} buttonText={'Play to win'} />
     <SecondDiv img={image2} text={'Link Accounts'} />
     <FirstDiv img={image3} disable={true} buttonText={'Order Now'} />
     <FirstDiv img={image4} active={true} disable={true} buttonText={'Learn More'} />
     <InfoDiv />
     <LastSection />
     <hr />
     <MediaIcons />
     <Footer />
     {/* <Button />Z */}

    </div>
  );
}

export default App;
