import Image from "next/image"; // Ensure you use Next.js Image component for optimized images
import logo from '@/public/logo/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-50 h-[86px] border-b border-[#DFE1E3]">
      <div className="container max-w-[1511px] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo} // Replace with the actual logo path
            alt="Chez Tati"
            width={186}
            height={86} // Ensure proper dimensions
            className="h-auto w-auto"
          />
          
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="w-[498px] h-[46px] border border-[#E6E6E6] rounded-l-md px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 h-[46px]">
              Search
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button className="flex items-center text-gray-700">
              All Category
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Contact Us
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18v18H3z"></path>
            </svg>
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5"></path>
            </svg>
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.5 19.5L16.5 16.5"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
