import { Star, StarHalf } from 'lucide-react';
import React from 'react';

type StarRatingProps = {
    rating: number;
    size?: number; 
};
const StarRating: React.FC<StarRatingProps> = ({ rating, size = 4 }) => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return null;
    }

    const displayedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(displayedRating);
    const hasHalfStar = displayedRating - fullStars === 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const iconClassName = `w-${size} h-${size}`;

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: fullStars }, (_, i) => (
                <Star key={`full-${i}`} className={`${iconClassName} fill-yellow-400 text-yellow-400`} />
            ))}
            {hasHalfStar && (
                <StarHalf key="half" className={`${iconClassName} fill-yellow-400 text-yellow-400`} />
            )}
            {Array.from({ length: emptyStars }, (_, i) => (
                <Star key={`empty-${i}`} className={`${iconClassName} text-gray-300`} />
            ))}
        </div>
    );
};

export default StarRating;