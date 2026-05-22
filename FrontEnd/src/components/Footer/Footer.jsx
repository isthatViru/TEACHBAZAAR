import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">TeachBaazar</h2>
          <p className="text-sm leading-relaxed">
            Empowering learners and educators through high quality courses,
            community discussions and real-world projects.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Courses</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
            <li className="hover:text-white cursor-pointer">Become Instructor</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4 text-xl">

            <i className="fa-brands fa-github hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-youtube hover:text-white cursor-pointer"></i>

          </div>

          <p className="text-sm mt-4">
            Follow us for updates, new courses and community discussions.
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} TeachBaazar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;