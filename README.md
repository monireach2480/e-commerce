# E-commerce Web Application

## Overview
This is a full-stack E-commerce web application built using the MERN stack. It includes essential features such as authentication, product management, shopping cart functionality, and an admin dashboard.

## Tech Stack
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication & Security:** JWT (Access/Refresh Tokens), data protection measures
- **Caching & Optimization:** Redis for faster responses
- **Payments:** Stripe integration for secure transactions

## Features
### User Features
- Secure login/signup with JWT authentication
- Browse, search, and filter products
- Add, edit, and remove products from the shopping cart
- Apply coupon codes for discounts
- Secure checkout process with Stripe payments

### Admin Features
- Manage users, products, and orders through an intuitive dashboard
- View sales analytics for better insights
- Edit and categorize products seamlessly

## Deployment
- **Live Application:** [E-commerce App](https://e-commerce-02zs.onrender.com/)
- **GitHub Repository:** [Source Code](https://github.com/monireach2480/e-commerce)

## Installation
To run this project locally, follow these steps:

### Prerequisites
- Node.js installed
- MongoDB database set up

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/monireach2480/e-commerce.git
   cd e-commerce
   ```
2. Install dependencies:
   ```sh
   npm install
   cd client && npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root and add necessary configurations (e.g., database URI, JWT secret, Stripe keys).
4. Start the development servers:
   ```sh
   npm run dev
   ```

## Contributing
Feel free to submit issues and pull requests to improve the application!

## License
This project is licensed under the MIT License.
