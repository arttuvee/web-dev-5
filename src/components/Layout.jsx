import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home🏠</Link>
            </li>
            <li>
              <Link to="/profile">Profile👺</Link>
            </li>
            <li>
              <Link to="/upload">Upload😈</Link>
            </li>
            <li>
              <Link to="/login">Login🔐</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="mt-auto">Footer</footer>
    </div>
  );
};

export default Layout;
