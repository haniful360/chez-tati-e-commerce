"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/home/Banner";
import CustomerExperience from "@/components/home/CustomerExperience";
import Products from "@/components/home/TrendingProducts";
import TestimonialSlider from "@/components/home/Testmonial";
import Loading from "@/components/loading";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home | Chez Tati";
  }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <div>
      <Banner />
      <Products />
      <CustomerExperience />
      <TestimonialSlider />
    </div>
  );
}
