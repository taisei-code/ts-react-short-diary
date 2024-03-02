import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";

const Header = () => {
  
  const [user] = useAuthState(auth);
  
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center mx-auto px-2 h-20">
        <h1>
          <Link to="/" className="md:text-4xl text-3xl">
            Short Diary
          </Link>
        </h1>
        <nav className="flex items-center gap-2">
          <ul className="flex gap-2 items-center">
            <li className="hidden lg:block">
              <Link to="/create">日記を書く</Link>
            </li>
          </ul>
          {user ? (
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={user.photoURL as string}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <button className="bg-black text-white py-[7px] px-4 rounded-md" onClick={() => signOut(auth)}>
                Logout
              </button>
            </div>
          ) : (
            <button className="bg-black text-white py-[7px] px-4 rounded-md">
              <Link to="/login">Login</Link>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
