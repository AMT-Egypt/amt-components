import { useEffect, useState } from "react";
import { goToTopProps } from "../types";

export const GoTop = ({ Icon, bottom, backgroundColor, border, borderRadius, paddingSize, left, right }: goToTopProps) => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handelScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // لجعل التمرير سلساً
        });
    }

    return (
        <div
            onClick={handelScroll}
            style={{
                position: "fixed",
                width: "fit-content",
                cursor: "pointer",
                bottom: bottom ? bottom : "10px",
                transition: "ease-in",
                transitionProperty: "all",
                transitionDuration: "3s",
                backgroundColor: backgroundColor ? backgroundColor : "#000",
                border: border ? border : "none",
                borderRadius: borderRadius ? borderRadius : "0px",
                padding: paddingSize ? paddingSize : "5px",
                left: left ? !right ? show ? left : "-100%" : "10px" : "",
                right: right ? !left ? show ? right : "-100%" : "" : ""
            }}
        >
            {Icon}
        </div>
    )
}
