import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { FormEvent } from "react";

const Create = () => {
  const submitDiary = async (e: FormEvent) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  return (
    <main className="bg-yellow-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-start-3  col-span-8 bg-white my-12 p-4 rounded">
            <form onSubmit={submitDiary}>
              <h2 className="text-3xl font-bold mb-5">記事を書く✏️</h2>
              <div className="mb-10">
                <h3 className="text-2xl mb-2">サムネを選ぶ</h3>
                <div>
                  <div>
                    <img
                      src="/no-image.png"
                      alt=""
                      onClick={() =>
                        document.getElementById("file-input")?.click()
                      }
                      className="cursor-pointer"
                    />
                  </div>
                  <input type="file" id="file-input" className="hidden" />
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl mb-2">タイトル</h3>
                <input
                  type="text"
                  className="border border-black w-full p-2 rounded"
                  placeholder="5文字以内でお願いします。"
                />
              </div>
              <div className="mb-10">
                <h3 className="text-2xl mb-2">内容を書く</h3>
                <textarea
                  className="border border-black w-full p-2 rounded resize-none h-[200px]"
                  placeholder="30文字以内でお願いします。"
                ></textarea>
              </div>
              <button className="bg-blue-700 text-white py-2 px-7 rounded">
                投稿
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create;
