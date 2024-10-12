import Button from "./Button";

function FoodCart(props) {
    let {image, name} = props.data;
  
    let clickHandler = function () {
        props.onClick();
    }
    let prevsHandler = function () {
        props.prevs();
    }
  
  return (
    <>
     <div className="w-full h-screen border-b-orange-200 flex justify-center items-center">
        <div className="w-3/12 p-4 bg-orange-100 text-rose-500 text-xl font-medium rounded-[3px]">
            <img className="rounded-md" src={image} alt="#" />
            <h2 className="my-3 text-3xl text-black">{name}</h2>
            <Button prevsHandler={prevsHandler} onClick={clickHandler}/>
        </div>
     </div>
    </>
  )
}

export default FoodCart