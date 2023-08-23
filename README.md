# Country Information Card Web App

This web application fetches and displays information about a specific country using the [REST Countries API](https://restcountries.com/). The fetched data is presented in a visually appealing card format.

![Country Information Card](screenshot.png)

## Features

- Displays country information, including:
  - Country name
  - Capital city
  - Flag
  - Native language
  - Population
  - Demonym
- Responsive design that adapts to different screen sizes
- Stylish card layout with a clean and modern look

## Technologies Used

- HTML
- CSS (Cascading Style Sheets)
- JavaScript (AJAX)

## How to Use

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Implementation Details

- The application fetches country information using the `XMLHttpRequest` object.
- The fetched data is parsed from JSON format and used to populate the card's content.
- The country's flag, name, capital, native language, population, and demonym are displayed.
- The card layout is designed to be visually appealing and responsive.

## Code Structure

- `index.html`: The main HTML file that structures the content and imports necessary styles and scripts.
- `styles.css`: The CSS file that defines the styling of the application.
- `script.js`: The JavaScript file that handles fetching data from the API, processing the response, and dynamically updating the card's content.

## Dependencies

- None. The application uses vanilla JavaScript to make API requests and update the UI.

## Future Enhancements

- Add more information about the country, such as area, currency, and neighboring countries.
- Implement a search feature to allow users to look up information for different countries.
- Improve error handling for cases when the API request fails or data is unavailable.

## Credits

- Country information is fetched from the [REST Countries API](https://restcountries.com/).
- Styling and layout inspired by modern card design principles.

