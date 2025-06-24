import { useState } from 'react'
import "./search.css"
export default function Search({ onSearch }) {
    const [input, setInput] = useState();
    function capitalize(text) {
        return text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    const handleCLick = () => {
        if(input){
            onSearch(capitalize(input));
        }
        else {
            
        }
    }
    return (
        <>
            <div className="searcharea">
                
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter city name" />
                <button onClick={() => { handleCLick(); setInput(""); }}>Search</button>
            </div>
        </>
    )
}