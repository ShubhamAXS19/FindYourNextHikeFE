"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TourCard = ({ tour }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="card__header relative">
        <div className="card__picture relative h-48 w-full">
          <Image
            className="card__picture-img object-cover"
            src={`/img/tours/${tour.imageCover}`}
            alt={tour.name}
            layout="fill"
          />
          <div className="card__picture-overlay absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <h3 className="heading-tertiary absolute bottom-4 left-4 text-white text-lg font-semibold">
          {tour.name}
        </h3>
      </div>

      {/* Card Details */}
      <div className="card__details p-6">
        <h4 className="card__sub-heading text-xl font-bold mb-2">{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
        <p className="card__text text-gray-700 mb-4">{tour.summary}</p>

        <div className="card__data flex items-center text-gray-500 mb-2">
          <svg className="card__icon h-5 w-5 mr-2 fill-current">
            <use xlinkHref="/img/icons.svg#icon-map-pin" />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>

        <div className="card__data flex items-center text-gray-500 mb-2">
          <svg className="card__icon h-5 w-5 mr-2 fill-current">
            <use xlinkHref="/img/icons.svg#icon-calendar" />
          </svg>
          <span>
            {new Date(tour.startDates[0]).toLocaleString("en-us", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="card__data flex items-center text-gray-500 mb-2">
          <svg className="card__icon h-5 w-5 mr-2 fill-current">
            <use xlinkHref="/img/icons.svg#icon-flag" />
          </svg>
          <span>{`${tour.locations.length} stops`}</span>
        </div>

        <div className="card__data flex items-center text-gray-500 mb-4">
          <svg className="card__icon h-5 w-5 mr-2 fill-current">
            <use xlinkHref="/img/icons.svg#icon-user" />
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card__footer bg-gray-100 p-6 flex flex-col justify-between">
        <p className="text-xl font-bold text-gray-800 mb-2">
          <span className="card__footer-value">{`$${tour.price}`}</span>
          <span className="card__footer-text text-sm text-gray-600">
            {" "}
            per person
          </span>
        </p>
        <p className="card__ratings text-gray-800 mb-4">
          <span className="card__footer-value text-lg font-semibold">
            {tour.ratingsAverage}
          </span>
          <span className="card__footer-text text-sm text-gray-600">{`rating (${tour.ratingsQuantity})`}</span>
        </p>
        <Link href={`/tour/${tour.slug}`}>Details</Link>
      </div>
    </div>
  );
};

export default TourCard;
