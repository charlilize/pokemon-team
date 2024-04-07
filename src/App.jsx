import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <div className="flex flex-col align-center justify-center">
      <h1 className="font-bold text-4xl">Welcome to the Pokemon Team Creator!</h1>
      <h3 className="text-xl">Create your pokemon team before sending them off into battle!</h3>

      <div className="flex justify-center">
        <img src="src/assets/home-page.png" />
      </div>
    </div>
  )
}

export default App
