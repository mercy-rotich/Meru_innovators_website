const Badge = ({ text, color = "bg-gray-200", textColor = "text-gray-800" }) => {
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold badge ${color} ${textColor}`}>
        {text}
      </span>
    );
  };
  
  export default Badge;
  