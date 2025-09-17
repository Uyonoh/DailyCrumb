interface ReviewProps {
  userId: number;
  text: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  createdAt: string;
  likes: number;
  dislikes: number;
}

interface RatingProps {
  initialRating?: number;
  readonly?: boolean;
}

function getProductReviews(slug: string): ReviewProps[] {
  const reviews: ReviewProps[] = [
    {
      userId: 2,
      text: "This chocolate cake is absolutely divine! The texture is perfect, and the flavor is rich without being too overpowering. It was a hit at my birthday party.",
      rating: 5,
      createdAt: "1 month ago",
      likes: 5,
      dislikes: 1,
    },
    {
      userId: 3,
      text: "The cake was good, but I found it a bit too sweet for my taste. The presentation was beautiful, though, and the delivery was on time.",
      rating: 4,
      createdAt: "2 months ago",
      likes: 2,
      dislikes: 0,
    },
  ];

  return reviews;
}

export type { ReviewProps, RatingProps };
export { getProductReviews };
