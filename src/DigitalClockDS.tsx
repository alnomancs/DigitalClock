import { useEffect, useState } from "react";

function DigitalClockDS() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  function formatTime() {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatDate() {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return time.toLocaleDateString(undefined, options);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-3xl text-center shadow-2xl shadow-blue-500/30 font-mono">
        <div className="text-blue-400 text-6xl font-bold mb-4 tracking-wide neon-text">
          {formatTime()}
        </div>
        <div className="text-green-300 text-xl opacity-80">{formatDate()}</div>
      </div>
    </div>
  );
}

export default DigitalClockDS;
