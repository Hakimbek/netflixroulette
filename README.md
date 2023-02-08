# Get started

### 1. Movies API Server

- Clone the backend [repository](https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS)
- Navigate to the cloned repository folder and run `npm install` to install dependencies
- Run `npm start` command to start the backend server. It will start on `https://localhost:4000`

### 2. Netflixroulette

- Clone the netflixroulette [repository](https://github.com/Hakimbek/netflixroulette)
- Navigate to the cloned repository folder and run `npm install` to install dependencies
- Run `npm start` command to start the netflixroulette. It will start on `http://localhost:3000`

# What was done step by step

## Module#1

### Task

Training Core Concept

### Cover

- React.createElement
- React.Component
- Functional component

## Module#2

### Task

Create `package.json` file and install react. Install and configure webpack & babel to get build artifact by running npm command.
Set DEV and PROD build configuration. Install and configure TypeScript for project.

### Cover

- Entry and outputs
- Loaders and plugins
- Configuration

## Module#3 and Module#4

### Task

Write components implementing HTML markup for required [design](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A1&t=stJweXKpoypn8K77-0).

![netflixroulette](https://user-images.githubusercontent.com/81404686/213852178-d3a498b3-3c39-481f-bf7d-afbed780a001.png)

Implement and use `<ErrorBoundary />` component for catching and displaying errors.
You could create one component and wrap all your application or use several components.

Implement markup and styles for [Add movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A505&t=zlfSS8OfRAK6v15T-0), [Edit movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A1005&t=dxTVVeEEATORfSZy-0), [Delete movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A1817&t=VDJjNGtln570Ygd2-0) modal windows and sorting.
No need to implement real API calls. Only add pages with mocked data.

![add](https://user-images.githubusercontent.com/81404686/213856540-acbcb774-0d79-42ed-9188-9f45d8246086.png)

![edit](https://user-images.githubusercontent.com/81404686/213856580-62f3c5a5-dd9a-4c0c-a6c1-20ef472710e2.png)

![delete](https://user-images.githubusercontent.com/81404686/213856606-48f1f913-cbfd-4e43-84d0-c64d8f47594c.png)

### Cover

- Types of components (smart/dumb, class/function, etc.)
- Props and state
- Higher-order components
- Lists and keys
- Context
- Fragments and portals

## Module#5

### Task

**Implement a possibility to view movie [details](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A393&t=j9vkCtHNGtL50arh-0)**<br>
**Given:** the user is on the main page<br>
**And:** there are movies in the list<br>
**When:** the user clicks on a movie card in the list

![details](https://user-images.githubusercontent.com/81404686/213858315-ad05b3d2-0dfe-4ca4-924c-ca3fb7b7b1c8.png)

**Implement a possibility to return back to search**<br>
**Given:** the user is viewing movie details<br>
**When:** they click on the search icon at the top right corner<br>
**Then:** the movie details panel is replaced with the search panel<br>
**Then:** the search panel at the top is replaced with clicked movie details

### Cover

- Rules of hooks
- Basic built-in hooks: useState, useReducer, useEffect, useRef
- Custom hooks

## Module#6

### Task

Make your components perform real AJAX requests. Implement data fetches as async actions and pass data to your components with redux.
Implement filtering and sorting (by genre, rating, and release date) as redux actions. Don't filter or sort on the frontend side, use backend API for this.

### Cover

- Redux core concepts

## Module#7

### Task

Install [useForm](https://react-hook-form.com/), implement a possibility to [Add movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A505&t=zlfSS8OfRAK6v15T-0), [Edit movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A1005&t=dxTVVeEEATORfSZy-0), [Delete movie](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/%5BCDP%5D-Home-Task-%E2%80%93-React-v1?node-id=0%3A1817&t=VDJjNGtln570Ygd2-0).

### Cover

- [useForm](https://react-hook-form.com/)

## Module#8

### Task

Using [react-router](https://reactrouter.com/en/main) define routes according to the following acceptance criteria.

**AC1**<br>
**Given:** any state<br>
**When:** the address bar pathname is changed to `/`
**Then:** the user should be redirected to `/search`

**AC2**<br>
**Given:** any state<br>
**When:** the address bar pathname is changed to `/search` without a `searchQuery`<br>
**Then:** the search page with the most popular movies should be displayed<br>
**And:** search input value should be empty

**AC3**<br>
**Given:** any state<br>
**When:** the address bar pathname is changed to `/search?searchQuery=searchValue` where `searchQuery` is not an empty string<br>
**Then:** the search page with results should be displayed<br>
**And:** and the search results should match `searchQuery` from the search param<br>
**And:** search input value should equal to `searchQuery`

**AC4**<br>
**Given:** any state<br>
**When:** the page address is changed<br>
**And:** the pathname is `/search` with or without `searchQuery`<br>
**And:** address bar contains `genre` search parameter<br>
**Then:** the search page results should be filtered by the genre specified in the search parameter<br>
**And:** the specified genre name should be highlighted in UI

**AC5**<br>
**Given:** any state<br>
**When:** the page address is changed<br>
**And:** the pathname is `/search` with or without `searchQuery`<br>
**And:** address bar contains `sortBy` search parameter<br>
**Then:** the search page results should be sorted by the property name specified in the search parameter (Release Date/Name)<br>
**And:** the specified sorting option should be highlighted in UI

**AC6**<br>
**Given:** any state<br>
**When:** the page address is changed<br>
**And:** the pathname is `/search` with or without `searchQuery`<br>
**And:** address bar contains `movie=movieId` search parameter<br>
**Then:** the search page is displayed with the search panel replaced with movie details for the movie from `movie` search parameter

**AC7**<br>
**Given:** any state<br>
**When:** the address bar pathname is changed to an unknown value<br>
**Then:** a 404 page should be displayed

**AC8**<br>
**Given:** a user is on the search page<br>
**When:** they change sorting option via UI<br>
**Then:** the address bar should be changed to include new sorting option in `sortBy` search parameter

**AC9**<br>
**Given:** a user is on the search page<br>
**When:** they select a genre<br>
**Then:** the address bar should be changed to include selected genre in `genre` search parameter

**AC10**<br>
**Given:** a user is on the search page<br>
**When:** they type in a query into the search box and hit Enter or click `Search`<br>
**Then:** the address bar pathname should be changed to `/search?searchQuery=searchValue` where `searchQuery` equals to the search input value

**AC11**<br>
**Given:** a user is on the search page<br>
**When:** they click on a movie from the list<br>
**Then:** the address bar search parameter `movie` should be set with value equal to clicked movie ID

### Cover

- [react-router-dom](https://reactrouter.com/en/main)
