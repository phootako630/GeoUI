# Vue GeoLocation Web App
A Vue.js application that allows users to search for locations, view them on a map, and manage a list of these locations.

## Features
* Get Current Location: Users can obtain their current geolocation with a single click.
* Search Location: Allows users to search for any location, which then gets displayed on the map.
* Manage Locations:
  * Displays all searched locations in a table.
  * Supports pagination with 10 records per page.
  * Users can select multiple records and delete them.
  * Integrated Map: Displays the searched location and plots it on the map.
## Setup and Installation
1. Clone the Repository:

```bash
Copy code
git clone https://github.com/your-username/GeoUI.git
cd GeoUI
```

2. Install Dependencies:

```bash
npm install
```
3. Set Up Environment Variables:

 * Rename the .env.local.example to .env.local and update the values accordingly, especially the VITE_APP_GOOGLE_API_KEY with your Google Maps API key.

4. Start the Development Server:

```bash
npm run dev
```
This will start the development server, and the app should now be running on http://localhost:8080/.

## Technology Stack
* Vue 3: Front-end framework.
* Vuetify: For UI components.
* Google Maps API: For fetching location coordinates and rendering maps.

## Known Limitation
1. Geolocation Permissions on First Visit: If you're accessing the application for the first time and attempt to retrieve your geolocation, the browser may not prompt you for location permissions like it typically does on the Chrome desktop browser. It's recommended to check your browser settings to ensure location services are enabled for this application.

2. Lack of Autocomplete in Search: The search functionality does not utilize Google's autocomplete feature, as it's a premium service. To ensure the best results, please enter well-known locations when searching.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
