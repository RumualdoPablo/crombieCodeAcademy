"use client";

import { useEffect, useState } from "react";
import "@/components/DarkModeToggle.css"

const DarkModeToggle = () => {
    const [darkMode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            // apply dark mode
        } else {
            // remove dark mode
        }
    }, [darkMode])

    return (
        <button onClick={toggleDarkMode} className={darkMode?'dark-mode-on':'dark-mode-off'}></button>
    )
}

export default DarkModeToggle;
