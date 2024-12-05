import React from "react";

const feedbacks = [
    {
      id: 1,
      name: "Kristin Watson",
      date: "2 min ago",
      rating: 5,
      comment: "Duis at ullamcorper nulla, eu dictum eros.",
      avatar: "/avatar1.jpg",
    },
    {
      id: 2,
      name: "Jane Cooper",
      date: "30 Apr, 2021",
      rating: 4,
      comment: "Keep the soil evenly moist for the healthiest growth...",
      avatar: "/avatar2.jpg",
    },
    {
      id: 3,
      name: "Jacob Jones",
      date: "2 min ago",
      rating: 5,
      comment: "Vivamus eget euismod magna. Nam sed lacinia nibh...",
      avatar: "/avatar3.jpg",
    },
  ];
const CustomerFeedback = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Customer Feedback</h3>
      <div className="flex flex-col gap-6">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="flex gap-4">
            <img
              src={feedback.avatar}
              alt={feedback.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{feedback.name}</h4>
                <span className="text-sm text-gray-400">{feedback.date}</span>
              </div>
              <div className="text-yellow-500">
                {"★".repeat(feedback.rating)}
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
