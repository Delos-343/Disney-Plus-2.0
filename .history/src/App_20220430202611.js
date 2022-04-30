import { Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
