import { useEffect } from 'react'
import { useState } from 'react'
function App() {

  const [load, setLoad] = useState(false)
  const [images,setImages] = useState([])
  const [count,setCount] =useState(0)
  const [error,setError]=useState("")

  async function fetchImages (){
    
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count<0 ? 0:count*20 } `)
      
      if (!response.ok) return setError("Failed to fetch")

      const data = await response.json()
      setImages((prev) => [...prev, ...data.products])
      setCount((prev)=>prev+1)
      setLoad(false)

    } catch(e) {
       setError("empty URL")
    }
  }

  useEffect(() => {
    if (load) {
      fetchImages()
    }
  }, [load])

  useEffect(() => {
    fetchImages()
  }, [])


  return (
    <div className=' w-full h-auto bg-black p-8 '>
     <div className=' flex flex-row flex-wrap gap-8 '>
      { images&&images.length>0 ?(

        images.map((item)=>(
          <div key={item.id} className="flex flex-col items-center gap-2 w-36">
            <img className=" w-36 h-36 object-cover border-2 border-white rounded-xl shadow-2xl" src={item.thumbnail} alt={item.title} />
            <p className="text-white text-sm text-center font-medium truncate w-full">{item.title}</p>
          </div>
        )))
        :(
          <p className='text-gray-400 animate-pulse text-2xl felx items-center'>loading...</p>
        )
      }
     </div>
     {/* Centered and pushes down dynamically */}
     <div className="w-full flex justify-center mt-8">
       <button className="bg-gray-300 p-2 px-6 rounded-xl font-semibold" onClick={()=>setLoad(true)}>Load More</button>
     </div>
    </div>
  )
}

export default App