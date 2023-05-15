import Navbar from "./Components/Navbar";
import BrowseCategories from "./Components/main/BrowseCategories";
import DiscoverMore from "./Components/main/DiscoverMore";
import HowItWorks from "./Components/main/HowItWorks";
import JoinOurWeekly from "./Components/main/JoinOurWeekly";
import MagicMashrooms from "./Components/main/MagicMashrooms";
import TopCreators from "./Components/main/TopCreators";
import TrendingCollection from "./Components/main/TrendingCollection";
import HeroSection from "./Components/main/HeroSection";
import Footer from "./Components/Footer";
import './Components/scss/layout/_navigation.scss';
import './Components/scss/base/_base.scss';
import './Components/scss/base/_reset.scss';
import './Components/scss/base/_typography.scss';
import './Components/scss/pages/_home.scss'
import './Components/scss/pages/_marketplace.scss'
import './Components/scss/pages/_rankings.scss'
import './Components/scss/layout/_footer.scss';
import './Components/scss/pages/_addArtist.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <DiscoverMore/>
      <MagicMashrooms/>
      <HowItWorks/>
      <JoinOurWeekly/>
      <Footer/>
    </div>
  );
}

export default App;
