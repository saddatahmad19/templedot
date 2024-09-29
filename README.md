# Templedot - A Next.js 14 Template By Dot

Templedot is a comprehensive starter template for building modern web applications. It incorporates a powerful tech stack designed for rapid prototyping and scalable development.

## Features

- **Next.js 14**: Utilizing the latest app router for efficient, server-side rendered React applications
- **Tailwind CSS**: For rapid, utility-first styling
- **shadcn/ui**: Pre-built, customizable UI components
- **Redux Toolkit**: Efficient state management with React-Redux
- **Clerk Authentication**: Secure, easy-to-implement user authentication
- **Recharts**: Powerful charting library for data visualization

## Template Use Case

This template is ideal for:

- Rapid prototyping of web applications
- Building apps for small communities of family and friends
- Developing AI-powered applications with integrated API routes for chat, completion, and object generation

## Technology Stack

### Next.js 14 with App Router

The project uses Next.js 14, leveraging the new app router for improved performance and developer experience.

### Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS

Pre-installed shadcn/ui components:

- `button.jsx`
- `card.jsx`
- `chart.jsx`
- `input.jsx`

### Authentication

Clerk is used for authentication, offering:

- Easy setup and integration
- Generous free tier
- Flexible authentication options

The authentication behavior can be modified in the `middleware.js` file.

### State Management

Redux Toolkit is implemented for efficient state management:

- Global state management with `react-redux`
- Store configuration with `@reduxjs/toolkit`
- Custom hooks available for `dispatch` and `selector`

### Data Visualization

Recharts is integrated for creating interactive and responsive charts.

### Pre-built Components and Containers

To jumpstart development, the template includes pre-built pages and container components:

- Home page
- About page
- Dashboard page

Each page has a dedicated container component to reduce client-side rendering errors.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following Clerk variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_....
   CLERK_SECRET_KEY=sk_test_....
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- Modify the `middleware.js` file to adjust authentication behavior
- Use the pre-installed shadcn/ui components or add new ones as needed
- Leverage the Redux store in `src/lib/redux/store.js` for state management
- Customize API routes in the `src/app/api` directory for AI functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
