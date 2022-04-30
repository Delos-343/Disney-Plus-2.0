import { Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<h1>LOGIN FORM</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
