
import { useState, useEffect } from "react";

export default function App() {
    const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("countdownTime");
    return savedTime ? parseInt(savedTime, 10) : 1800;
  });

  const [work, setWork] = useState("");

  useEffect(() => {
    setWork("Better Start Now and Start Implementing with Tailwind ASAP! You have only 30mins!");
  }, []);

  useEffect(() => {
    if (time === 0) return; 

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [time]);

    
  useEffect(() => {
    localStorage.setItem("countdownTime", time);
  }, [time]);

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
      <div className="text-6xl font-mono bg-gray-800 px-6 py-4 rounded-lg">
        {formatTime(time)}
      </div>
      {time === 0 && (
        <p className="mt-4 text-red-500 text-lg font-semibold">
          Time's up! Operation disabled. GoodLuck with Coding!
        </p>
      )}

          {time !== 0 && <p className="mt-4 text-lg text-center text-wrap px-6">{work}</p>}
          
          {time !== 0 && <p className="mt-4 text-lg text-center text-wrap px-6 text-red-500 w-full max-w-[560px]">You need to change your package.json name to your project name and your title from index.html</p>} 
    </div>
  );
}
