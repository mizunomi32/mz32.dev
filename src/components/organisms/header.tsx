import { Link } from "gatsby";
import React from "react";

type HeaderProps = {
  siteTitle: string
};
const Header:React.FC<HeaderProps>  = ({ siteTitle }) => (
  <header
    className="bg-orange-500 mb-6 shadow-md"
  >
    <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6 max-w-screen-lg mx-auto">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <Link to="/" className="font-semibold text-xl tracking-tight">mz32.dev</Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
        About
      </Link>
      <Link to="/skills" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
        Skills
      </Link>
      <Link to="/works" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
       Works
      </Link>
      {/* <Link to="/contacts" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
        Contacts
      </Link> */}
      <Link to="/post/" className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
        Post
      </Link>
    </div>
    <div>
      {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
    </div>
  </div>
</nav>
   
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
