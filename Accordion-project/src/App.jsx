import { useEffect, useState } from 'react'
import Data from "./Data"
function App() {
    const [multiCLick,setMultiClick] = useState(false)
    const [multiSelect,SetMultiSlect]=useState([])
    const[singleSelection,setSingleSelection]=useState(null)

    const enableMulticlick = () => setMultiClick((prev)=>!prev)
    const handelSelection = (id) => {

      if(multiCLick===false)
      {
        setSingleSelection((prev)=> prev===id ? null : id )
      }
      else
      {
        SetMultiSlect((prev) => prev.includes(id) ? prev.filter(item => item !== id): [...prev, id])
      }
     } ;

     useEffect(()=> 
      {
        if (singleSelection !== null) {
          SetMultiSlect([singleSelection])
        } else {
          SetMultiSlect([])
        }
        setSingleSelection(null)
      },[multiCLick])

  return (
    <div className="w-full  h-auto bg-black flex flex-col items-center p-5 text-white gap-3">
      <div>
        <button className="bg-gray-700 p-3 rounded-2xl text-white hover:border border-gray-500" onClick={enableMulticlick}>Enable MultiClick</button>
      </div>
      <div className="flex gap-4 flex-col items-center w-150">
         {
            Data && Data.length>0 ? Data.map ((dataItem) =>( 
              <div className=" p-5 w-120 bg-gray-700 ">
                <div>
                  <h3 className=' flex flex-row justify-between'>{dataItem.id}. {dataItem.fact} <button onClick={() => handelSelection(dataItem.id)} >+</button></h3>
                </div>
                <div>
                    {
                  multiCLick 
                      ? multiSelect.includes(dataItem.id) && <div className="mt-2 text-gray-300">{dataItem.Description}</div>
                      : singleSelection === dataItem.id && <div className="mt-2 text-gray-300">{dataItem.Description}</div>
                   }
                </div>         
              </div>
            ))  : <div>No data Available</div>
         }
      </div>
    </div>
  )
}

export default App
