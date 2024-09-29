# Templedot - A Template By Dot

Hello, this is my simple starter template for some of my projects that seem to require a lot of repeated technologies. This template was create for specific types of apps in mind, and I believe that it is important that you analyze the technologies used in this template along with what kind of projects I hope to build with this template.

## Template Use Case

I tend to build a lot of prototypes for one off apps that I would like to provide to a small community of family and friends. The number of apps that I build have increased proportionally to my experience, and the technology stacks that I have used have evolved over the time. That is why I wanted to create a lightweight template that handles a majority of the initial setups for the ui development, the api routes that will be used, and set up any wrappers that may be used.

I have also been prototyping a few AI apps, and so to streamline that process, I have integrated api routes and hooks for chat, completion, and object generation.

## Technology Stack

### State Management

To handle most of the tedious complexities such as global state management, I wrapped the layout of the app with a StoreProvider, with the Provider implemented from `react-redux` and the store itself provided by `@reduxjs/toolkit`. Hooks for dispatch and selector are also available.

### Provided Components and Containers

To quick start UI development, I have prebuilt the home, about, and dashboard pages with their own dedicated container component to reduce client render errors.

### Styling

Implemented with Tailwind CSS, this application also uses the `Shadcn UI` component library to install components, with the following components already being installed:

- `button.jsx`
- `card.jsx`
- `chart.jsx`
- `input.jsx`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Enviornment Variables
