import FormArea from "./FormArea"
import StatusArea from "./StatusArea"

function Main() {
  return (
    <section className="max-w-6xl m-auto bg-gray-50">
        <h2 className="text-center text-3xl pb-6 pt-8 font-semibold">Token Status</h2>
        <div className="grid grid-cols-2 gap-3 mx-12">
            <FormArea/>
            <StatusArea/>
        </div>
       
    </section>
  )
}

export default Main