// pages/index.js
import ParkGuides from "./parkguide";

export default function Home() {
  return (
    <div className="container mx-auto px-4 my-20">
      <h1 className="text-4xl font-bold text-center ">National Park Guides</h1>
      <ParkGuides />
    </div>
  );
}
