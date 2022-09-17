import { useEffect, useState } from 'react';

function useForm(callback, defaults) {
  const [input, setInput] = useState(defaults);

  useEffect(() => {
    setInput({ ...defaults });//Copia del estado anterior
  }, []);

  const handleInputChange = (event) => {

    
    const name = event.target.name; // last_name
    const value = event.target.value;

    setInput({ ...input, [name]: value });//Preguntar
  };

  const handleSubmit = (event) => {
    event.preventDefault();//Evita que carge la pagina 
    callback(input);
  };
//Aqui esta exportando los estados y funciones
  return {
    input,
    handleInputChange,
    handleSubmit,
  }
}

export default useForm;
