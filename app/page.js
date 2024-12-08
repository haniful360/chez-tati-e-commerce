
import Banner from "@/components/home/Banner";
import CustomerExperience from "@/components/home/CustomerExperience";
import Products from "@/components/home/TrendingProducts";
import TestimonialSlider from "@/components/home/Testmonial";


export const metadata = {
  title: "Home | Chez Tati ",
  description: "Get in touch with Chez Tati. We are available 24/7.",
};

export default function Home() {
  return (
    <div>
      <Banner/>
      <Products/>
      <CustomerExperience/>
      <TestimonialSlider/>
    </div>
  );
}
