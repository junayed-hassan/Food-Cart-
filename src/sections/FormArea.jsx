
function FormArea() {
  return (
    <div>
        <div className="bg-white p-4 shadow-sm rounded-md">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <small className="text-red-500 hidden">Something is wrong </small>
            <input type="text" placeholder="Phone" className="input input-bordered w-full mt-3" />
            <small className="text-red-500 hidden">Something is wrong </small>
            <input type="text" placeholder="Active" className="input input-bordered w-full mt-3" />
            <small className="text-red-500 hidden">Something is wrong </small>
            <button className="py-4 bg-[#00BD56] px-12 mt-3 block text-white font-medium rounded-md">Add Token</button>
        </div>
        <h2 className="text-center font-medium text-2xl mt-8">Total Tokens 120</h2>
    </div>
  )
}

export default FormArea