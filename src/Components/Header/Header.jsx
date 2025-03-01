import React from 'react';
import '../Header/Header.css'
import banner from '../../assets/banner.jpg'

const Header = () => {
    return (
        <div className='relative bg-[#9538E2] rounded-lg'>
        <div className="navbar border-none  text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href='/'>Home</a></li>
              
              <li><a>Statistics</a></li>
              <li><a>Dashbaord</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li>
<a href="">Statistics</a>
            </li>
            <li><a>Dashboard</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
        <i class="fa-solid fa-cart-shopping text-black bg-white p-2 rounded-full"></i>
        <i class="fa-solid fa-heart bg-white text-black rounded-full p-2"></i>
        </div>

      </div>

   


      </div>
    );
};

export default Header;