const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4">
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">All Categories</h3>
        <ul>
          {[
            "Laptop",
            "Washing Machine",
            "Iron",
            "Freeze",
            "Tv",
            "Air Conditioner",
            "Headphone",
          ].map((category, index) => (
            <li key={index} className="mb-2">
              <label className="flex items-center">
                <input type="radio" name="category" className="mr-2" />
                {category}{" "}
                <span className="ml-auto text-sm">
                  ({Math.floor(Math.random() * 200)})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price</h3>
        <input type="range" className="w-full" />
        <p className="mt-2">Price: 50 – 1,500</p>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-3">Rating</h3>
        <ul>
          {[5, 4, 3, 2, 1].map((rating) => (
            <li key={rating} className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(rating).fill("⭐").join("")}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
