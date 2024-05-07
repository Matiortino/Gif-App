import { SearchBar } from "./SearchBar";
import { GridGifs } from "./GridGifs";
import { useSearchGif } from "./useSearchGif";

function App() {
  const {valorInput, onChange, onSubmit, gifs, cargando} = useSearchGif()

  return (
      <div className="App">

        <SearchBar 
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
        />

        {
          cargando ? 
        (<h2>Cargando...</h2>) : 
        (
        <GridGifs
          gifs={gifs}
        />
        )
        //pregunta si esta pasando la accion, si pasa retorna el h2 sino retorna lo que esta luego de los dos puntos
        
        }
n
      </div>
  )
}

export default App
