export const getPropertyById = async (propertyId) => {
    try {
        const response = await fetch(`http://localhost:5297/api/property/${propertyId}`); // Adjust this URL based on your backend
      if (!response.ok) {
        throw new Error('Failed to fetch property details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching property details:", error);
      throw error; // Rethrow the error to be handled in the component
    }
  };
  