import { useState } from 'react'
import QRCode from 'react-qr-code' 

function App() {

  const [value,setValue]=useState('') 
  const [qr,setQr] = useState('')

  function generateCode(){
    setQr(value)
  }

  return (
    <div className='w-full h-screen bg-black flex justify-center items-center flex-col p-2 gap-3' >
      <div className=' flex flex-row justify-between rounded-xl shadow-2xl bg-white'>
        <input className=" p-4 text-black outline-none" type="text" placeholder='Enter value' onChange={(e)=>setValue(e.target.value)}/>
        <button className='text-white bg-blue-700 p-4 ' onClick={generateCode}>Generate</button>
      </div>
      <div>
        <QRCode value={qr}/>
      </div>
    </div>
  )
}

export default App