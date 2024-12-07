<div
        className={`lg:hidden fixed top-0 right-0 h-full w-[50%] bg-green-500 shadow-md z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="px-4 py-2">
          <div className="space-y-3">
            <div className="relative group">
              <button className=" hover:text-orange-500 flex items-center gap-[1px]">
                All Category
                <DownArrow />
              </button>
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 3
                </Link>
              </div>
            </div>
            <Link
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:flex items-center space-x-4 md:space-x-6 mt-8 md:mt-0">
            <button className="text-gray-700 hover:text-orange-500">
              <HeartIcon />
            </button>
            <button className="text-gray-700 hover:text-orange-500">
              <CartIcon />
            </button>
            <button className="text-gray-700 hover:text-orange-500">
              <UserIcon />
            </button>
          </div>
        </div>
      </div>