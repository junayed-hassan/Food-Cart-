

function TokenNo(props) {
  return (
    <ul>
        <li className="bg-[#EEEEEE] my-5 mx-4 flex p-2 rounded-md">
            <div className="">
                <p className=" font-medium text-lg">Junayed hassan</p>
                <span className="text-xs font-medium">01948493880</span>
            </div>
            <button className={`py-[15px] px-[36px] ${props.bgColor} ml-auto rounded-sm text-white`}>Token No: 02</button>
        </li>
    </ul>
  )
}

export default TokenNo


