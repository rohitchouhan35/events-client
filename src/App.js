import './App.css';
import Home from './pages/Home';
import Eventform from './components/Eventform';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/addevent" element={<Eventform />} />
      </Routes>
    </div>
  );
}

export default App;
