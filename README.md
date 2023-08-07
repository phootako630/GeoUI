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
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
