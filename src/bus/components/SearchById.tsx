import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
   placeholder: string;
   onSearch: (id:string) => void;
}

export const SearchById = ({placeholder, onSearch}:Props)=> {
  const [id, setId] = useState('');

  useEffect(()=>{
    const timeoudId = setTimeout(()=>{
      onSearch(id)
    }, 700);

    return ()=>{
      clearTimeout(timeoudId)
    }
  }, [id, setId])


  const handleSearch = ( )=>{
  
    onSearch(id)
  }

  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === 'Enter'){
      handleSearch()
    }
  }

    return (
<div className="p-8"> 

 <div className="rounded-lg overflow-hidden bg-gradient-to-r from-[#381e59] to-[#b91662] px-20 py-2 shadow-sm">
      <div className="flex items-center bg-white rounded-lg overflow-hidden max-w-lg h-10">
        
        <div className="px-3 text-gray-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          value={id}
          onChange={(event) => setId(event.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
        />

        <button 
          onClick={handleSearch}
          className="h-full px-5 text-sm font-medium text-white
          bg-primary
          hover:opacity-90 transition-opacity">
          Buscar
        </button>

      </div>
    </div>
        </div>

    )
}