"use client";
import gsap from "gsap";
import React from "react";
import { navLinks } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top", // Element position (nav), Viewport position, in this case when the bottom of the navbar reaches the top of the viewport it triggers
            },
        });

        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent" },
            { backgroundColor: "#00000005", backdropFilter: "blur(10px)", duration: 1, ease: "power1.inOut" }
        );
    });

    return (
        <nav>
            <div>
                <a href="#" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
