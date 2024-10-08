import Image from "next/image";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div>
        <Image
          src={`/img/users/${review.user.photo}`}
          alt={`${review.user.name}`}
          width={50}
          height={50}
        />
        <h6>{review.user.name}</h6>
      </div>
      <p>{review.review}</p>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="24"
            height="24"
            fill={review.rating >= star ? "#FFD700" : "#D3D3D3"}
          >
            <use xlinkHref="/img/icons.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
