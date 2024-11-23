import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserAuthPage } from './pages/UserAuth';
import { KakaoLoginCallback } from './pages/KakaoLoginCallback';
import { ChallengePage } from './pages/Challenge';
import { OverlayProvider } from '@toss/use-overlay';
import { ActivityDetailPage } from './pages/ActivityDetail';
import './App.css';
import MainPage from './pages/Main/MainPage.tsx';
import TravleContents from './pages/TravleContents/TravleContents.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MyPage } from './pages/MyPage/index.tsx';
import Activity from "./pages/Activities/ActivityPage.tsx";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 10000,
                retry: 2,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <OverlayProvider>
                    <Routes>
                        <Route path="/auth" element={<UserAuthPage />} />
                        <Route path="/api/callback" element={<KakaoLoginCallback />} />
                        <Route path="/challenge" element={<ChallengePage />} />
                        <Route path="/activity/:id" element={<ActivityDetailPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/content" element={<TravleContents />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/activity" element={<Activity />} />
                    </Routes>
                </OverlayProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
