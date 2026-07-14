import { useState } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [error,setError]=useState('')
  const [allData,setAllData] =useState('')
  const [location,setLocation]=useState('')
  const [humidity,setHumidity]=useState('')
  const [wind,setWind]=useState('')
  const [overCast,setOverCast]=useState('')
  const [date,setDate]=useState('')
  const [temp,setTemp]=useState(0)

  async function SearchStart(){
    try {
      setError("")
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=70cd94ddb148ba48acb272a004aabbb4`
      )
      
      if(!response.ok) return setError("could not fetch data")
      
      const data = await response.json()
      setAllData(data)
      setTemp(data.main.temp)
      setLocation(`${data.name}, ${data.sys.country}`)
      setHumidity(`Humidity: ${data.main.humidity}%`)
      setWind(`Wind: ${data.wind.speed} m/s`)
      setOverCast(data.weather[0].description)
      setDate(new Date().toLocaleDateString())

    } catch(e) {
      setError("Error in url")
    }
  }

  return (
    <div className='h-screen w-full flex items-center justify-center bg-black  '> 

      <div className=' bg-emerald-500 p-8 w-auto h-auto flex flex-col rounded-xl'>
      <div className='flex flex-row gap-4'>
          <input type="text" placeholder='Enter City' className=' bg-white text-black px-12 p-2 rounded-xl' onChange={(e)=>setCity(e.target.value)} />    
          <button className=' bg-amber-500 p-2 px-5 font-semibold rounded-xl border-4 border-transparent hover:border-black hover:text-white' onClick={SearchStart}>Search</button>    
      </div>
      
      {/* Show error if it exists */}
      {error && <p className="text-red-800 font-bold mt-2 text-center">{error}</p>}

      <div className='text-white mt-4'>
        <p className="text-xl font-bold">{location}</p>
        <p className="text-sm opacity-80">{date}</p>
        <h1 className="text-2xl capitalize font-extrabold my-2">{temp} °C</h1>
        <p className="text-sm opacity-80"> {overCast}</p>
        <p className="flex gap-4">{wind} <span>{humidity}</span> </p>
      </div>
      </div>
    </div>
  )
}

export default App