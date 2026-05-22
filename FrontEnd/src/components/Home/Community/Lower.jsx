import React from "react";

const posts = [
  {
    name: "Ravi Kumar",
    course: "React Masterclass",
    role: "Student",
    time: "2h ago",
    replies: 12,
    resolved: true,
    text: "How do I handle async state updates properly with useEffect? Getting stale closures and the state isn't updating as expected...",
  },
  {
    name: "Anita Verma",
    course: "Node.js Bootcamp",
    role: "Teacher",
    time: "1h ago",
    replies: 8,
    resolved: false,
    text: "Why does middleware order matter in Express applications?",
  },
  {
    name: "Karan Patel",
    course: "MongoDB Essentials",
    role: "Student",
    time: "3h ago",
    replies: 5,
    resolved: false,
    text: "What is the difference between aggregation pipeline and mapReduce in MongoDB?",
  },
  {
    name: "Neha Singh",
    course: "Full Stack MERN",
    role: "Student",
    time: "5h ago",
    replies: 4,
    resolved: true,
    text: "Best way to deploy MERN apps on production servers?",
  },
  {
    name: "Arjun Mehta",
    course: "JavaScript Deep Dive",
    role: "Student",
    time: "6h ago",
    replies: 9,
    resolved: false,
    text: "How does the JavaScript event loop actually work?",
  },
  {
    name: "Priya Sharma",
    course: "Tailwind CSS",
    role: "Student",
    time: "7h ago",
    replies: 3,
    resolved: true,
    text: "How do I create reusable components using Tailwind utility classes?",
  },
];

const Lower = () => {

  const getInitials = (name) => {
    const words = name.split(" ");
    return words[0][0] + words[1][0];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300 cursor-pointer"
        >

          {/* Header */}
          <div className="flex justify-between items-start">

            <div className="flex gap-4">

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center font-semibold text-blue-700">
                {getInitials(post.name)}
              </div>

              {/* Name + course */}
              <div>
                <h3 className="font-semibold text-gray-800">
                  {post.name}
                </h3>

                <p className="text-sm text-blue-500">
                  {post.course} · {post.time}
                </p>
              </div>

            </div>

            {/* Role badge */}
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {post.role}
            </span>

          </div>

          {/* Question text */}
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            {post.text}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-2 mt-4 text-sm">

            <span className="text-blue-600">
              {post.replies} replies
            </span>

            {post.resolved && (
              <>
                <span className="text-gray-400">·</span>

                <span className="text-green-600 flex items-center gap-1">
                  ✓ Marked as resolved
                </span>
              </>
            )}

          </div>

        </div>
      ))}

    </div>
  );
};

export default Lower;