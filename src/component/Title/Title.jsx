import { Star } from 'lucide-react';

function Title({text,style,bgLine}) {
    return (
        <>
            <h1 className={` text-5xl text-center font-bold my-4 ${style}`}>{text}</h1>
          <div className=" flex  justify-center items-center gap-4">
            <span className={`block w-32 h-1  ${bgLine}`}></span>
            <span className={`block text-4xl text-white ${style}`}><Star className={style} /></span>
            <span className={`block w-32 h-1  ${bgLine}`}></span>
          </div>
        </>
    )
}

export default Title;