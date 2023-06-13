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
import UserProvider from './contexts/UserProvider';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


export default function App() {
  
  return (
    <Container fluid className="App">
    <BrowserRouter basename="/microblog">
    <FlashProvider>
    <ApiProvider>
    <UserProvider>
    <Header />

    <Routes>
      <Route path="/login" element={
        <PublicRoute><LoginPage /></PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute><RegistrationPage /></PublicRoute>
      } />
      <Route path="*" element={
        <PrivateRoute>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </PrivateRoute>
      } />
    </Routes>

    </UserProvider>
    </ApiProvider>
    </FlashProvider>
    </BrowserRouter>
    </Container>
  )
}
