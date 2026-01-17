Hedamo UI – Product Disclosures
About the Project

This project is a frontend implementation of a Product Disclosure page for Hedamo.
The purpose of the interface is to display producer-declared product information in a clear and readable way.

The platform does not verify or certify the information shown. All data is declared by the producer and made available for transparency and review.

The focus of this task was to build a clean, usable UI rather than a complex system.

What the Interface Shows

Each product disclosure includes:

Product name

Disclosure status (Draft / Submitted / Published)

Product category

Declaring organization

Last updated date

The main page allows users to:

Search products by name

Filter products by status

View disclosures in a simple card layout

Design Approach

The UI is intentionally minimal and professional.

Cards are used to separate disclosures clearly

Soft background and spacing reduce visual noise

Subtle hover and load animations improve usability without distraction

Neutral language is used to avoid implying verification or approval

The goal was to make the page easy to scan and suitable for a transparency or compliance-oriented product.

Tech Stack

React

React Router

Vite

CSS (utility classes + custom styles)

No backend or authentication is included. All data is mocked locally for demonstration.

Project Structure
src/
├── components/
│   ├── ProductCard.jsx
│   └── StatusBadge.jsx
├── pages/
│   ├── ProductList.jsx
│   └── ProductDetail.jsx
├── data/
│   └── products.js
├── App.jsx
├── main.jsx
└── index.css

How to Run Locally

Make sure Node.js is installed.

npm install
npm run dev


Open the browser at:

http://localhost:5173

Notes

Product data is static and stored in products.js

The application focuses only on frontend behavior and UI

Accessibility basics (spacing, contrast, readable text) were considered

Further improvements like pagination or backend integration are possible but out of scope for this task

Disclaimer

This interface displays producer-declared information only.
It does not verify, certify, or validate any product claims.
