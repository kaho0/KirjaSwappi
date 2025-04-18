📚 KirjaSwappi Book Details
KirjaSwappi Book Details is a responsive React web application for a book-swapping platform. It features a dynamic Book Details screen that adapts its UI based on the book's swap condition type.

🚀 Features
Responsive Design: Built mobile-first for optimal user experience on all devices.

Dynamic Views based on swap condition:

🔄 SwapByBooks: Displays one or more book cards for swapping.

🏷️ SwapByGenres: Renders interactive genre chips/tags.

💬 OpenForOffers: Shows a message or offer request form.

Real-Time Data Fetching using Axios and the KirjaSwappi API.

Loading & Error Handling for a smooth and reliable UI.

Modular Architecture: Clean, maintainable, and reusable components.

🛠️ Tech Stack
React.js

Next.js

Tailwind CSS

Axios for API interactions

🧑‍💻 Getting Started
✅ Prerequisites
Node.js v14 or later

npm or yarn

📦 Installation
Clone the Repository

bash

git clone https://github.com/yourusername/kirjaswappi-book-details.git
cd kirjaswappi-book-details
Install Dependencies

bash
npm install
# or
yarn install
Run the Development Server

bash
npm run dev
# or
yarn dev
View in Browser Open your browser and visit: http://localhost:3000

🔌 API Integration
The application retrieves data from the KirjaSwappi API.

Endpoint:
https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c

Authentication:
Include your API key in the request header:

makefile
Copy
Edit
X-SILO-KEY: your_api_key_here
🌐 Deployment
This project is live and deployed via Vercel.

🔗 Live Demo: https://kirja-swappi.vercel.app

