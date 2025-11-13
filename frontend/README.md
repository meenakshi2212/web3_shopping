# Web3 Shopping Cart

A modern e-commerce frontend built with React and Vite that displays products from a public API in a clean, responsive interface.

## Features

- **Modern UI Design**: Clean navbar with Web3 branding and centered store header
- **Product Display**: Grid layout showing products fetched from Fake Store API
- **Search Functionality**: Real-time product filtering by title
- **Responsive Design**: Works seamlessly across different screen sizes
- **Product Cards**: Each card displays product image, title, price, and view details button

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with flexbox and grid
- **Fake Store API** - Product data source

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Project Structure

- App.jsx - where all the magic happens
- App.css - made it look pretty
- main.jsx - standard React entry point
- index.css - basic global stuff

## API Integration

The app fetches product data from `https://fakestoreapi.com/products` and displays:
- Product images
- Product titles (truncated for clean display)
- Pricing information
- Interactive view details buttons

## Build for Production

```bash
npm run build
```

Made this during my exam prep - hope it helps someone else learning React! 🚀