import {NextComponentType} from "next";
import React from "react";

interface ButtonProps {
    href?: string
    children: React.ReactNode
}

const Button = ({children, href, ...otherProps}: ButtonProps) => {

    return <>
        {href === null ?
            <button className={"btn"} {...otherProps}>{children}</button> :
            <a href={href} className={"btn"} {...otherProps}>{children}</a>
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


          }

          .btn:hover {
            background: var(--color-primary-light);
          }
        `}</style>
    </>
}

export default Button;
