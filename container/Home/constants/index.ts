export type headerDataType = {
  title: string;
  desc: string;
};

// Categories Sectin
export const categoriesHeader: headerDataType = {
  title: "Explore our wide variety of categories",
  desc: "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new",
};

// Streaming Section Experience Data
export const streamingHeaderData: headerDataType = {
  title: "We Provide you streaming experience across various devices.",
  desc: "With StreamVibe, you can enjoy your favorite movies and TV shows        anytime, anywhere. Our platform is designed to be compatible with a wide        range of devices, ensuring that you never miss a moment of entertainment.",
};

export type streamingType = {
  title: string;
  desc: string;
  icon: string;
};
export const streamingData: streamingType[] = [
  {
    title: "Smartphones",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/smartphones.svg",
  },
  {
    title: "Tablet",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/tablet.svg",
  },
  {
    title: "Smart TV",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/smart-tv.svg",
  },
  {
    title: "Laptops",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/laptop.svg",
  },
  {
    title: "Gaming Consoles",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/controller.svg",
  },
  {
    title: "VR Headsets ",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: "/icons/vr.svg",
  },
];

// Questions Section Data
export const questionsHeaderData: headerDataType = {
  title: "Frequently Asked Questions",
  desc: "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
};



// Subscriptions Section
export const subscriptionsHeaderData: headerDataType = {
  title: "Choose the plan that's right for you",
  desc: "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",
};
