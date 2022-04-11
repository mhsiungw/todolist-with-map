# Todolist with map

## About this App

A web app making use of React/Redux and [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

<br />

## To start the project locally

clone this project, run `npm i` and `npm start`

<br />

## Important

remember to add additional type info in `@types/google.maps` so the app can run normally.

```ts
// index.d.ts > MarkerOptions

interface MarkerOptions {
    id: string
    //...
}
```

(I don't know if this is the best way, feel free to send a PR if you have a better one.)
