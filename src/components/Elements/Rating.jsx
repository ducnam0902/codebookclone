export const Rating = ({ rating }) => {
    let ratingArray = Array(5).fill(false);
    let k = 0;

    for (k = 0; k < rating; k++) {
        ratingArray[k] = true;
    };

    return (
        <>
            {
                ratingArray.map((value, index) => (
                    value ? (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : (
                        <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                    )
                ))
            }
        </>
    )
}
