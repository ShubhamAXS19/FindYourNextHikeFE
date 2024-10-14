"use client";

const TourDetailPage = () => {
  // useEffect(() => {
  //   // Mapbox initialization logic can go here if needed
  // }, []);

  // const renderOverviewBox = (label, text, icon) => (
  //   <div>
  //     <svg width="24" height="24">
  //       <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
  //     </svg>
  //     <span>{label}</span>
  //     <span>{text}</span>
  //   </div>
  // );

  return (
    <div>
      {/* <section>
        <div>
          <div>&nbsp;</div>
           <Image
            src={`/img/tours/${tour.imageCover}`}
            alt={tour.name}
            width={1000}
            height={600}
          /> 
        </div>

        <div>
          <h1>{`${tour.name} tour`}</h1>
          <div>
            <div>
              <svg width="24" height="24">
                <use xlinkHref="/img/icons.svg#icon-clock" />
              </svg>
              <span>{`${tour.duration} days`}</span>
            </div>
            <div>
              <svg width="24" height="24">
                <use xlinkHref="/img/icons.svg#icon-map-pin" />
              </svg>
              <span>{tour.startLocation.description}</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Quick facts</h2>
            {renderOverviewBox(
              "Next date",
              new Date(tour.startDates[0]).toLocaleString("en-us", {
                month: "long",
                year: "numeric",
              }),
              "calendar"
            )}
            {renderOverviewBox("Difficulty", tour.difficulty, "trending-up")}
            {renderOverviewBox(
              "Participants",
              `${tour.maxGroupSize} people`,
              "user"
            )}
            {renderOverviewBox("Rating", `${tour.ratingsAverage} / 5`, "star")}
          </div>

          <div>
            <h2>Your tour guides</h2>
            {tour.guides.map((guide) => (
              <div key={guide._id}>
                <Image
                  src={`/img/users/${guide.photo}`}
                  alt={guide.name}
                  width={50}
                  height={50}
                />
                <span>
                  {guide.role === "lead-guide" ? "Lead guide" : "Tour guide"}
                </span>
                <span>{guide.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2>{`About ${tour.name} tour`}</h2>
          {tour.description.split("\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      <section>
        {tour.images.map((img, i) => (
          <div key={i}>
            <Image
              src={`/img/tours/${img}`}
              alt={`The Park Camper Tour ${i + 1}`}
              width={500}
              height={300}
            />
          </div>
        ))}
      </section>

      <section>
        <div id="map" data-locations={JSON.stringify(tour.locations)}></div>
      </section>

      <section>
        <div>
          {tour.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))} 
        </div>
      </section>

      <section>
        <div>
          <Image
            src="/img/logo-white.png"
            alt="Natours logo"
            width={100}
            height={50}
          />
          <Image
            src={`/img/tours/${tour.images[1]}`}
            alt="Tour picture"
            width={300}
            height={200}
          />
          <Image
            src={`/img/tours/${tour.images[2]}`}
            alt="Tour picture"
            width={300}
            height={200}
          />
          <div>
            <h2>What are you waiting for?</h2>
            <p>{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
            {user ? (
              <button id="book-tour" data-tour-id={tour.id}>
                Book tour now!
              </button>
            ) : (
              <Link href="/login">
                <a>Log in to book tour</a>
              </Link>
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TourDetailPage;
