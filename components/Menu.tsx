"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { sliderLists } from "@/constants";
import { useGSAP } from "@gsap/react";

const Menu = () => {
    const [currentIndex, setcurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" });
        gsap.fromTo(".details h2", { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 1, ease: "power1.inOut" });
        gsap.fromTo(".details p", { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 1, ease: "power1.inOut" });
    }, [currentIndex]);

    const totalCocktails = sliderLists.length;

    const goToSlide = (index: any) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setcurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset: any) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    };

    const currentCocktail = getCocktailAt(0);
    const nextCocktail = getCocktailAt(1);
    const prevCocktail = getCocktailAt(-1);

    const contentRef = useRef<HTMLDivElement | null>(null);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, i) => {
                    const isActive = i == currentIndex;
                    return (
                        <button
                            key={cocktail.id}
                            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
                            onClick={() => goToSlide(i)}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
