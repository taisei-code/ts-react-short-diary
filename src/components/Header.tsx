const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center mx-auto px-2 h-20">
        <h1>
          <a href="/" className="md:text-4xl text-3xl">
            Short Diary
          </a>
        </h1>
        <nav className="flex items-center gap-2">
          <ul className="flex gap-2 items-center">
            <li className="hidden lg:block">
              <a href="/create"></a>
            </li>
          </ul>
          <div>
            <img
              src="/user-icon.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header