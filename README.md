# KirjaSwappi Book Details

A responsive React web application for a book-swapping platform called KirjaSwappi. This app displays a Book Details screen with different views based on the book's swap condition type.

## Features

- Responsive design (mobile-first)
- Dynamic views based on swap condition type:
  - SwapByBooks (single or multiple book cards)
  - SwapByGenres (display genre chips/tags)
  - OpenForOffers (show a message or offer request form)
- Real-time data fetching from the KirjaSwappi API
- Loading states and error handling
- Clean, modular component structure

## Tech Stack

- React.js
- Next.js
- Tailwind CSS
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/kirjaswappi-book-details.git
   cd kirjaswappi-book-details
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## API Integration

The app fetches data from the KirjaSwappi API:
- Endpoint: `https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c`
- Authentication: API key in the request header (`X-SILO-KEY`)

## Deployment

This project is deployed on Vercel. You can view the live demo at [https://kirjaswappi-book-details.vercel.app](https://kirjaswappi-book-details.vercel.app)

## License

MIT
\`\`\`

\`\`\`js file="next.config.mjs"
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.jsonsilo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
