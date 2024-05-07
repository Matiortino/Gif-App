import { Gif } from "./Gif"

export const GridGifs = ({gifs}) => {
    return (
        <div className="gridgifs">
        {
         gifs.map((gif, index) => (
            <Gif key={gif.id} gif = {gif} index={index} 
            />
            ))
        }
      </div>
    )
}