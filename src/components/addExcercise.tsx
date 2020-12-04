import Axios from "axios";
import { useState } from "react";

export function AddExcercise() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleNameChange = (event: any) => {
    const { value } = event.target;
    setName(value);
  };

  const handleDescriptionChange = (event: any) => {
      const { value } = event.target;
      setDescription(value);
  }

  const addExcercise = () => {
    Axios.post('http://localhost:8888/api/createExcercise', {
        name,
        description
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button onClick={addExcercise}>add</button>
    </div>
  );
}
