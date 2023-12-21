import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const ChapterLists = ({ details, handleTopicClick }) => {
  let percentage = (details?.doneMaterial / details?.totalMaterial) * 100;

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
            {percentage}% Progress
          </label>
          <progress
            className="rounded-full w-full"
            id="progress"
            value={percentage}
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
