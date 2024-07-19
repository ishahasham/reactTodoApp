import React, {useState} from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
    const [input,setInput]=useState('');
    const [items, setItems]=useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const addItem=()=>{
        if(input){
            setItems([...items,input])
            setInput("")
            return
        }
    }
    const deleteAll=()=>{
        setItems([])
    }

    const singleDelete =(index)=>{
        const filterData= items.filter((e,i)=>{
            return index !== i
        })
            setItems(filterData)
    }
    const editItem=(index)=>{
        setEditIndex(index);
        setInput(items[index]);
    }

    const updateItem = () => {
        const updatedItems = [...items];
        updatedItems[editIndex] = input;
        setItems(updatedItems);
        setEditIndex(-1);
        setInput("");
    };
  return (
    <div className='main'>
      <h1>Get Things Done!</h1>
      <br />
      <input value={input} type="text" placeholder='What is the task today? ' className='inp1' onChange={(e)=>{setInput(e.target.value)}}/>

      {editIndex === -1 ? (
                <button className='todo-btn1' onClick={addItem}>Add</button>
            ) : (
                <button className='todo-btn1' onClick={updateItem}>Edit</button>
            )}
      <div className='div1'>
        <MdDelete className='todo-btn' onClick={deleteAll}  />
      </div>
      {
        items.map((element,index)=>{
            return(
               <div className='todos'>
                 <p key={index}>
                    {element}
                </p>
                <div>
                    <FaEdit className='edit-icon' onClick={()=>editItem(index)}/>
                    <MdDelete className='delete-icon' onClick={()=>singleDelete(index)} />
                </div>
               </div>
            )
        })
      }
    </div>
  )
}

export default Todo
