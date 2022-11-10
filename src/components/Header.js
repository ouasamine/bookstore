import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="navbar">
      <h1>Bookstore CMS</h1>
      <nav className="nav-links">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}

export default Header;
