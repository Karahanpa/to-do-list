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

    const handleDelete = (indexToDelete) => {
        let updatedItems = items.filter((item, index) => (
            index !== indexToDelete
        ) )
        setItems(updatedItems);
    }

    return (
        <div className="item">
            <h2>{props.title}</h2>
            <input
            type="text"
            value={input}
            onChange={handleChange} />
            <button className="add" onClick={handleClick}>Add to List</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)} className="delete">X</button></li>
                ))}  
            </ul>
        </div> 
     );
}
 
export default ItemAction;