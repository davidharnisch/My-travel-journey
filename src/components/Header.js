import React from "react"
import ReactDOM from "react-dom/client"

export default function Header() {
    return (
        <header>
            <nav className="navigation">
                    <img src="./images/logo.png" className="logo" />
                    <h1 className="navigation__title">Moje cestovatelské zápisky</h1>
            </nav>
        </header>
    )
}