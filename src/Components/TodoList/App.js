import { useState } from 'react';
import './App.css';

function Todolist() {
  const[inp , setInp] =useState()
  const[list , setList] = useState([])
  const[isEdit , setIsEdit] = useState(false)
  const[index , setIndex] = useState()
  function Add(){
    if(isEdit === true){
      let copy = [...list]
      const obj = {
        id: Math.random(),
        value : inp
      } 
      copy.splice(index , 1 , obj)
      setList(copy)
      setIsEdit(false)
    }else{
      let copy = [...list]
      const obj = {
        id: Math.random(),
        value : inp
      } 
      copy.push(obj)
      setList(copy)
    }
    setInp('')
  }

  function delet(objTodo){
    let copy = [...list]
    copy = copy.filter((listItem)=>(
      objTodo.id !== listItem.id
    ))
    setList(copy)
  }

  function edit1(ali , ind){
    setInp(ali)
    setIsEdit(true)
    setIndex(ind)
  }
  return (
    <div className='D1'>
      <div className='D2'>
        <div className='DInp'>
          <input type='text' onChange={(e)=>{setInp(e.target.value)}} value={inp}/>
          <button onClick={Add}>{isEdit === true?'Edit':'Add'}</button>
        </div>
        {
          list.map((item , indexg)=>(
            <div className='DInp'>
            <div className='DT'>
              {item.value}
            </div>
            <button onClick={()=>delet(item)}>Delete</button>
            <button onClick={()=>edit1(item.value , indexg)}>Edit</button>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default Todolist;
