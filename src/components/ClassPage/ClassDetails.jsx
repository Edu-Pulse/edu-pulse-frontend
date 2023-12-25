import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowLeftIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ContentClass from "./ContentClass";
import { useState } from "react";
import Drawer from "@/components/CoursePage/Drawer";
import ChapterLists from "./ChapterLists";
import Button from "../UI/Button";
import ChapterDetails from "./ChapterDetails";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";

const ClassDetails = ({ details }) => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);
  const [selectedChapterContent, setSelectedChapterContent] = useState(null);

  const handleCloseDrawer = () => {
    setIsChapterDrawerOpen(false);
  };

  const handleDone = async (topic) => {
    try {
      const response = await axios.post(
        `${BASE_URL}user/detailchapter/setdone/${topic}`
      );
      if (response.status === 200) {
        toast.success(response.data);
      }
      return;
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  };

  const handleTopicClick = (topic) => {
    setCurrentTopic(topic);

    const clickedChapter = details.chapters.find((chapter) =>
      chapter.detailChapters.some((detailChapter) => detailChapter.id === topic)
    );
    console.log(topic);
    console.log(clickedChapter);
    if (clickedChapter) {
      const selectedDetail = clickedChapter.detailChapters.find(
        (detailChapter) => detailChapter.id === topic
      );
      console.log(selectedDetail);
      setSelectedChapterContent(selectedDetail[0]);
    }
    handleDone(topic);
  };

  return (
    <>
      <section className="sm:mt-16 container">
        <div className="w-full mt-1">
          <div>
            <div className="font-semibold text-xl flex items-center py-10">
              <Link
                to="/"
                className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <p>Kelas Lainnya</p>
              </Link>
            </div>
          </div>
          <div className="gap-12 grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-3">
              <div className="w-full">
                <div>
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between">
                      <h5 className="text-darkblue-05 font-bold pb-1 text-xl">
                        {details?.category}
                      </h5>
                      <span className="flex">
                        <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
                        <p>{details?.rating.toFixed(1)}</p>
                      </span>
                    </div>
                    <h5 className="font-bold pb-1 text-xl">{details?.name}</h5>
                    <p>by {details?.lecturer}</p>
                    <div className="flex gap-6">
                      <span className="flex my-2 gap-1">
                        <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
                        <p className="text-darkblue-05">
                          {details?.level} Level
                        </p>
                      </span>
                      <span className="flex my-2 gap-1">
                        <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
                        <p>{details?.totalMaterial} Modul</p>
                      </span>
                      <span className="flex my-2 gap-1">
                        <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
                        <p>120 Menit</p>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        icon={<ChatBubbleLeftRightIcon className="h-6 w-6" />}
                        iconPosition="right"
                        size="md"
                        className="text-white my-5 w-full !bg-alert-success hover:!bg-darkblue-05 text-xs font-normal sm:text-lg sm:text-semibold sm:w-fit"
                      >
                        Join Grup Telegram
                      </Button>
                      <Button
                        icon={<QueueListIcon className="h-6 w-6" />}
                        iconPosition="right"
                        size="md"
                        onClick={() =>
                          setIsChapterDrawerOpen(!isChapterDrawerOpen)
                        }
                        className="text-white my-5 w-full text-xs font-normal sm:text-lg sm:text-semibold sm:hidden"
                      >
                        Chapter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {!currentTopic ? (
                <ContentClass details={details} />
              ) : (
                <ChapterDetails
                  selectedChapterContent={selectedChapterContent}
                />
              )}
            </div>
            <div className="md:col-span-2 mb-8 w-full">
              <div className="hidden sm:block bg-white py-4 px-2 rounded-2xl shadow-2xl h-fit">
                <ChapterLists
                  details={details}
                  handleTopicClick={handleTopicClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Drawer isOpen={isChapterDrawerOpen} onClose={handleCloseDrawer}>
        <ChapterLists details={details} handleTopicClick={handleTopicClick} />
      </Drawer>
    </>
  );
};

export default ClassDetails;
