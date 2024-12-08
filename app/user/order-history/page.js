'use client'
import withAuth from "@/components/protectedRoute/withAuth";
import Link from "next/link";

const OrderHistory = () => {
  return (
    <div className="lg:col-span-3 space-y-6 px-4 py-1">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-semibold">Order History</h1>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-t border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-4 border-b font-semibold">Order ID</th>
                <th className="text-left px-4 py-4 border-b font-semibold">Date</th>
                <th className="text-left px-4 py-4 border-b font-semibold">Total</th>
                <th className="text-left px-4 py-4 border-b font-semibold">Status</th>
                <th className="text-left px-4 py-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              {Array(5).fill(null).map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="px-4 py-4 border-b">{`#100${idx}`}</td>
                  <td className="px-4 py-4 border-b">12/12/2024</td>
                  <td className="px-4 py-4 border-b">$100.00</td>
                  <td className="px-4 py-4 border-b">Completed</td>
                  <td className="px-4 py-4 border-b text-orange-600 cursor-pointer">
                    <Link href={`/user/order-details/100${idx}`}>View Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-t">
          <button
            className="px-4 py-2 rounded-md text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-600">
            Page 1 of 1
          </span>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(OrderHistory);
