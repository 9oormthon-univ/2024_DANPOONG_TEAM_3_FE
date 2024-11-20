import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuth } from './pages/UserAuth';
import { KakaoLoginCallback } from './pages/KakaoLoginCallback';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<UserAuth />} />
                <Route path="/api/callback" element={<KakaoLoginCallback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
