import {NextComponentType} from "next";
import React from "react";

interface ButtonProps {
    href?: string
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    className?: string
}

const Button = ({children, href, onClick, className, ...otherProps}: ButtonProps) => {
    return <>
        {href === null ?
            <button className={"btn" + (className === undefined ? "" : (" " + className))} {...otherProps}
                    onClick={onClick}>{children}</button> :
            <a href={href} className={"btn" + (className === undefined ? "" : (" " + className))}
               onClick={onClick} {...otherProps}>{children}</a>
        }

        <style jsx>{`
          .btn {
            display: inline-block;
            background: var(--color-primary);
            padding: 12px 20px;
            border: 0;

            text-decoration: unset;
            color: var(--color-black);
            font-size: 24px;
            border-radius: 50px;

            transition: 0.3s background-color;

            cursor: pointer;


          }

          .btn:hover {
            background: var(--color-primary-light);
          }
        `}</style>
    </>
}

export default Button;
