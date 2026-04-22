import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div className="w-full mt-16 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Location
          </h3>
        </div>

        {/* Simple Card */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">

          <MapContainer
            center={[19.0760, 72.8777]}
            zoom={13}
            className="w-full h-[400px]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[19.0760, 72.8777]}>
              <Popup>
                TeachBazaar Office 📍
              </Popup>
            </Marker>
          </MapContainer>

        </div>

      </div>
    </div>
  );
};

export default Map;