import Image from "next/image";
import Rating from "@/components/Rating";
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { ReviewProps } from "@/app/services/reviews";
import { User } from "@/app/services/users";
import { getUserById } from "@/app/services/users";


function Review({userId, text, rating, createdAt, likes, dislikes}: ReviewProps) {

    const user: User | undefined = getUserById(userId);
    if (user)
    return (
        <div className="py-5">
            <div className="flex flex-col gap-2">
                <div className="user flex gap-4">
                    <Image src={user.image} alt={user.name} width={50} height={50} className="rounded-full"/>
                    <div>
                        <p className="font-bold">{user.name}</p>
                        <span className="text-sm text-[#bbb]">{createdAt}</span>
                    </div>
                </div>
                <div className="rating">
                    <Rating initialRating={rating} />
                </div>
                <p>{text}</p>
                <div className="flex justify-start gap-4">
                    <span className="flex gap-1 align-center">
                        <ThumbsUp size={20} strokeWidth={1} className="pt-1 cursor-pointer"/>
                        {likes > 0 ? likes : ""}
                    </span>
                    <span className="flex gap-1 align-center">
                        <ThumbsDown size={20} strokeWidth={1} className="pt-1 cursor-pointer"/>
                        {dislikes > 0 ? dislikes : ""}
                    </span>
                </div>
            </div>
        </div>
    );
}

export  {Review};
export type {ReviewProps};