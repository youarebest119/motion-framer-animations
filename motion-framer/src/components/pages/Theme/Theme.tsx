import { useState } from "react";
import "./Theme.scss";

const Theme = () => {
    const [theme, setTheme] = useState("light");
    return (
        <>
            <section className="theme_box">
                <button onCanPlay={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
            </section>
        </>
    )
}

export default Theme
