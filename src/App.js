import './App.css';
import MainHeader from './components/Header/MainHeader';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from '../src/pages/ChatPage';

function App() {
  return (
    <Router>
      <div>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Navigate replace to="/chat"/>} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
