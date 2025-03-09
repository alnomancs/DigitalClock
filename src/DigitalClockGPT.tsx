import { useEffect, useState } from "react";

const DigitalClockGPT = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-300">
      <div>
        <h1 className="text-5xl font-bold mb-6">Digital Clock</h1>
      </div>
      <div className="text-4xl font-mono bg-gray-800 p-6 rounded-lg shadow-lg">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default DigitalClockGPT;
