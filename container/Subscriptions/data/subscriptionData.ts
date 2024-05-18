export type SubscriptionDataType = {
  monthly: SubscriptionOptionType[];
  yearly: SubscriptionOptionType[];
};

export type SubscriptionOptionType = {
  title: string;
  description: string;
  price: string;
};

export const subscriptionsHeaderData = {
  title: "Choose the plan that's right for you",
  desc: "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",
};

export const subscriptionData: SubscriptionDataType = {
  monthly: [
    {
      title: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "$9.99",
    },
    {
      title: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "$12.99",
    },
    {
      title: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "$14.99",
    },
  ],
  yearly: [
    {
      title: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "$7.99",
    },
    {
      title: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "$10.99",
    },
    {
      title: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "$11.99",
    },
  ],
};
