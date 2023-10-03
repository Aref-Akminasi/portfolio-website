import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <nav className="container mx-auto bg-slate-200">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
