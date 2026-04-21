import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    topic: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Basic validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.role)
      newErrors.role = "Please select student or teacher";

    if (!formData.topic)
      newErrors.topic = "Please select a topic";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";

    if (!formData.consent)
      newErrors.consent = "You must agree before submitting";

    return newErrors;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      setLoading(true);
      setSuccess("");

      // Replace with your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        topic: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First + Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-2">I am</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="teacher"
                  checked={formData.role === "teacher"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Teacher
              </label>
            </div>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>

          {/* Topic */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select topic</option>
              <option value="general">General Inquiry</option>
              <option value="courses">Courses</option>
              <option value="support">Support</option>
              <option value="billing">Billing</option>
              <option value="partnership">Partnership</option>
            </select>
            {errors.topic && <p className="text-red-500 text-sm">{errors.topic}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 accent-blue-600"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to the Privacy Policy and Terms of Service. I consent to TeachBazaar storing my data.
            </label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-green-600 text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;