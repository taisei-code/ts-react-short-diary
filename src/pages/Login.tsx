import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";

const Login = () => {

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
  }

  const signInWithGithub = async () => {
    await signInWithPopup(auth, gitHubProvider)
  }

  return (
    <main className="h-screen bg-yellow-300 pt-10">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-md py-12">
          <p className="mb-5 text-center">
            好きなアカウントでのログインを行なってください
          </p>
          <div className="flex gap-3 flex-col items-center">
            <button className="bg-white w-max border border-black py-2 px-4 rounded" onClick={signInWithGoogle}>
              Googleでログイン
            </button>
            <button className="bg-black text-white w-max border border-black py-2 px-4 rounded" onClick={signInWithGithub}>
              GitHubでログイン
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
