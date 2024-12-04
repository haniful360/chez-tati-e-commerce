import Banner from "@/components/home/Banner";
import CustomerExperience from "@/components/home/CustomerExperience";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Products/>
      <CustomerExperience/>
    </div>
  );
}
