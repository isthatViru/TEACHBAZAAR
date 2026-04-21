import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex justify-center">

      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Let’s Talk 👋
          </h2>
          <p className="text-gray-500 mt-1">
            Fill out the form and we’ll get back to you soon.
          </p>
        </div>

        {/* Horizontal Layout */}
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* Names */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                I am
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-blue-50">
                  <input type="radio" name="role" id="student" />
                  Student
                </label>
                <label className="flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-blue-50">
                  <input type="radio" name="role" id="teacher" />
                  Teacher
                </label>
              </div>
            </div>

            {/* Topic */}
            <div>
              <label className="text-sm text-gray-600">Topic</label>
              <select
                name="topic"
                id="topic"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select topic</option>
                <option value="general">General Inquiry</option>
                <option value="courses">Courses</option>
                <option value="support">Support</option>
                <option value="billing">Billing</option>
              </select>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-10">

            {/* Message */}
            <div className="flex-1">
              <label className="text-sm text-gray-600">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 h-full"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" id="consent" name="consent" className="mt-1" />
              <label htmlFor="consent">
                I agree to the Privacy Policy and Terms of Service.
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;