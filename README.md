# Fullstack Stripe Store

## Introduction

This is a full-stack e-commerce web application built with React and Node.js, featuring secure Stripe payment integration using PaymentIntent and PaymentElement.

The project demonstrates real-world payment flow handling, frontend-backend communication, and state management architecture designed for scalability.

This project was built as part of my preparation for junior full-stack developer roles.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API (Global Cart State)
- Stripe.js

### Backend
- Node.js
- Express
- Stripe API (PaymentIntent)


---

## Features

### Cart System
- Add/remove products
- Update item quantity
- Dynamic total price calculation
- Cart persistence using localStorage

### Secure Stripe Checkout
- Backend endpoint creates Stripe PaymentIntent
- Client receives `clientSecret`
- Stripe PaymentElement handles secure card collection
- Payment confirmed using `stripe.confirmPayment()`
- Payment status verified using `stripe.retrievePaymentIntent()`
- Cart cleared only after confirmed successful payment

### Payment Status Handling
- Displays "Processing", "Success", or "Failure"
- Prevents false-positive success pages
- Conditional rendering based on real Stripe status

### Architecture
- Separate frontend and backend folders
- Environment variable management
- Structured for future authentication and database support

---

## What I Learned

- How Stripe PaymentIntent flow works end-to-end
- Secure client-server communication for payments
- Why payment status must be verified instead of trusting redirects
- Managing global state using Context API
- Handling conditional routing and UI rendering
- Structuring scalable full-stack projects
- Managing environment variables securely

---

## Development Process (Short Overview)

1. Built cart and state management system
2. Implemented backend server with Stripe integration
3. Connected frontend checkout flow to backend PaymentIntent
4. Integrated Stripe PaymentElement
5. Implemented payment verification on success page
6. Refactored structure for scalability and clean separation


---

## Future Improvements

Planned next integrations:

- Firebase Authentication (Login & Register)
- Firestore database for cart and order storage
- Order history page
- Protected routes (Checkout & Orders)
- Persistent order storage in database

---

## How to Run the Project
1. Clone the Repository
git clone https://github.com/Nebiyu14/Fullstack-Stripe-Store.git
cd Fullstack-Stripe-Store
