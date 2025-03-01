import { useState } from "react";


export default function NewTodoForm({onSubmit}){
   
    const [newitem, setNewItem] = useState(""); 

    function handleSumbit(e) {
        e.preventDefault();
        if(newitem === "") return
    
        onSubmit(newitem)
    
        setNewItem("")
      }
    
    
    return(
        <form onSubmit={handleSumbit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Enter New Item</label>
          <input type="text" id="item" value={newitem} onChange={e => setNewItem(e.target.value)} />
        </div>
        <button className="btn">Add</button>
       </form>
    )
}