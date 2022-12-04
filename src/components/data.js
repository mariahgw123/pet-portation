// reusable data component. Pass in different values without
// having to hard code each section.

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Care",
  headline: "We accept and love all breeds and species!",
  description:
    "Get access to our exclusive packages that allow you to easily connect with a practiced veterinarian to transport your beloved pet in comfort and safety.",
  buttonLabel: "Learn More",
  imgStart: false,
  img: require("../images/bed_with_willow_tongue.png"),
  alt: "willowbed",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Exceptional Value",
  headline: "Got a vet visit during work hours? We can help!",
  description:
    "From weddings, to grooming appointments, and everything in between: Pet-Portation will ensure your pet has a safe and comfortable travel.",
  buttonLabel: "Discover",
  imgStart: true,
  img: require("../images/undraw_Dog.png"),
  alt: "weddingpic",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join The Herd",
  headline: "Getting started couldn't be easier",
  description:
    "Get you and your pet signed up and ready in less than 5 minutes. Your furry friend will be riding in style in no time!",
  buttonLabel: "Start Now",
  imgStart: false,
  img: require("../images/undraw_fish_bowl.png"),
  alt: "undraw fishbowl",
  dark: false,
  primary: false,
  darkText: true,
};
