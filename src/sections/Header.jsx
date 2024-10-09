
function Header() {
  return (
    <header>
        <div className="max-w-6xl m-auto bg-stone-200 font-mono flex justify-between items-center p-4 font-medium">
            <a className="uppercase hover:text-rose-700 text-xl	" href="#">token handler</a>
            <ul className="flex">
                <li className="px-2 hover:text-rose-700 text-lg"><a href="#">Hone</a></li>
                <li className="px-2 hover:text-rose-700 text-lg"><a href="#">Abut</a></li>
                <li className="px-2 hover:text-rose-700 text-lg"><a href="#">Services</a></li>
                <li className="px-2 hover:text-rose-700 text-lg"><a href="#">contact</a></li>
                <li className="px-2 hover:text-rose-700 text-lg"><a href="#">Gallery</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header