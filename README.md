# KirjaSwappi Book Details

A responsive React web application for a book-swapping platform called KirjaSwappi. This app features a Book Details screen with dynamic views tailored to the book's swap condition type.

## Features

- **Responsive Design**: Mobile-first approach for seamless user experience.
- **Dynamic Views**:
  - **SwapByBooks**: Displays single or multiple book cards.
  - **SwapByGenres**: Showcases genre chips/tags.
  - **OpenForOffers**: Includes a message or offer request form.
- **Real-Time Data Fetching**: Integrates with the KirjaSwappi API.
- **Robust Error Handling**: Includes loading states and error management.
- **Modular Components**: Clean and reusable component structure.

## Tech Stack

- **React.js**
- **Next.js**
- **Tailwind CSS**
- **Axios**: For API requests.

## Getting Started

### Prerequisites

- **Node.js**: Version 14.x or later.
- **Package Manager**: npm or yarn.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/kirjaswappi-book-details.git
   cd kirjaswappi-book-details
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the Application**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

The app fetches data from the KirjaSwappi API:
- **Endpoint**: `https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c`
- **Authentication**: Include the API key in the request header (`X-SILO-KEY`).

## Deployment

This project is deployed on Vercel. Check out the live demo at [https://kirjaswappi-book-details.vercel.app](https://kirjaswappi-book-details.vercel.app).
