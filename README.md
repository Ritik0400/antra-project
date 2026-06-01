# iTunes Album Search

This is an Angular 21 single-page application built for the Antra SEP evaluation.

The app allows a user to search for a musical artist and view album results from the official iTunes Search API.

## Features

* Search for albums by artist name
* API request runs only when the user presses Enter
* Displays album cover images and album names
* Shows the number of results for the searched artist
* Uses a responsive album grid layout
* Handles empty search input
* Styled to match the provided assessment wireframe/demo

## Tech Stack

* Angular 21
* TypeScript
* SCSS
* iTunes Search API

No Bootstrap, Tailwind, or other UI framework was used.

## API Used

The app uses the iTunes Search API with this format:

```text
https://itunes.apple.com/search?media=music&entity=album&attribute=artistTerm&limit=50&term=ARTIST_NAME
```

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open the app in the browser:

```text
http://localhost:4200
```

## How to Use

1. Type an artist name in the search box.
2. Press Enter.
3. Album results will appear below the heading.

Example searches:

```text
Taylor Swift
Eminem
Ariana Grande
```

## Project Structure

```text
src/app/app.ts
```

Contains the main component state and search logic.

```text
src/app/app.html
```

Contains the Angular template for the header, search input, heading, and album results.

```text
src/app/app.scss
```

Contains the component styling for the layout, search bar, and album grid.

```text
src/app/services/itunes.service.ts
```

Contains the API call to the iTunes Search API.

```text
src/app/models/album.model.ts
```

Contains the TypeScript interfaces for album data and API response data.

## Notes

The search request is intentionally triggered only when the user presses Enter. Typing in the input updates the search text, but it does not call the API on every keystroke.
