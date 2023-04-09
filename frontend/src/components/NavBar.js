import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
      <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Log in <span aria-hidden="true">&rarr;</span></Link>
    );

    const authLinks = () => (
      <a href='#!' onClick={logout_user} className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">Log Out <span aria-hidden="true">&rarr;</span></a>
    );

    return (
        <Fragment>
            <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link to="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <div>RMAP</div>
      </Link>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="lg:flex lg:gap-x-12">
      <div className="relative">
        <Link to="/projects/">
        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500" aria-expanded="false">
          Projects
        </button>
        </Link>
        <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"/>
      </div>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      { isAuthenticated ? authLinks() : guestLinks()}
    </div>
  </nav>
  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
  </div>
</header>
            {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
