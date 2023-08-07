import axios from 'axios';

export async function fetchLocationCoordinates(locationName) {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address: locationName,
        key: import.meta.env.VITE_APP_GOOGLE_API_KEY
      }
    });


    if (response.data.results && response.data.results.length > 0) {
      const locationData = response.data.results[0].geometry.location;
      return {
        lat: locationData.lat,
        lng: locationData.lng
      };
    } else {
      throw new Error(`No results found for location "${locationName}"`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
