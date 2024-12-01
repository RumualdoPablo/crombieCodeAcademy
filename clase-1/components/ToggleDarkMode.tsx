"use client";
import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

const ToggleDarkMode = () => {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

    return (
        <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark-text-white  rounded"
        >{isDarkMode?"🌝":"🌞"}</button>
    )
}

export default ToggleDarkMode;