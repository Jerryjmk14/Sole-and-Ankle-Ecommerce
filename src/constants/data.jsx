// export const headerText = ["Watch.", "Learn.", "Grow."];

// export const heroText = [
//   "All Categories",
//   "Entertainment",
//   "Lifestyle",
//   "Writing",
//   "Business",
//   "Food",
// ];

// import heroPic1 from "../assets/images/Sales.webp";
// import heroPic2 from "../assets/images/Data.webp";
// import heroPic3 from "../assets/images/Copywriting.webp";
// import heroPic4 from "../assets/images/Design.webp";

// export const heroData = [
//   {
//     id: 1,
//     image: heroPic1,
//     dataTitle: "Sales Marketing",
//     duration: "4 months",
//   },
//   { id: 2, image: heroPic2, dataTitle: "Data Analytics", duration: "1 month" },
//   {
//     id: 3,
//     image: heroPic3,
//     dataTitle: "Copywriting Pro",
//     duration: "2 months",
//   },
//   { id: 4, image: heroPic4, dataTitle: "Design Art", duration: "4 months" },
// ];

// export const navLink = [
//   { id: 1, navName: "Home", href: "#" },
//   { id: 2, navName: "About Us", href: "#" },
//   { id: 3, navName: "Fashion", href: "#" },
//   { id: 4, navName: "Offers", href: "#" },
//   { id: 5, navName: "Services", href: "#" },
// ];

//sole and ankle data

const SHOES = [
  {
    slug: "tech-challenge",
    name: "NikeCourt Tech Challenge 20",
    imageSrc: "/assets/tech-challenge.jpg",
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: "metcon-5",
    name: "Nike Metcon 5 AMP",
    imageSrc: "/assets/metcon-5.jpg",
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: "phantom",
    name: "Nike Phantom Vision",
    imageSrc: "/assets/phantom.jpg",
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: "pegasus",
    name: "Nike Air Zoom Pegasus",
    imageSrc: "/assets/pegasus.jpg",
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: "joyride",
    name: "Nike Joyride Dual Run",
    imageSrc: "/assets/joyride.jpg",
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: "legend-academy",
    name: "Nike Tiempo Legend 8",
    imageSrc: "/assets/legend-academy.jpg",
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: "react-infinity",
    name: "Nike React Infinity Pro",
    imageSrc: "/assets/react-infinity.jpg",
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: "phantom-flyknit",
    name: "Nike React Phantom Run Flyknit 2",
    imageSrc: "/assets/phantom-flyknit.jpg",
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
  {
    slug: "lebron",
    name: "LeBron 17",
    imageSrc: "/assets/lebron.jpg",
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
  },
];

export default SHOES;

//colors

export const COLORS = {
  white: "hsl(0deg, 0%, 100%)",
  gray: {
    100: "hsl(185deg, 5%, 95%)",
    300: "hsl(190deg, 5%, 80%)",
    500: "hsl(196deg, 4%, 60%)",
    700: "hsl(220deg, 5%, 40%)",
    900: "hsl(220deg, 3%, 20%)",
  },
  primary: "hsl(340deg, 65%, 47%)",
  secondary: "hsl(240deg, 60%, 63%)",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
//put this in the color file and use I have ease the job for you

export const navLink1 = [
  { id: 1, navName: "SALE", href: "#" },
  { id: 2, navName: "NEW RELEASES", href: "#" },
  { id: 3, navName: "MEN", href: "#" },
  { id: 4, navName: "WOMEN", href: "#" },
  { id: 5, navName: "KIDS", href: "#" },
  { id: 6, navName: "COLLECTIONS", href: "#" },
];
