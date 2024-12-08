
import banner from "@/public/images/banner-section.png";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";

export const metadata = {
  title: "Contact | Chez Tati",
  description: "Get in touch with Chez Tati. We are available 24/7.",
};

const ContactUs = () => {

  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <div>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-lg shadow-lg">
          {/* Contact Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
            <p className="text-gray-600 mt-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 font-medium mt-1">
              Phone: +8801611112222
            </p>
          </div>

          {/* Send a Message Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send a Message
            </h2>
            <form className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your mail"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75l-9 9-4.5-4.5"
                    />
                  </svg>
                </span>
              </div>

              {/* Description */}
              <div>
                <textarea
                  placeholder="Description"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full max-w-xs mx-auto py-3 px-6 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
