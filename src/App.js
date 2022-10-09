import './App.css';
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cardElements = data.map(cardData => {
      return <Card
      key={cardData.id}
      item={cardData}
  />
  })
  return (
  <div className = "mainBody">
      <Header />
      <section className="cards-list">
          {cardElements}
      </section>
  </div>
  )
}


export default App
