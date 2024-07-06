import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import { ToDo } from '../../components/ToDo';
import { Popup } from '../../components/popup';


export const MainPage = () => {

  const [toDos, setToDos] = useState([]);
  const [input,setInput] = useState("");
  const[updateUI, setUpdateUI] = useState(false);
  const[showPopup, setShowPopup] = useState(false);
  const[popupContent, setpopupContent] = useState({})

  useEffect(() => {
    axios
    .get(`${baseURL}/get`)
    .then((res) => setToDos(res.data))
    .catch((err) => console.log(err));
  },[updateUI]);

  const saveToDo = () => {
    axios
    .post(`${baseURL}/save`, { toDo: input })
    .then((res) => {
    console.log(res.data);
    setUpdateUI((prevState) => !prevState);
    setInput("");

    })
    .catch((err) => console.log(err));
  }

  return (
    <main>
      <div className="container">
      <div className="input_holder">
        <input 
        value = {input} onChange={(e) => setInput(e.target.value)}
        type="text" 
        placeholder="Add a ToDo..." />
        <button onClick={saveToDo}>Add</button>
      </div>
      <div className="list">
        {toDos.map(Element => (
          <ToDo 
          key={Element._id} 
          text = {Element.toDo} 
          id = {Element._id} 
          setUpdateUI ={setUpdateUI} 
          setShowPopup = {setShowPopup}
          setpopupContent = {setpopupContent}
          />
        ))}
      </div>
     </div>
     {showPopup && <Popup setShowPopup={setShowPopup} popupContent = {popupContent} />}
    </main>
  )
}

