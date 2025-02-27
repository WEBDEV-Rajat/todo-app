import React from 'react'
import axios from 'axios'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from "../utils/constant";

export const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

const updateToDo = () => {
    setPopupContent({text,id});
    setShowPopup(true);
}
  return (
    <div className='toDo'> ToDo
    {text}
    <div className="icons">
        <AiFillEdit className='icon' onClick={updateToDo} />
        <RxCross1 className='icon' onClick={deleteToDo} />       
    </div>
    </div>
  )
}


