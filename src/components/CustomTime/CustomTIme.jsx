import React, { useEffect, useState } from "react";
const CustomTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = daysOfWeek[now.getDay()];
      const date = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const amPm = hours >= 12 ? "PM" : "AM";

      const formattedHours = hours % 12 || 12;

      setCurrentTime(
        `${date}-${month}-${year} ${day} ${formattedHours}:${minutes}:${seconds} ${amPm}`
      );
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };

    const toggleInterval = setInterval(toggleVisibility, 5000);

    return () => clearInterval(toggleInterval);
  }, []);

  return (
    <div
      className={`custom-time fixed bottom-0 right-0 bg-gradient-to-r from-green-500 via-red-500 to-pink-500 h-[37px] px-6 text-white rounded-sm shadow-lg flex items-center justify-center w-[300px] ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <p className="text-[1rem] font-medium tracking-wider">{currentTime}</p>
    </div>
  );
};

export default CustomTime;
