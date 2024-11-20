import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuthPage } from './pages/UserAuth';
import { KakaoLoginCallback } from './pages/KakaoLoginCallback';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<UserAuthPage />} />
                <Route path="/api/callback" element={<KakaoLoginCallback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
