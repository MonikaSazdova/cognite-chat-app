import './App.css';
import MainHeader from './components/Header/MainHeader';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from '../src/pages/ChatPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Navigate replace to="/chat"/>} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
    </Router>
  );
}

export default App;
