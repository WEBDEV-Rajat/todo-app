import React, { useState } from 'react';

export const MainPage = ({addTask}) => {
  const handleSubmit = (e) => {
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    e.preventDefault();
    addTask({title, deadline});
    setTitle("");
    setDeadline("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
      <label>Title</label>
      <input type="text" />
      </div>
      <div>
      <label>Deadline</label>
      <input type='date' />
      </div>
      <div>
        <button type='submit'>+ADD</button>
      </div>
      </form>

    </div>
  )
}

