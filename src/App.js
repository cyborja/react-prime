import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Gold from './pages/Gold';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/gold" element={<Gold/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
