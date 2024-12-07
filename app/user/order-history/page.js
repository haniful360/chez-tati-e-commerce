'use client'
import Link from "next/link";
import { useState } from "react";

const OrderHistory = () => {
  // Sample data
  const orders = [
    { id: 3933, date: "4 April, 2021", total: "$135.00 (5 Products)", status: "Processing" },
    { id: 5045, date: "27 March, 2021", total: "$25.00 (1 Product)", status: "On the way" },
    { id: 5028, date: "20 March, 2021", total: "$250.00 (4 Products)", status: "Completed" },
    { id: 4600, date: "19 March, 2021", total: "$35.00 (1 Product)", status: "Completed" },
    { id: 4152, date: "18 March, 2021", total: "$578.00 (13 Products)", status: "Completed" },
    { id: 8811, date: "10 March, 2021", total: "$345.00 (7 Products)", status: "Completed" },
    { id: 3536, date: "5 March, 2021", total: "$560.00 (2 Products)", status: "Completed" },
    { id: 1374, date: "27 February, 2021", total: "$560.00 (2 Products)", status: "Completed" },
    { id: 7791, date: "25 February, 2021", total: "$560.00 (2 Products)", status: "Completed" },
    { id: 4846, date: "24 February, 2021", total: "$23.00 (1 Product)", status: "Completed" },
  ];

  const itemsPerPage = 5; // Define how many items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const displayedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="lg:col-span-3 space-y-6 px-4 py-1">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className=" px-6 py-4 border-b">
          <h1 className="text-xl font-semibold">Order History</h1>
        </div>
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
              {displayedOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="px-4 py-4 border-b">{`#${order.id}`}</td>
                  <td className="px-4 py-4 border-b">{order.date}</td>
                  <td className="px-4 py-4 border-b">{order.total}</td>
                  <td className="px-4 py-4 border-b">{order.status}</td>
                  <td className="px-4 py-4 border-b text-orange-600  cursor-pointer">
                   <Link href=''> View Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-t">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
