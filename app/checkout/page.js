import React from "react";
import banner from "@/public/images/banner-section.png";
import HomeIcon from "@/components/svg/HomeIcon";
import PageBanner from "@/components/PageBanner";
const Checkout = () => {
  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "checkout" },
  ];

  return (
    <div>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row p-6 min-h-screen py-12">
        {/* Left Section - Billing Information */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your first name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Your last name"
                className="p-3 border border-gray-300 rounded-md"
              />
            </div>

            <input
              type="text"
              placeholder="Company name"
              className="p-3 border border-gray-300 rounded-md mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="p-3 border border-gray-300 rounded-md mb-4 w-full"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="p-3 border border-gray-300 rounded-md">
                <option>Country / Region</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
              <select className="p-3 border border-gray-300 rounded-md">
                <option>States</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="radio" id="cash" name="payment" className="mr-2" />
              <label htmlFor="cash" className="text-sm">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" id="paypal" name="payment" className="mr-2" />
              <label htmlFor="paypal" className="text-sm">
                Paypal
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-md text-lg"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 ml-6 rounded-lg shadow-md mt-6 md:mt-0 border">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
          <div className="flex justify-between mb-4">
            <span>Freezer x1</span>
            <span>$14.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-6 font-semibold text-xl">
            <span>Total:</span>
            <span>$84.00</span>
          </div>

          <div className="flex items-center mb-4">
            <input type="radio" id="cash" name="payment" className="mr-2" />
            <label htmlFor="cash" className="text-sm">
              Cash on Delivery
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input type="radio" id="paypal" name="payment" className="mr-2" />
            <label htmlFor="paypal" className="text-sm">
              Paypal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
