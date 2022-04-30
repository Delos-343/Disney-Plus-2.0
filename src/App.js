import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
