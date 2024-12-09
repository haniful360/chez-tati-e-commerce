
import React from "react";
import banner from "@/public/images/banner-section.png";
import HomeIcon from "@/components/svg/HomeIcon";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Terms & Condition | Chez Tati",
  description: "Get in touch with Chez Tati. We are available 24/7.",
};

const TermsCondition = () => {
  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "Terms & Conditon" },
  ];

  return (
    <>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          About us
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700">
          Welcome to <strong>Your Company Name</strong>. Before using our logo
          design service, please carefully review the following Terms and
          Conditions, as they govern the contractual relationship between you
          the &quot;Client&quot; and <strong>Your Company Name</strong> the
          &quot;Service Provider&quot;. By using our logo design service, you
          acknowledge that you have read, understood, and agreed to these Terms
          and Conditions in their entirety.
        </p>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            → Scope of Service
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="leading-relaxed">
              <strong>a.</strong> <strong>Your Company Name</strong> will
              provide custom logo design services to the Client based on the
              specifications provided by the Client.
            </li>
            <li className="leading-relaxed">
              <strong>b.</strong> The Service Provider will deliver the final
              logo design in the agreed-upon format upon completion and full
              payment of the service fee.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            → Copyright and Ownership
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="leading-relaxed">
              <strong>a.</strong> The Client acknowledges that all rights,
              title, and ownership of the final logo design will belong solely
              to the Client after full payment has been received by the Service
              Provider.
            </li>
            <li className="leading-relaxed">
              <strong>b.</strong> Final payment ensures that only the agreed
              design becomes the Client’s property. Any previous ideas/concepts
              remain the property of the Service Provider unless any prior
              agreement has been made.
            </li>
            <li className="leading-relaxed">
              <strong>c.</strong> The Service Provider reserves the right to
              showcase the completed logo design in their portfolio or
              promotional materials.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default TermsCondition;
