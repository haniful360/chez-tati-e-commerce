import React from "react";
import review1 from "@/public/images/review1.png";
import review2 from "@/public/images/review2.png";
import review3 from "@/public/images/review3.png";
import Image from "next/image";

const feedbacks = [
  {
    id: 1,
    name: "Kristin Watson",
    date: "2 min ago",
    rating: 5,
    comment: "Duis at ullamcorper nulla, eu dictum eros.",
    avatar: review1,
  },
  {
    id: 2,
    name: "Jane Cooper",
    date: "30 Apr, 2021",
    rating: 4,
    comment: "Keep the soil evenly moist for the healthiest growth...",
    avatar: review2,
  },
  {
    id: 3,
    name: "Jacob Jones",
    date: "2 min ago",
    rating: 5,
    comment: "Vivamus eget euismod magna. Nam sed lacinia nibh...",
    avatar: review3,
  },
];
const CustomerFeedback = () => {
  return (
    <div className="w-1/2">
      <h3 className="text-xl font-bold mb-4">Customer Feedback</h3>
      <div className="flex flex-col gap-6">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="flex gap-4 justify-between border-b pb-4">
            <div className="flex gap-4">
              <Image
                src={feedback.avatar}
                alt={feedback.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{feedback.name}</h4>
                </div>
                <div className="text-yellow-500">
                  {"★".repeat(feedback.rating)}
                </div>
                <p className="text-gray-600">{feedback.comment}</p>
              </div>
            </div>
            <div>
            <span className="text-sm text-gray-400">{feedback.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
