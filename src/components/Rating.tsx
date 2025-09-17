"use client";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { RatingProps } from "@/app/services/reviews";


function Rating({initialRating = 0, readonly=true}: RatingProps) {
    const [rating, setRating] = useState(initialRating);

    return (
        <ReactRating
            value={rating}
            onChange={setRating}
            style={{ maxWidth: 100 }}
            readOnly={readonly}
        />
    );
}

export default Rating;