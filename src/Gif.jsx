import {delay, motion, useInView} from 'framer-motion';
import { useRef } from 'react';


const variants = {
    inicial: { opacity: 0, scale: 0
    }, 
    animate: ({index}) =>({ 
        opacity: 1, 
        scale: 1, 
        transition:{
            delay: index*.1
        }
    })
}
export const Gif = ({ gif, index }) => {

    const ref = useRef(null) //hook potente, crea referencia a una parte del HTML/JSX para monitorearlo 
    const visto = useInView(ref, {once: true}) //hook de framer-motion, recibe una referencia del objeto que se quiere vigilar, con el "once" le decimos que solo se active una vez
    return (
          <motion.img 
          ref={ref}
          initial="inicial"
          animate={visto ? "animate" : ""}
          variants={variants}
          custom={{index}}
          whileHover={{
            scale: 1.1
            }}
          className="gif" 
          src={gif.images.original.url} 
          alt={gif.title} />
    )
}