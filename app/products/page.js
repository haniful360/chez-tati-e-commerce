
import PageBanner from "@/components/PageBanner";
import ClientProductsPage from "@/components/products/ClientProductsPage";
import banner from "@/public/images/banner-section.png";

export default async function ProductsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories" },
  ];

  const response = await fetch("https://fakestoreapi.in/api/products", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <ClientProductsPage products={data.products} />
    </>
  );
}
