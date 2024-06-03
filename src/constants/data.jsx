//sole and ankle data

export const asideHeading = [
  { id: 1, name: "Home" },
  { id: 2, name: "Sale" },
  { id: 3, name: "Sizes" },
];

export const asideData = [
  { id: 1, asideText: "Lifestyle", href: "#" },
  { id: 2, asideText: "Jordan", href: "#" },
  { id: 3, asideText: "Running", href: "#" },
  { id: 4, asideText: "Basketball", href: "#" },
  { id: 5, asideText: "Training & Gym", href: "#" },
  { id: 6, asideText: "Football", href: "#" },
  { id: 7, asideText: "Skateboarding", href: "#" },
  { id: 8, asideText: "American Football", href: "#" },
  { id: 9, asideText: "Baseball", href: "#" },
  { id: 10, asideText: "Golf", href: "#" },
  { id: 11, asideText: "Tennis", href: "#" },
  { id: 12, asideText: "Athletics", href: "#" },
  { id: 13, asideText: "Walking", href: "#" },
];

import pic1 from "../assets/images/tech-challenge.jpg";
import pic2 from "../assets/images/joyride.jpg";
import pic3 from "../assets/images/legend-academy.jpg";
import pic4 from "../assets/images/metcon-5.jpg";
import pic5 from "../assets/images/pegasus.jpg";
import pic6 from "../assets/images/phantom-flyknit.jpg";
import pic7 from "../assets/images/phantom.jpg";
import pic8 from "../assets/images/react-infinity.jpg";
// import pic9 from "../assets/images/tech-challenge.jpg";

const SHOES = [
  {
    slug: "tech-challenge",
    name: "NikeCourt Tech Challenge 20",
    imageSrc: pic1,
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: "metcon-5",
    name: "Nike Metcon 5 AMP",
    imageSrc: pic4,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: "phantom",
    name: "Nike Phantom Vision",
    imageSrc: pic7,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: "pegasus",
    name: "Nike Air Zoom Pegasus",
    imageSrc: pic5,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: "joyride",
    name: "Nike Joyride Dual Run",
    imageSrc: pic2,
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: "legend-academy",
    name: "Nike Tiempo Legend 8",
    imageSrc: pic3,
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: "react-infinity",
    name: "Nike React Infinity Pro",
    imageSrc: pic8,
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: "phantom-flyknit",
    name: "Nike React Phantom Run Flyknit 2",
    imageSrc: pic6,
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
  // {
  //   slug: "lebron",
  //   name: "LeBron 17",
  //   imageSrc: "/assets/lebron.jpg",
  //   price: 26000,
  //   salePrice: null,
  //   releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
  //   numOfColors: 1,
  // },
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
