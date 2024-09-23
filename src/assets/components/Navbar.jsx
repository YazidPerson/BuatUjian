import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-white sticky top-0 mx-auto justify-between shadow-md">
        <div className="flex px-4 sm:px-6 h-14 items-center">
          <div className=" items-center space-x-4 justify-start mr-52">
            <a href=""><img width={40} height={40} src="./Logo/search-icon-png-21.png" className="" alt="" /></a>
          </div>
          <div className="flex space-x-6 ml-96 mr-56 text-lg">
            <Link to="/" className="text-black hover:text-slate-300 transition-all duration-100">HOME</Link>
            <Link to="/Blog" className="text-black hover:text-slate-300 transition-all duration-100">BLOG</Link>
            <Link to="/Update" className="text-black hover:text-slate-300 transition-all duration-100">UPDATE</Link>
          </div>
          <div className="flex-grow ml-96">
            <a href=""><img width={60} height={60} src="./Logo/settings-icon-6.png" className="" alt="" /></a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Navbar;

