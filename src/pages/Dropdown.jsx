import { useState } from "react"
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon
} from "@heroicons/react/24/outline";

const Dropdown = ({ setType, }) => {
  const [isOpen, setIsOpen] = useState(false)
  const list = [
    {
      type: "GRATIS",
    },
    {
      type: "PREMIUM",
    }
  ]

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    setIsOpen(false);
  };

  return (
      <div className="relative flex flex-col items-center rounded-lg">
        <button
         onClick={() => setIsOpen((prev) => !prev)}
         className="bg-blue-400 p-1 w-full flex gap-2 items-center font-medium text-white justify-between text-lg rounded-2xl tracking-wider border-4 border-transparent hover:bg-darkblue-04 active:border-white duration-300 active:text-white">
          {!isOpen ? (
            <ChevronDoubleDownIcon className="h-5 w-5"/>
          ) : (
            <ChevronDoubleUpIcon className="h-5 w-5"/>
          )}
          Filter
        </button>

        {isOpen && (
          <div className="bg-blue-400 absolute top-12 flex flex-col items-start rounded-lg p-0 w-full">
            {list.map((item, i)=>(
              <div className="w-full p-2 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-red-500 border-l-4" 
              key={i}
              onClick={() => handleTypeChange(item.type)}
              >
                {item.type === 'GRATIS' ? (
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    {item.type}
                  </span>
                  ) : (
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-500 rounded-lg bg-opacity-50">
                    {item.type}
                  </span>
                  )}
                
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default Dropdown