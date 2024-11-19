// src/pages/Main/component/MainPage.tsx
import Header from './component/Header';
import Banner from './component/Banner';
import Challenge from './component/Challenge';
import Recommendation from './component/Recommendation';
import PopularActivities from './component/PopularActivities';
import Footer from './component/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Challenge />
      <Recommendation />
      <PopularActivities />
      <Footer />
    </div>
  );
};

export default MainPage;
