import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function App() {
  const [rating, setRating] = useState(0) 
  const [hover, setHover] = useState(0)   

  let stars = 7

  function handeClick(index) {
    setRating(index) 
  }

  function MouseEnter(index) {
    setHover(index)
  }

  function MouseLeave() {
    setHover(0) // Reset hover state to 0 when mouse leaves the rating area
  }

  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center gap-6'>
      <div className='flex gap-2' onMouseLeave={MouseLeave} >
        {[...Array(stars)].map((_, index) => {
          const currentStarValue = index + 1 
          return (
            <FaStar key={index} className={`text-4xl cursor-pointer transition-colors duration-200 ${currentStarValue <= (hover || rating) ? 'text-amber-300' : 'text-gray-600'}`}
              onClick={() => handeClick(currentStarValue)} 
              onMouseEnter={() => MouseEnter(currentStarValue)} />)
        })}
      </div>
    </div>
  )
}

export default App