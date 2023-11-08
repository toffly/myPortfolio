const Button = ({ label, iconURL, dropShadow, bgColor, bgHover }) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 px-7 py-4 leading-none rounded-full font-poppins font-semibold text-primary ${
        bgColor ? `${bgColor}` : "bg-cyan-500"
      }  ${dropShadow && dropShadow} ${bgHover && bgHover}` }
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
