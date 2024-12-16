import React, { useState, useEffect } from 'react';
import { getPropertyById } from '../../services/api';

const PropertyDetail = ({ propertyId }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await getPropertyById(propertyId);
      setProperty(data); // Set the property data to state
    };

    fetchProperty();
  }, [propertyId]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{property.address}</h2>
      <p>Price: ${property.price}</p>
      <p>ID: {property.id}</p>
    </div>
  );
};

export default PropertyDetail;
