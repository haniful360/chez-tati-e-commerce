import Image from "next/image";
import Link from "next/link";

export default function PageBanner({ backgroundImage, breadcrumbs }) {
  return (
    <div className="relative bg-gray-900 h-[80px] md:h-[120px] flex items-center mt-[70px] md:mt-[136px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-70"
          width={1200}
          height={120}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative w-full">
        <div className="max-w-[1320px] mx-auto px-4 text-white">
          <nav className="flex items-center text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <span key={index} className="flex items-center">
                {breadcrumb.href ? (
                  <Link href={breadcrumb.href} className="hover:underline">
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span
                    className={
                      index === breadcrumbs.length - 1
                        ? "text-red-500"
                        : undefined
                    }
                  >
                    {breadcrumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2">›</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
