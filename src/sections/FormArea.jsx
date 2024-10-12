import { useState } from "react";
import H2 from "../components/H2";

function FormArea() {
let [num ,  setNum ] = useState(0)
const clickHandler = function () {
setNum(function (n) {
  return ++n;
})
}
 
const [show , setShow ] = useState(false);

  return (
    <div>
        <div className="bg-white p-4 shadow-sm rounded-md">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <small className="text-red-500 hidden">Something is wrong </small>
            <input type="text" placeholder="Phone" className="input input-bordered w-full mt-3" />
            <small className="text-red-500 hidden">Something is wrong </small>
            <input type="text" placeholder="Active" className="input input-bordered w-full mt-3" />
            <small className="text-red-500 hidden">Something is wrong </small>

            <button onClick={clickHandler} className="py-4 bg-[#00BD56] px-12 mt-3 block text-white font-medium rounded-md">Add Token {num}</button>
            <button onClick={() => setShow(true)} className="py-4 bg-[#00BD56] px-12 mt-3 block text-white font-medium rounded-md">open modal </button>
        </div>
        <H2 dataNum={num} />
        <div className={!show ? 'hidden' : ' '}>
           <div className=" top-0 left-0  w-full h-screen bg-pink-50 z-10 flex justify-center items-center">
        <div className="w-11/12 text-center border-spacing-1 border-dotted border-4 border-gray-300	"> 
          <h3 className="m-[2px] p-5  font-lato text-2xl text-yellow-50 bg-slate-500">This is from react JavaScript modal 
          <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
          </h3>
          <button onClick={() => setShow(false)} className="block bg-cyan-500 p-4 text-yellow-50">clear this modal</button>

        </div>
          
        </div>
        </div>
       
    </div>
  )
}

export default FormArea