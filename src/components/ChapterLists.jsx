import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import toast from "react-hot-toast";

const ChapterLists = ({ details, handleTopicClick }) => {
  const [done, setDone] = useState();

  const setDoneChapter = async () => {
    try {
      const response = await app.post(
        `/user/detailchapter/setdone/${details.code}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
      if (response.status === "Success") {
        toast.success(response.message);
        setTimeout(() => {
          window.location.href = `/detail/${details.code}`;
        }, 1500);
      }
      return;
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  };

  // const handleSetDone = () => {
  //   details.chapters.map(({ detailChapters }) => (
  //     detailChapters.isDone === false

  //   )
  // };

  return (
    <>
      <div className="flex md:flex-col lg:flex-row items-center justify-center gap-2 mt-8 sm:mt-0">
        <div className="flex justify-between w-1/2 items-center">
          <h1 className="font-bold text-lg whitespace-nowrap">
            Materi Belajar
          </h1>
          <CheckBadgeIcon className="w-4 h-4 text-alert-success" />
        </div>
        <div className="relative w-full lg:w-1/2">
          <label
            className="z-10 left-2 top-[2px] absolute text-white text-xs"
            htmlFor="progress"
          >
            20% Progress
          </label>
          <progress
            className="rounded-full w-full"
            id="progress"
            value="20"
            max="100"
          ></progress>
        </div>
      </div>
      {details?.chapters.map(({ chapter, detailChapters }) => (
        <div key={chapter}>
          <div>
            <div className="flex justify-between w-full mt-5 mb-3">
              <p className="text-darkblue-05 font-bold ">{chapter}</p>
            </div>
            <ol>
              {detailChapters.map(({ id, name, isDone }, index) => (
                <li
                  key={id}
                  className="my-2 flex justify-between items-center hover:bg-gray-200 hover:cursor-pointer rounded-xl"
                  onClick={() => handleTopicClick(id)}
                >
                  <div className="flex gap-3 items-center">
                    <span className="p-4 ml-2 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                      {index + 1}
                    </span>
                    <div>
                      <p>{name}</p>
                    </div>
                  </div>
                  <button>
                    <PlayCircleIcon
                      className={`text-${
                        isDone ? "alert-success" : "darkblue-05"
                      } w-10 h-full mr-1 hover:bg-slate-500`}
                      onClick={() => handleSetDone(id)}
                    />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChapterLists;
