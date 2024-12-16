import React, { useState } from 'react';
import PropertyDetail from './components/PropertyDetails/PropertyDetails';

function App() {
  const [propertyId, setPropertyId] = useState('');

  const handleChange = (event) => {
    setPropertyId(event.target.value);
  };

  return (
    <div className="App">
      <h1>Real Estate Property Details</h1>
      <input
        type="text"
        placeholder="Enter Property ID"
        value={propertyId}
        onChange={handleChange}
      />
      <PropertyDetail propertyId={propertyId} />
    </div>
  );
}

export default App;
