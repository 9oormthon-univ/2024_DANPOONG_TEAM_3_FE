import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuthPage } from './pages/UserAuth';
import { KakaoLoginCallback } from './pages/KakaoLoginCallback';
import { Challenge } from './pages/Challenge';
import { OverlayProvider } from '@toss/use-overlay';
import './App.css';
import MainPage from './pages/Main/MainPage.tsx';

function App() {
    return (
        <OverlayProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<UserAuthPage />} />
                    <Route path="/api/callback" element={<KakaoLoginCallback />} />
                    <Route path="/challenge" element={<Challenge />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </OverlayProvider>
    );
}

export default App;
