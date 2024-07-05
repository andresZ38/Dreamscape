import TouristPackage1 from "../assets/images/Images/TouristPlaces/TourPackage1.webp";
import TourPackageTrip1 from "../assets/images/Images/TouristPlaces/TourPackageTrip1.webp";
import TourPackageTrip2 from "../assets/images/Images/TouristPlaces/TourPackageTrip2.webp";
import TourPackageTrip3 from "../assets/images/Images/TouristPlaces/TourPackageTrip3.webp";

import TouristPackage2 from "../assets/images/Images/TouristPlaces/TourPackage2.webp";

//tourist places
import TouristPlace1 from "../assets/images/Images/TouristPlaces/TouristPlace1.webp";

export const TourPackages = [
  {
    id: 1,
    name: "Beach Paradise Tour",
    mainImage: TouristPackage1,
    reviews: "95",
    about:
      "Experience the ultimate beach getaway with our Beach Paradise Tour. Relax on pristine sandy shores, swim in crystal-clear waters, and indulge in delicious beachside cuisine. Our exclusive tour package offers beachfront accommodation where you can enjoy the sound of the waves right from your room. Take part in a guided snorkeling tour to explore vibrant coral reefs and exotic marine life. In the evenings, unwind with a sunset dinner cruise, offering stunning views and gourmet dining experiences. Whether you want to relax under the sun or embark on underwater adventures, this tour has something for everyone.",
    duration: "7 days",
    location: "Maldives",
    transportation: "Flight and Bus",
    food: "All-inclusive meals and drinks",
    price: "1200",
    comments: [
      {
        name: "John Doe",
        comment:
          "Had an amazing time on this tour! The beaches were stunning, and the sunset dinner cruise was unforgettable.",
        date: "May 25, 2024",
        commentedReview: "Highly recommended!",
      },
      {
        name: "Jane Smith",
        comment:
          "The guided snorkeling tour was fantastic! We saw so many colorful fish and coral reefs.",
        date: "May 20, 2024",
        commentedReview: "A must-do activity!",
      },
    ],
    images: [TourPackageTrip1, TourPackageTrip2, TourPackageTrip3],
  },

  {
    id: 2,
    name: "Mountain Adventure Tour",
    mainImage: TouristPackage2,
    reviews: "80",
    about:
      "Join our Mountain Adventure Tour for an exhilarating experience in the heart of nature. Hike through scenic trails, camp under the stars, and enjoy breathtaking mountain views. Our tour includes guided hikes with experienced guides, ensuring your safety and enjoyment. After a day of adventure, relax by the campfire and savor delicious meals prepared by our expert chefs. This tour is perfect for adventure seekers and nature lovers alike.",
    duration: "5 days",
    location: "Swiss Alps",
    transportation: "Luxury bus transfers",
    food: "Full-board meals and drinks",
    price: "$900",
    comments: [
      {
        name: "Alice Brown",
        comment:
          "The mountain views were spectacular, and the hikes were challenging but rewarding. A great experience!",
        date: "April 15, 2024",
        commentedReview: "Would love to do it again!",
      },
      {
        name: "Bob White",
        comment:
          "Camping under the stars in the Swiss Alps was an unforgettable experience. The guides were fantastic.",
        date: "April 10, 2024",
        commentedReview: "Highly recommend for adventure lovers.",
      },
    ],
    images: [TourPackageTrip1, TourPackageTrip2, TourPackageTrip3],
  },

  {
    id: 3,
    name: "Cultural Heritage Tour",
    mainImage: TouristPackage1,
    reviews: "120",
    about:
      "Discover the rich cultural heritage of our destination with this comprehensive tour. Visit historic landmarks, explore ancient ruins, and immerse yourself in the local culture. Our tour includes guided visits to museums, temples, and cultural sites, offering you a deep understanding of the region's history and traditions. Enjoy traditional meals and stay in charming accommodations that reflect the local culture.",
    duration: "6 days",
    location: "Greece",
    transportation: "Private car transfers",
    food: "Breakfast and dinner included",
    price: "$1100",
    comments: [
      {
        name: "Carlos Rivera",
        comment:
          "A fantastic tour that offers a deep dive into the local culture and history. The guides were very knowledgeable.",
        date: "March 22, 2024",
        commentedReview: "A must-do for history buffs!",
      },
      {
        name: "Diana Adams",
        comment:
          "Loved visiting the ancient ruins and learning about the history of Greece. The food was amazing too!",
        date: "March 18, 2024",
        commentedReview: "Highly recommend this tour.",
      },
    ],
    images: [TourPackageTrip1, TourPackageTrip2, TourPackageTrip3],
  },

  {
    id: 4,
    name: "Wildlife Safari Tour",
    mainImage: TouristPackage2,
    reviews: "75",
    about:
      "Embark on a thrilling Wildlife Safari Tour and witness exotic animals in their natural habitat. Our safari includes guided game drives, bird watching, and nature walks, all led by experienced wildlife experts. Stay in luxurious lodges that offer comfort and stunning views of the wilderness. This tour is perfect for wildlife enthusiasts and photographers looking to capture the beauty of nature.",
    duration: "4 days",
    location: "Kenya",
    transportation: "Jeep safari",
    food: "All meals included",
    price: "$1300",
    comments: [
      {
        name: "Emily Johnson",
        comment:
          "Seeing the wildlife up close was an incredible experience. The lodges were luxurious and comfortable.",
        date: "February 12, 2024",
        commentedReview: "A dream come true for wildlife lovers.",
      },
      {
        name: "Frank Lee",
        comment:
          "The guided game drives were exciting and informative. Managed to get some amazing photos.",
        date: "February 8, 2024",
        commentedReview: "Highly recommended for photographers.",
      },
    ],
    images: [TourPackageTrip1, TourPackageTrip2, TourPackageTrip3],
  },

  {
    id: 5,
    name: "City Explorer Tour",
    mainImage: TouristPackage1,
    reviews: "105",
    about:
      "Explore the vibrant city life with our City Explorer Tour. Visit famous landmarks, enjoy world-class dining, and experience the local nightlife. Our tour includes guided city tours, visits to museums and galleries, and plenty of free time to explore on your own. Stay in centrally located hotels that offer easy access to all major attractions.",
    duration: "3 days",
    location: "New York City",
    transportation: "Public transport passes included",
    food: "Breakfast included",
    price: "$700",
    comments: [
      {
        name: "George Martin",
        comment:
          "A great way to see all the major sights in a short amount of time. The guide was very knowledgeable.",
        date: "January 15, 2024",
        commentedReview: "Perfect for first-time visitors.",
      },
      {
        name: "Hannah Williams",
        comment:
          "Loved the mix of guided tours and free time. Got to see everything I wanted and more.",
        date: "January 12, 2024",
        commentedReview: "Highly recommend this tour.",
      },
    ],
    images: [TourPackageTrip2, TourPackageTrip1, TourPackageTrip3],
  },
  {
    id: 6,
    name: "Island Hopping Adventure",
    mainImage: TouristPackage2,
    reviews: "85",
    about:
      "Join our Island Hopping Adventure and explore multiple beautiful islands. Enjoy pristine beaches, clear blue waters, and diverse marine life. Our tour includes boat transfers between islands, snorkeling trips, and beachside BBQs. Stay in comfortable beach resorts and soak up the sun as you hop from one island to another.",
    duration: "8 days",
    location: "Philippines",
    transportation: "Boat transfers",
    food: "Full-board meals and drinks",
    price: "$1500",
    comments: [
      {
        name: "Ivy Kim",
        comment:
          "Each island had its unique charm. The snorkeling trips were amazing, and the beachside BBQs were delicious.",
        date: "December 20, 2023",
        commentedReview: "A perfect holiday experience.",
      },
      {
        name: "Jack Wilson",
        comment:
          "Loved every moment of the island hopping. The boat transfers were smooth and well-organized.",
        date: "December 15, 2023",
        commentedReview: "Highly recommended for beach lovers.",
      },
    ],
    images: [TourPackageTrip1, TourPackageTrip2, TourPackageTrip3],
  },
];

