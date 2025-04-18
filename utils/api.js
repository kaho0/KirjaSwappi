import axios from "axios";
import {
  mockSwapByBooksMultiple,
  mockSwapByBooksSingle,
  mockSwapByGenres,
  mockOpenForOffers,
} from "./mockData";

// API configuration
const API_URL = "https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c";
const API_KEY = "3akimClnEXEa0AgAeuQtNqsf1Q6Bb38oTzkvv2keBa";

// Create axios instance with proper configuration
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    "X-SILO-KEY": API_KEY,
    "Content-Type": "application/json",
  },
});

// Flag to determine if we should use mock data as fallback
const USE_MOCK_DATA_AS_FALLBACK = true;

export const fetchBookData = async (conditionType = "SwapByBooks") => {
  try {
    console.log("Fetching data from API...");
    const response = await api.get("");
    console.log("API response received");
    return transformApiData(response.data, conditionType);
  } catch (error) {
    console.error("API Error:", error.message || "Unknown error");

    if (USE_MOCK_DATA_AS_FALLBACK) {
      console.log("Falling back to mock data...");
      return getMockData(conditionType);
    }

    throw error;
  }
};

// Helper function to transform API data to our component structure
function transformApiData(data, conditionType) {
  // Get username from API or default to William Harris
  const username = data.owner?.name || "William Harris";

  // Create a base object with the API data
  const baseObject = {
    id: data.id || "1",
    title: data.title || "Man's search for meaning",
    author: data.author || "Viktor Frankl",
    description:
      data.description ||
      "A brief synopsis or description of the book's content, providing potential swappers with an idea of what the book is about.",
    coverImage:
      data.coverPhotoUrl ||
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9XuRQEp3oR2V3N3aChisUtpNclaYi8.png",
    condition: data.condition || "Used Like New",
    language: data.language || "English",
    location: data.location || "Senate Square, Helsinki",
    genres: data.genres || ["Biography", "Autobiography", "Personal narrative"],
    owner: username,
    rating: {
      user: username,
      value: data.owner?.rating || 95,
    },
    moreFromUser: data.moreFromUser || getMockMoreBooks(),
  };

  // Add the swap condition based on the condition type
  switch (conditionType) {
    case "SwapByBooks":
      return {
        ...baseObject,
        swapCondition: {
          type: "SwapByBooks",
          books: [
            {
              title: "Harry Potter and The Order of The Phoenix",
              author: "J.K. Rowling",
              coverImage:
                "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1064&auto=format&fit=crop",
            },
            {
              title: "The Productive Muslim",
              author: "Mohammed Faris",
              coverImage:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop",
            },
          ],
        },
      };
    case "SwapByBooksSingle":
      return {
        ...baseObject,
        swapCondition: {
          type: "SwapByBooks",
          books: [
            {
              title: "Harry Potter and The Order of The Phoenix",
              author: "J.K. Rowling",
              coverImage:
                "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1064&auto=format&fit=crop",
            },
          ],
        },
      };
    case "SwapByGenres":
      return {
        ...baseObject,
        swapCondition: {
          type: "SwapByGenres",
          genres: ["Thriller", "Non-Fiction"],
        },
      };
    case "OpenForOffers":
      return {
        ...baseObject,
        swapCondition: {
          type: "OpenForOffers",
        },
      };
    default:
      return {
        ...baseObject,
        swapCondition: {
          type: "SwapByBooks",
          books: [
            {
              title: "Harry Potter and The Order of The Phoenix",
              author: "J.K. Rowling",
              coverImage:
                "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1064&auto=format&fit=crop",
            },
            {
              title: "The Productive Muslim",
              author: "Mohammed Faris",
              coverImage:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop",
            },
          ],
        },
      };
  }
}

// Get mock data based on condition type
function getMockData(conditionType) {
  // Update the owner name in all mock data objects
  const updateOwnerName = (mockData) => ({
    ...mockData,
    owner: "William Harris",
    rating: {
      ...mockData.rating,
      user: "William Harris",
    },
  });

  switch (conditionType) {
    case "SwapByBooks":
      return updateOwnerName(mockSwapByBooksMultiple);
    case "SwapByBooksSingle":
      return updateOwnerName(mockSwapByBooksSingle);
    case "SwapByGenres":
      return updateOwnerName(mockSwapByGenres);
    case "OpenForOffers":
      return updateOwnerName(mockOpenForOffers);
    default:
      return updateOwnerName(mockSwapByBooksMultiple);
  }
}

// Mock data for more books from the same user
function getMockMoreBooks() {
  return [
    {
      id: "2",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "/hobbit.jpg",
    },
    {
      id: "3",
      title: "The Silmarillion",
      author: "J.R.R. Tolkien",
      coverImage: "/silmar.jpg",
    },
    {
      id: "4",
      title: "Unfinished Tales",
      author: "J.R.R. Tolkien",
      coverImage: "/tales.jpg",
    },
    {
      id: "5",
      title: "The Children of Húrin",
      author: "J.R.R. Tolkien",
      coverImage: "/hurn.jpeg",
    },
  ];
}
