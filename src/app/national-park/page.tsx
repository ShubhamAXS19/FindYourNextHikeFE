// pages/index.js
import ParkGuides from "./parkguide";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">
        National Park Guides
      </h1>
      <ParkGuides />
    </div>
  );
}
