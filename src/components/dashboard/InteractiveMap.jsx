import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const InteractiveMap = () => {
  const [position, setPosition] = useState([28.6139, 77.2090]); // Default: Delhi
  const [userLocation, setUserLocation] = useState(null);
  const [safetyZones, setSafetyZones] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [tracking, setTracking] = useState(false);
  const mapRef = useRef();

  // Mock data for safety zones and emergency contacts
  useEffect(() => {
    setSafetyZones([
      { id: 1, position: [28.6139, 77.2090], radius: 2000, color: 'green' },
      { id: 2, position: [28.6129, 77.2295], radius: 1500, color: 'yellow' },
    ]);
    
    setEmergencyContacts([
      { id: 1, position: [28.6139, 77.2090], name: 'Police Station', type: 'police' },
      { id: 2, position: [28.6199, 77.2090], name: 'Hospital', type: 'hospital' },
    ]);
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error('Error getting location:', err);
        }
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  // Custom icons
  const createCustomIcon = (type) => {
    return L.divIcon({
      html: `<div class="w-8 h-8 rounded-full flex items-center justify-center text-white ${
        type === 'police' ? 'bg-red-500' : 
        type === 'hospital' ? 'bg-blue-500' : 'bg-green-500'
      }">
        <i class="fas ${
          type === 'police' ? 'fa-shield-alt' : 
          type === 'hospital' ? 'fa-hospital' : 'fa-user'
        }"></i>
      </div>`,
      className: 'custom-marker',
      iconSize: [32, 32],
    });
  };

  const LocationUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(position, 13);
    }, [map, position]);
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interactive Travel Map</h2>
        <div className="flex space-x-4">
          <button
            onClick={getUserLocation}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
          >
            <i className="fas fa-location-arrow mr-2"></i>
            My Location
          </button>
          <button
            onClick={() => setTracking(!tracking)}
            className={`px-4 py-2 rounded-xl font-medium transition-colors ${
              tracking
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <i className={`fas ${tracking ? 'fa-stop' : 'fa-play'} mr-2`}></i>
            {tracking ? 'Stop Tracking' : 'Start Tracking'}
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="h-96 w-full">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationUpdater />
            
            {/* User Location */}
            {userLocation && (
              <Marker position={userLocation} icon={createCustomIcon('user')}>
                <Popup>
                  <div className="text-center">
                    <p className="font-semibold">You are here</p>
                    <button
                      onClick={() => setPosition(userLocation)}
                      className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm"
                    >
                      Center Map
                    </button>
                  </div>
                </Popup>
              </Marker>
            )}

            {/* Safety Zones */}
            {safetyZones.map(zone => (
              <Circle
                key={zone.id}
                center={zone.position}
                radius={zone.radius}
                pathOptions={{
                  color: zone.color,
                  fillColor: zone.color,
                  fillOpacity: 0.1
                }}
              />
            ))}

            {/* Emergency Contacts */}
            {emergencyContacts.map(contact => (
              <Marker
                key={contact.id}
                position={contact.position}
                icon={createCustomIcon(contact.type)}
              >
                <Popup>
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.type}</p>
                    <button className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg text-sm w-full">
                      Emergency Contact
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Map Controls and Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Safe Zones</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Low crime, tourist-friendly areas</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Caution Zones</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Moderate risk, be alert</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Emergency Services</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Police, hospitals, etc.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Location</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Real-time tracking</p>
        </div>
      </div>

      {/* Family Sharing Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Family & Friends Sharing</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">Share your live location with trusted contacts</p>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">
            <i className="fas fa-share-alt mr-2"></i>
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;