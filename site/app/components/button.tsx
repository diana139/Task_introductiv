import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({ children, ...props }: ButtonProps){
    return(
        <button className="w-[40px] h-[40px] bg-[#767269] text-white rounded-full hover:bg-black "
        {...props}>
            {children}
        </button>
    );
}