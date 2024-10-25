"use client";

import React from "react";
import styled from "styled-components";
import northernLightsMountain from "../../../public/assets/northern-lights-mountains.jpg";
import BanffKay from "../../../public/assets/signup-login.webp";
import snowResort from "../../../public/assets/snow-resort.webp";
import snowValley from "../../../public/assets/valley.avif";
import newZealand from "../../../public/assets/login-signup.jpg";

const Card = styled.div`
  width: 200px;
  margin: 0 10px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: transform 0.3s, height 0.3s;

  &:nth-child(1) {
    transform: translateX(-440px); 
    height: 500px;
    width: 300px;
    z-index: 1;
  }
  &:nth-child(1):hover {
    transform: translateX(-440px) scale:(1.1); 
    height: 600px;
    width: 300px;
    z-index: 2;
  }

&:nth-child(1):hover ~ &:nth-child(2) {
    transform: scale(0.9) translateX(-350px);
    height: 550px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(1):hover ~ &:nth-child(3) {
    transform: scale(0.9) translateX(-30px); 
    height: 500px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(1):hover ~ &:nth-child(4) {
    transform: scale(0.9) translateX(290px); 
    height: 450px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(1):hover ~ &:nth-child(5) {
    transform: scale(0.9) translateX(610px); 
    height: 400px;
    width: 300px;
    opacity: 0.95; 
  }

  
  &:nth-child(2) {
    transform: translateX(-220px); 
    height: 550px;
    width: 300px;
    z-index: 2;
  }

    &:nth-child(2):hover {
    transform: translateX(-220px) scale:(1.1); 
    height: 600px;
    width: 300px;
    z-index: 2;
  }

&:nth-child(2):hover ~ &:nth-child(1) {
    transform: scale(0.9) translateX(-300px);
    height: 550px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(2):hover ~ &:nth-child(3) {
    transform: scale(0.9) translateX(-10px); 
    height: 550px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(2):hover ~ &:nth-child(4) {
    transform: scale(0.9) translateX(310px); 
    height: 500px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(2):hover ~ &:nth-child(5) {
    transform: scale(0.9) translateX(630px); 
    height: 450px;
    width: 300px;
    opacity: 0.95; 
  }

  
  &:nth-child(4) {
    transform: translateX(220px); 
    height: 550px;
    width: 300px;
    z-index: 2;
  }
       &:nth-child(4):hover {
    transform: translateX(220px) scale:(1.1); 
    height: 650px;
    width: 300px;
    z-index: 2;
  }

&:nth-child(4):hover ~ &:nth-child(1) {
    transform: scale(0.9) translateX(-300px);
    height: 450px;
    width: 500px;
    opacity: 0.95; 
  }
&:nth-child(4):hover ~ &:nth-child(2) {
    transform: scale(0.9) translateX(-300px);
    height: 500px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(4):hover ~ &:nth-child(3) {
    transform: scale(0.9) translateX(-20px); 
    height: 550px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(4):hover ~ &:nth-child(5) {
    transform: scale(0.9) translateX(700px); 
    height: 600px;
    width: 300px;
    opacity: 0.95; 
  }

  &:nth-child(5) {
    transform: translateX(440px); 
    height: 500px;
    width: 300px;
    z-index: 1;
  }

    &:nth-child(5):hover {
    transform: translateX(440px) scale:(1.1); 
    height: 650px;
    width: 300px;
    z-index: 2;
  }

&:nth-child(5):hover ~ &:nth-child(1) {
    transform: scale(0.9) translateX(-300px);
    height: 400px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(5):hover ~ &:nth-child(2) {
    transform: scale(0.9) translateX(-10px); 
    height: 450px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(5):hover ~ &:nth-child(3) {
    transform: scale(0.9) translateX(310px); 
    height: 500px;
    width: 300px;
    opacity: 0.95; 
  }
&:nth-child(5):hover ~ &:nth-child(4) {
    transform: scale(0.9) translateX(630px); 
    height: 600px;
    width: 300px;
    opacity: 0.95; 
  }

  &:nth-child(3) {
    height: 600px; /* Center card */
    width: 300px;
    z-index: 3;
  }
`;

// Wrapper component to handle hover effects and card positioning
const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover ${Card} {
    transition: transform 0.3s ease-in-out;
  }

  &:hover ${Card}:nth-child(1) {
    transform: translateX(-640px); /* Spread the cards with a 20px gap */
  }
  &:hover ${Card}:nth-child(2) {
    transform: translateX(-320px); /* Spread the cards with a 20px gap */
  }
  &:hover ${Card}:nth-child(3) {
    transform: translateX(0); /* Center card stays in place */
  }
  &:hover ${Card}:nth-child(4) {
    transform: translateX(320px); /* Spread the cards with a 20px gap */
  }
  &:hover ${Card}:nth-child(5) {
    transform: translateX(640px); /* Spread the cards with a 20px gap */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%; /* Adjust this according to the card's height */
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%; /* Adjust this to fit with the image */
  padding: 15px;
  background-color: ${({ bgColor }) => bgColor};
`;

const CardTitle = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const ExploreButton = styled.button`
  padding: 8px 20px;
  border: none;
  background-color: white;
  color: black;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;

const CardLayout = () => {
  const cards = [
    {
      id: 1,
      imageUrl: northernLightsMountain,
      title: "Top Picks in Zion National Park",
      bgColor: "#A0522D",
    },
    {
      id: 2,
      imageUrl: BanffKay,
      title: "Backpacking Trips in Great Smoky Mountains",
      bgColor: "#556B2F",
    },
    {
      id: 3,
      imageUrl: snowResort,
      title: "Top Picks in Yosemite National Park",
      bgColor: "#8B4513",
    },
    {
      id: 4,
      imageUrl: snowValley,
      title: "Hidden Gems in Acadia National Park",
      bgColor: "#2F4F4F",
    },
    {
      id: 5,
      imageUrl: newZealand,
      title: "Top Picks in Banff National Park",
      bgColor: "#2E8B57",
    },
  ];

  return (
    <CardWrapper>
      {cards.map((card) => (
        <Card key={card.id}>
          <CardImage src={card.imageUrl.src} alt={card.title} />
          <CardContent bgColor={card.bgColor}>
            <CardTitle>{card.title}</CardTitle>
            <ExploreButton>Explore</ExploreButton>
          </CardContent>
        </Card>
      ))}
    </CardWrapper>
  );
};

export default CardLayout;
