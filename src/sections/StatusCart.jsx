

import TokenNo from "./TokenNo"


function StatusCart(props) {
  return (
    <div className="bg-white shadow-sm rounded-md pb-1 mb-5"> 

        <div className={` ${props.bgColor} py-[19px] px-[30px] flex rounded-t-lg text-white`}>
           <strong className="block"> Active Token</strong>
           <span className="ml-auto block">5</span>
        </div>
        <TokenNo bgColor={`${props.bgColor}`} />
        <TokenNo bgColor={`${props.bgColor}`}/>
        <TokenNo bgColor={`${props.bgColor}`}/>
    </div>
  )
}

export default StatusCart