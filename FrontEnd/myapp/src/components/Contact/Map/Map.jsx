import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const lat = 19.0760;
  const lng = 72.8777;

  return (
    <div className="w-full mt-16 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Location
          </h3>
        </div>

        {/* Map Card */}
        <div className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">

          {/* Map */}
          <MapContainer
            center={[lat, lng]}
            zoom={13}
            className="w-full h-[400px]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[lat, lng]}>
              <Popup>
                TeachBazaar Office 📍
              </Popup>
            </Marker>
          </MapContainer>

          {/* Address Overlay */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md border px-4 py-3 max-w-xs">

            <p className="text-sm font-semibold text-gray-900">
              TeachBazaar
            </p>

            <p className="text-xs text-gray-600 mt-1">
              Mumbai, Maharashtra, India
            </p>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Map;