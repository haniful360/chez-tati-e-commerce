import Banner from "@/components/home/Banner";
import CustomerExperience from "@/components/home/CustomerExperience";
import Products from "@/components/home/TrendingProducts";
import TestimonialSlider from "@/components/home/Testmonial";
import Image from "next/image";

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
