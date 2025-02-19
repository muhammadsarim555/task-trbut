const Button = ({ children, onClick, className = "", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full md:max-w-[40%] bg-purple-800 cursor-pointer text-white text-lg font-bold py-2 md:py-2 rounded-full hover:bg-primary-bg transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;