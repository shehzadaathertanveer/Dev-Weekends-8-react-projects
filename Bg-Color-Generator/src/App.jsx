import { useState } from 'react'

function App() {
  
  const [bgColor, setBgColor] = useState('#000000')
  const [type,setType] = useState("HEX")

  const HexColor = () => {
  
    setType("HEX")
    let color="#"
    const values="0123456789ABCDEF"

    for(let i =0;i<6;i++)
    {
      color += values[Math.floor(Math.random()*16)]
    }

    setBgColor(color)
    return color;

  }

  const RGBcolor = () => {
  
    setType("RGB")
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
          
    let color=`rgb(${r},${g},${b})`

    setBgColor(color)
    return color

  }
  
  const GenerateColor = ()=>{

    if(type==="HEX"){

      HexColor()
      
    }else if(type==="RGB"){
 
      RGBcolor()

    }

  }

  return (
    <div className='w-full h-screen text-white flex flex-col p-5  justify-between' style={{ backgroundColor: bgColor }}>
      <div className='flex flex-row gap-5 justify-center'>
  
        <button className='bg-gray-600 p-3 rounded-2xl shadow-2xl border-2 border-transparent hover:border-white transition-all' onClick={HexColor}>
          Generate by HEX
        </button>
        <button className='bg-gray-600 p-3 rounded-2xl shadow-2xl border-2 border-transparent hover:border-white transition-all' onClick={RGBcolor}>
          Generate by RGB
        </button>
        <button className='bg-gray-600 p-3 rounded-2xl shadow-2xl border-2 border-transparent hover:border-white transition-all' onClick={GenerateColor}>
          Generate color
        </button>
      </div>
      <div className="text-white text-4xl font-bold flex justify-center">
        {type} Color
      </div>
      <div>
        <h1 className="text-white text-4xl font-bold flex justify-center">{bgColor}</h1>
      </div>
    </div>
  )
}

export default App