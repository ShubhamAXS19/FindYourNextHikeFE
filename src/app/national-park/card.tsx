// components/Card.js

interface CardProps {
  title: string;
  backgroundImage: string;
  isCenter: boolean;
}
export default function Card({ title, backgroundImage, isCenter }: CardProps) {
  return (
    <div
      className={`relative w-56 h-80 sm:w-64 sm:h-96 rounded-xl shadow-lg bg-cover bg-center transform transition-transform duration-300 ${
        isCenter ? "scale-105 z-10" : "scale-95"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end rounded-xl">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <button className="mt-4 bg-gray-200 text-black px-4 py-2 rounded-lg">
          Explore
        </button>
      </div>
    </div>
  );
}