const TouristPlaces = [
  {
    id: 1,
    image: TouristPlace1,
    name: "Golden Gate Bridge",
    location: "San Francisco, USA",
    reviewsCount: 1200,
    category: "Popular",
  },
  {
    id: 2,
    image: TouristPlace1,
    name: "Eiffel Tower",
    location: "Paris, France",
    reviewsCount: 2500,
    category: "Most Viewed",
  },
  {
    id: 3,
    image: TouristPlace1,
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    reviewsCount: 1800,
    category: "Recommended",
  },
  {
    id: 4,
    image: TouristPlace1,
    name: "Great Wall of China",
    location: "Beijing, China",
    reviewsCount: 3200,
    category: "Best Visited",
  },
  {
    id: 5,
    image: TouristPlace1,
    name: "Taj Mahal",
    location: "Agra, India",
    reviewsCount: 2100,
    category: "Best Visited",
  },
  {
    id: 6,
    image: TouristPlace1,
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    reviewsCount: 1400,
    category: "Recommended",
  },
  {
    id: 7,
    image: TouristPlace1,
    name: "Statue of Liberty",
    location: "New York City, USA",
    reviewsCount: 2800,
    category: "Popular",
  },
  {
    id: 8,
    image: TouristPlace1,
    name: "Colosseum",
    location: "Rome, Italy",
    reviewsCount: 1900,
    category: "Most Viewed",
  },
  {
    id: 9,
    image: TouristPlace1,
    name: "Petra",
    location: "Ma'an Governorate, Jordan",
    reviewsCount: 1500,
    category: "Recommended",
  },
  {
    id: 10,
    image: TouristPlace1,
    name: "Niagara Falls",
    location: "Ontario, Canada",
    reviewsCount: 2300,
    category: "Popular",
  },
  // Add more tourist places as needed
];

export default TouristPlaces;
