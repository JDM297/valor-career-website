import React from 'react';

const LocationsPage = () => (
  <main id="content" className="p-8" role="main">
    <div className="page-content">
      <section className="text-center mb-8" role="region" aria-labelledby="locations-section">
        <h1 id="locations-section" className="text-4xl font-bold mb-4">Our Locations</h1>
        <p className="text-lg mb-6">
          Find a Valor Career training center near you. We have locations nationwide to serve you better.
        </p>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">Location 1</h3>
            <p>Address, City, State, ZIP</p>
            <a href="/locations/location-1" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">Location 2</h3>
            <p>Address, City, State, ZIP</p>
            <a href="/locations/location-2" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">Location 3</h3>
            <p>Address, City, State, ZIP</p>
            <a href="/locations/location-3" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default LocationsPage;
