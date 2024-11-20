import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 라우팅 */}
        <Route path="/" element={<MainPage />} />

        {/* 여행콘텐츠 페이지 라우팅 */}
        {/* <Route path="/travle-contents" element={<TravleContents />} /> */}
      </Routes>
    </Router>
  );
}

export default App;