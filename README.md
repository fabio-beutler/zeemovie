# Zee Movie

This application list all films from [Studio Ghibli API](https://ghibliapi.herokuapp.com/#), show details from each title, and make possible to favorite some films.

You can checkout the demo page at [here](https://zeemovie.vercel.app).

## Getting Started

First, run the development server:

```bash
yarn install
# and
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Technologies used in this project:

### Static Props with ISR (Incremental Static Regeneration)

Used to fetch all data required from the API and build all pages with static content, **isr** will revalidate this builded cache each two days.

### React Query

In order to increase a little bit of performance, react-query was used to store initial data and share with _favorites_ page that should be only client side.

### Stitches

Used to construct all responsive styles, with near-zero runtime.

### Radix-UI

From the same people that created Stitches, Radix provide accessible components, in this project was used the _tooltip_ for favorite button.

### Redux Toolkit

A way easier than traditional Redux, Redux Toolkit was used to manage and store locally information about favorite films.

### Framer Motion

Add a few transitions between pages and showing component
