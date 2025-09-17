import { Review } from "./Review";
import type { ReviewProps } from "./Review";
import { getProductReviews } from "@/app/services/reviews";


function Reviews({slug}: {slug: string}) {
    const reviews: ReviewProps[] = getProductReviews(slug);
    return (
        <section className="col-span-8">
            <h2 className="font-bold text-xl">Customer Reviews</h2>
            {reviews.map((review, index) => {
                return (
                    <Review key={index} userId={review.userId} text={review.text} rating={review.rating} createdAt={review.createdAt} likes={review.likes} dislikes={review.dislikes} />
                )
            })}
        </section>
    );
}

export default Reviews;