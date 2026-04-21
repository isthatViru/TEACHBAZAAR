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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      setLoading(true);
      setSuccess("");

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
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                onChange={handleChange}
              /> Student
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="teacher"
                onChange={handleChange}
              /> Teacher
            </label>
          </div>

          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select topic</option>
            <option value="courses">Courses</option>
            <option value="support">Support</option>
          </select>

          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <label className="flex gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            I agree to terms
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-green-600">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;