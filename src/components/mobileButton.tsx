import React, {type ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button = ({
                           children,
                           className = '',
                           disabled = false,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            className={`
  px-3 py-2 
  gap-2
  flex items-center justify-center
  bg-lavender
  text-white
  rounded-full
  font-subtitle-2
  font-semibold
  relative
  z-30
  w-fit
  box-border
  appearance-none
  hover:bg-[#6C2BD9]
  border-2 border-transparent
  active:border-[#CABFFD]
  focus:outline-none

  disabled:bg-grey-light
  disabled:text-grey-dark
  disabled:active:border-transparent
  disabled:focus:ring-0
  disabled:focus:outline-none

  ${className}
      `}
            disabled={disabled}
            {...props}
        >
            {children}

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={`
                    fill-white
                    disabled:fill-grey-dark
                `}>
                <path
                    d="M13.9574 8.71506C14.0901 8.64855 14.2017 8.54643 14.2796 8.42012C14.3576 8.29381 14.3989 8.1483 14.3989 7.99986C14.3989 7.85142 14.3576 7.70591 14.2796 7.5796C14.2017 7.45329 14.0901 7.35117 13.9574 7.28466L2.75738 1.68466C2.61851 1.61517 2.46242 1.58761 2.30815 1.60532C2.15388 1.62303 2.0081 1.68526 1.88859 1.78441C1.76908 1.88356 1.68101 2.01535 1.63513 2.1637C1.58924 2.31205 1.58752 2.47055 1.63018 2.61986L2.77338 6.61986C2.8212 6.78704 2.92218 6.93409 3.06105 7.03874C3.19991 7.1434 3.36909 7.19996 3.54298 7.19986L7.19978 7.19986C7.41195 7.19986 7.61544 7.28414 7.76546 7.43417C7.91549 7.5842 7.99978 7.78769 7.99978 7.99986C7.99978 8.21203 7.91549 8.41551 7.76546 8.56554C7.61544 8.71557 7.41195 8.79986 7.19978 8.79986H3.54298C3.36909 8.79976 3.19991 8.85632 3.06105 8.96098C2.92218 9.06563 2.8212 9.21268 2.77338 9.37986L1.63098 13.3799C1.58824 13.5291 1.58985 13.6876 1.63563 13.836C1.68141 13.9843 1.76937 14.1162 1.88878 14.2154C2.0082 14.3146 2.1539 14.3769 2.30814 14.3948C2.46237 14.4126 2.61846 14.3852 2.75738 14.3159L13.9574 8.71586V8.71506Z"
                    fill="currentColor"/>
            </svg>


        </button>
    );
};

export default Button;