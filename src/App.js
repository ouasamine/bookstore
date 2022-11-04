import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
