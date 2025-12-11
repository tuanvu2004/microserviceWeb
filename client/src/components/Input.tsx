import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    className?: string;
}

const Input: React.FC<InputProps> = ({ icon, className, ...props }) => {
    return (
        <div className={`
            flex items-center gap-2 rounded-md 
            ring-1 ring-gray-300 px-3 py-2 focus-within:ring-black 
            ${className}
        `}>
            {icon}
            <input
                {...props}
                className="text-sm outline-none border-none bg-transparent w-full font-normal"
            />
        </div>
    );
};

export default Input;