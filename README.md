# Site Tracker Chrome Extension

Site Tracker is a Chrome extension that allows users to add, track, and delete websites they are interested in. It provides an easy-to-use interface for managing a list of websites, adding the current tab, and removing items from the list.

## Features

- **Add Website**: Users can input website URLs or names and add them to a list.
- **Add Current Tab**: Users can quickly add the URL of the currently open tab to the list.
- **Delete**: Users can delete individual items from the list while also having to delete all the list at once.

## Files

- **index.html**: The main HTML structure of the extension’s popup, including input fields and buttons for adding, deleting, and listing websites.
- **index.css**: Stylesheet for the popup, giving it a clean and modern look with responsive design adjustments.
- **index.js**: JavaScript logic for handling user actions, adding items to the list, removing items, and managing tab URLs.
- **manifest.json**: Configuration file defining the extension’s properties, permissions, and popup details.

## Installation

1. Clone or download the repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" (toggle in the upper right corner).
4. Click on "Load unpacked" and select the directory where you saved this project.
5. The extension should now be loaded and ready to use.

## Usage

1. Click on the Site Tracker extension icon in your browser toolbar.
2. To add a new site, type the website URL or name in the input box and click **Add**.
3. Click **Add Tab** to add the currently active tab’s URL to the list.
4. Use the **Delete** button to remove items from the list.

## Permissions

- **Tabs**: Required to access and manage the URLs of open tabs in Chrome.
