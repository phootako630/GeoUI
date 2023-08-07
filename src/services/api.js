import axios from 'axios';
import {ref} from "vue";

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

export const fetchTimeZoneAndLocalTime = async (lat, lng) => {
  const timestamp = Math.floor(Date.now() / 1000); // current time in seconds
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${import.meta.env.VITE_APP_GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const timeZoneData = response.data;
    const localDate = new Date((timestamp + timeZoneData.dstOffset + timeZoneData.rawOffset) * 1000);

    return {
      timeZoneId: timeZoneData.timeZoneId,
      localTime: localDate.toLocaleTimeString()
    };
  } catch (error) {
    console.error("Error fetching time zone data:", error);
    return null;
  }
}
