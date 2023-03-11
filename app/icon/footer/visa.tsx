import React from "react";

type Props = {
  width?: number;
  height?: number;
};

function VisaIcon({
  width,height
}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 193 133"
      
    >
      <rect
        width="189.541"
        height="129.541"
        x="1.73"
        y="1.73"
        fill="#fff"
        stroke="#F3F3F3"
        strokeWidth="3.459"
        rx="2.27"
      ></rect>
      <path
        fill="#15195A"
        d="M85.691 91.216h-12.85l8.038-46.553h12.848l-8.036 46.553zM132.271 45.801c-2.534-.942-6.554-1.982-11.525-1.982-12.689 0-21.625 6.34-21.68 15.402-.105 6.686 6.398 10.4 11.262 12.629 4.971 2.278 6.661 3.765 6.661 5.796-.051 3.118-4.017 4.556-7.716 4.556-5.131 0-7.879-.741-12.057-2.476l-1.692-.744-1.798 10.45c3.014 1.286 8.566 2.427 14.331 2.477 13.482 0 22.26-6.24 22.364-15.898.051-5.3-3.383-9.36-10.786-12.678-4.494-2.13-7.246-3.566-7.246-5.745.052-1.982 2.328-4.011 7.401-4.011 4.177-.1 7.246.841 9.571 1.782l1.163.495 1.747-10.053z"
      ></path>
      <path
        fill="#15195A"
        fillRule="evenodd"
        d="M155.271 44.663h9.939l10.367 46.552h-11.898s-1.164-5.349-1.533-6.983h-16.498l-2.696 6.983h-13.483l19.086-42.69c1.323-3.02 3.651-3.862 6.716-3.862zm-.792 17.036s-4.072 10.35-5.13 13.025h10.681c-.529-2.328-2.962-13.47-2.962-13.47l-.898-4.012a243.36 243.36 0 01-1.294 3.41c-.25.65-.418 1.087-.397 1.047zM49.525 76.407L62.11 44.663h13.587L55.5 91.166H41.911L30.46 50.716c-3.952-2.164-8.462-3.904-13.504-5.112l.212-.94H37.84c2.802.097 5.076.94 5.816 3.912l4.493 21.39.001.003 1.375 6.439z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default VisaIcon;
