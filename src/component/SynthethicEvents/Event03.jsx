import React, { useState } from "react";

function Event03() {
  const [input, setInput] = useState();
  const [name, setName] = useState();

  function handleChange(e) {
    console.log(e.target);
    setInput(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()

  }

  return (
    <div>
      <h2>{input}</h2>
      <h3>{name}</h3>

      <form action="" onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange} />

        <input
          type="text"
          onChange={handleChangeName}
          placeholder="Enter Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Event03;
