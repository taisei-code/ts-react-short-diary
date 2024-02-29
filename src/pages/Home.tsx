const Home = () => {
  return (
    <main className="bg-yellow-300 h-screen">
      <div className="container mx-auto">
        <div className="py-20">
          <div className="text-center mb-[120px]">
            <h2 className="lg:text-[70px] text-[50px] text-center mb-5">
              みんなの日記
            </h2>
            <button className="rounded py-2 px-5 border border-black bg-white">
              <a href="/create">日記を書く✏️</a>
            </button>
          </div>
          <ul className="grid lg:grid-cols-8 md:grid-cols-4 gap-10">
            <li className="col-span-2 bg-white p-2 rounded relative">
              <div className="bg-blue-500 py-1 px-6 gap-2 flex justify-center items-center w-max absolute top-0 left-[50%] translate-x-[-50%] rounded-b">
                <div>
                  <img
                    src="/user-icon.png"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white">XXXX</p>
                </div>
              </div>
              <div>
                <img
                  src="/no-image.png"
                  alt=""
                  className="w-full h-[180px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-[10px]">2024/01/10</h3>
                <p>今日はFirebaseの勉強をしました。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
