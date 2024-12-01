"use client";
import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

const ToggleDarkMode = () => {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

    return (
        <button
            onClick={toggleDarkMode}
            className="absolute right-2 top-4 px-6 py-1 bg-gray-200 dark:bg-slate-800 dark-text-white  rounded"
        >{isDarkMode?"🌝":"🌞"}</button>
    )
}

export default ToggleDarkMode;