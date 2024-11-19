import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuth } from './pages/UserAuth';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<UserAuth />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
