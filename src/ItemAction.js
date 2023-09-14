import { useState } from "react";
const ItemAction = (props) => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        setItems([...items, input]);
        setInput("");
    }

    return (
        <div className="item">
            <h2>{props.title}</h2>
            <input
            type="text"
            value={input}
            onChange={handleChange} />
            <button onClick={handleClick}>Add to List</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}  
            </ul>
        </div> 
     );
}
 
export default ItemAction;