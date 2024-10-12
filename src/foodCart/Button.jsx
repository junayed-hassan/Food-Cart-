
function Button(props) {
  return (
    <>
        <button onClick={props.onClick} className="px-6 py-2 bg-slate-50 rounded-md">Next</button>
        <button onClick={props.prevsHandler} className="px-6 py-2 bg-slate-50 rounded-md ms-20">prevs</button>
    </>
  )
}
export default Button