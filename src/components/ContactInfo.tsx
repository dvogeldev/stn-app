import React from 'react';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react'; // Importing Lucide icons

export const ContactInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image and "Find Us Here" Section - Left Column */}
        <div className="relative bg-gray-300 rounded-xl shadow-lg overflow-hidden h-[400px] md:h-[500px]">
          <img
            src="/images/image_ad9f9c.png" // Path to your uploaded image in the public directory
            alt="Exterior view of St. Nicholas Orthodox Church building"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Church+Exterior"; }}
          />
          {/* Overlay with text and button */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <p className="text-sm mb-4">
              Exterior view of St. Nicholas Orthodox Church building at 2250 E. Paris SE, Grand Rapids,
              showing the beautiful Byzantine architecture with traditional Orthodox domes, crosses,
              and arched entrance colonnade surrounded by landscaped grounds
            </p>
            <a
              href="https://maps.app.goo.gl/your-church-location" // Replace with actual Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-semibold hover:underline"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Find Us Here
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <p className="text-sm mt-2">2250 E. Paris SE</p>
          </div>
        </div>

        {/* Contact Information Cards - Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Address</h3>
            </div>
            <p className="text-gray-700 mb-1 rounded-lg">2250 E. Paris SE</p>
            <p className="text-gray-700 rounded-lg">Grand Rapids, MI 49546</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Email</h3>
            </div>
            <a href="mailto:info@stnicholasgr.com" className="text-blue-600 hover:underline rounded-lg">
              info@stnicholasgr.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Phone</h3>
            </div>
            <a href="tel:+16169542700" className="text-gray-700 hover:underline rounded-lg">
              (616) 954-2700
            </a>
          </div>

          {/* Office Hours Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Office Hours</h3>
            </div>
            <p className="text-gray-700 mb-1 rounded-lg">Tuesday - Friday: 9:00 AM - 3:00 PM</p>
            <p className="text-gray-700 rounded-lg">Saturday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

