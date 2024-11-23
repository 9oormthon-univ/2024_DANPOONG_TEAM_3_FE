// src/pages/Main/component/MainPage.tsx
import Header from './component/Header.tsx';
import Banner from './component/Banner.tsx';
import TodayChallenge from './component/TodayChallenge.tsx';
import RecommendSlide from './component/RecommnedSlide.tsx';
import TravleConcepts from './component/TravleConcepts.tsx';
import PopularActivitySlide from './component/PopularActivitySlide.tsx';
import Footer from './component/Footer.tsx';
import SearchBar from "./component/SearchBar.tsx";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="absolute bottom-[53%] left-[59%] transform -translate-x-1/2 w-[80%] z-[1000]">
        <SearchBar />
      </div>
      <TodayChallenge />
      <RecommendSlide />
      <TravleConcepts />
      <PopularActivitySlide /> 
      <Footer />
    </div>
  );
};

export default MainPage;
