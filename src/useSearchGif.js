import { useState } from "react";
export const useSearchGif = () =>{

const [valorInput, setValorInput] = useState('');
const [gifs, setGifs] = useState([]);
const [cargando, setCargando] = useState(false);

const onChange = (event) => {
  const valor = event.target.value;
  setValorInput(valor);
}

//llamado a la API 
const getGifs = async (query) =>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=vf8Lt9ABQ7vZd5JnWrRgLM4PRwEC4ZLC&q=${query}`; //esta la url de la api
  setCargando(true);
//interfaz de tiempo que tarda en cargar, solo para verificar
  await new Promise(resolve =>{
    setTimeout(() =>{
        resolve(true)
    }, 3000)
  })
  //es solo un ejemplo

  const response =  await fetch(url); //espero una respuesta, se le coloca el await para que sepa que se espera
  const data = await response.json(); //siempre que se espera una response se coloca await
  setCargando(false);
  console.log(data)
  return data.data;
}

const onSubmit = async (event) => {
  event.preventDefault()
  const gifs = await getGifs(valorInput)
  setGifs (gifs)
}
    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
        cargando
    }
}