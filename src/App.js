import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FlashProvider from './contexts/FlashProvider';
import ApiProvider from './contexts/ApiProvider'
import Header from "./components/Header";
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import RegistrationPage from './pages/RegistrationPage';

export default function App() {
  
  return (
    <Container fluid className="App">
    <BrowserRouter basename="/microblog">
    <FlashProvider>
    <ApiProvider>
    <Header />

    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/user/:username" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </ApiProvider>
    </FlashProvider>
    </BrowserRouter>
    </Container>
  )
}
