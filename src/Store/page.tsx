"use client";
// import Link from "next/link";
// import Image from "next/image";

{
  /*
const TourCard = () => {
  return (
    <div>
      <div>
        <div>&nbsp;</div>
        <Image
          src={`/img/tours/${tour.imageCover}`}
          alt={tour.name}
          width={500}
          height={300}
        />
        <h3>
          <span>{tour.name}</span>
        </h3>
      </div>
      <div>
        <h4>{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
        <p>{tour.summary}</p>
        <div>
          <svg width="24" height="24">
            <use xlinkHref="/img/icons.svg#icon-map-pin" />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div>
          <svg width="24" height="24">
            <use xlinkHref="/img/icons.svg#icon-calendar" />
          </svg>
          <span>
            {new Date(tour.startDates[0]).toLocaleString("en-us", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div>
          <svg width="24" height="24">
            <use xlinkHref="/img/icons.svg#icon-flag" />
          </svg>
          <span>{`${tour.locations.length} stops`}</span>
        </div>
        <div>
          <svg width="24" height="24">
            <use xlinkHref="/img/icons.svg#icon-user" />
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>
      <div>
        <p>
          <span>{`$${tour.price}`}</span> per person
        </p>
        <p>
          <span>{tour.ratingsAverage}</span> rating ({tour.ratingsQuantity})
        </p>
        {/* Correct Link component usage without nested <a> 
        <Link href={`/tour/${tour.slug}`}>Details</Link>
      </div>
    </div>
  );
}; 
*/
}

const TourCardContainer = () => {
  // const tours = useRecoilValue(tourAtom);

  return (
    <main>
      {/* <div>
        {tours.data.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div> */}
    </main>
  );
};

export default TourCardContainer;
