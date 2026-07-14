import { useState, useEffect } from 'react'

function App() {
  const [images, setImages] = useState([])
  const [error, setError] = useState("")
  const [image, setImage] = useState(0) 

  const url = "https://picsum.photos/v2/list?page=1&limit=10"

  async function getImages(url) {
    if (!url) return setError("Empty URL")
    
    try {
      const response = await fetch(url)
      
      if (!response.ok) return setError("Failed to fetch images") 

      const data = await response.json()
      setImages(data)
    } catch (e) {
      setError(e.message) 
    }
  }

  useEffect(() => {
    getImages(url)
  }, [])

  function nextImg(){
    if (image !== 9) {
      setImage((prev) => prev + 1)
    } 
  }

  function previousImg(){
    if (image !== 0) {
      setImage((prev) => prev - 1)
    } 
  }

  return (
    <div className='w-full h-screen bg-black flex flex-col justify-between p-10 text-white'>
      <div className='flex flex-col gap-10 items-center justify-between w-full'>
        <h1 className="text-2xl font-bold tracking-wider">Image Slider</h1>
        
        <div className='flex items-center gap-5'>

          <button 
            className={`bg-gray-300 hover:bg-white text-black transition-colors shadow-xl rounded-full p-3 font-bold ${
              image === 0 ? 'opacity-30 cursor-not-allowed hover:bg-gray-300' : '' }`} 
            onClick={previousImg} disabled={image===0}>
            ←
          </button>
          
          <div className='w-120 h-120 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-2xl border border-white/5'>
            {images.length > 0 
            ? (
              <>
                <img src={images[image]?.download_url} alt="Slider visual" 
                  className='w-full h-full object-cover '/>
              </>
            ) : (
              <p className="text-gray-500 animate-pulse">Loading images...</p>
            )}
            <div className=' absolute bottom-4 flex gap-1 flex-row '>
            {
              images.map((_,index)=>(
                <button key={index} className='bg-white rounded-full p-2 ' onClick={() => setImage(index)}></button>
              ))
            }
          </div>
          </div>

          <button 
            className={`bg-gray-300 hover:bg-white text-black transition-colors shadow-xl rounded-full p-3 font-bold ${
              image === 9 ? 'opacity-30 cursor-not-allowed hover:bg-gray-300' : ''}`} 
            onClick={nextImg} disabled={image===9}>
            →
          </button>

        </div>
      </div>
    </div>
  )
}

export default App