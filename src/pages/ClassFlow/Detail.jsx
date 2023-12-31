/* eslint-disable no-mixed-spaces-and-tabs */
// Internal Libraries
import { useCallback, useEffect, useState } from "react";
import app from "@/lib/axiosConfig";
// External Libraries
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowLeftIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { FaStar } from "react-icons/fa";

// Utilities
import { BASE_URL } from "@/lib/baseUrl";
import onboarding from "@/assets/Onboarding.png";

// Core components
import ContentClass from "@/components/ClassPage/ContentClass";
import Drawer from "@/components/CoursePage/Drawer";
import ChapterLists from "@/components/ClassPage/ChapterLists";
import Button from "@/components/UI/Button";
import ChapterDetails from "@/components/ClassPage/ChapterDetails";
import Modals from "@/components/CoursePage/Modals";

const ClassDetails = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);
  const [selectedChapterContent, setSelectedChapterContent] = useState(null);
  const [openRate, setOpenRate] = useState(false);
  const [details, setDetails] = useState();
  console.log(details);
  const [isRefetch, setIsReFetch] = useState(true);
  const [rateCourse, setRateCourse] = useState(0);
  const [open, setOpen] = useState();
  const [searchParams] = useSearchParams();
  const [openOnBoarding, setOpenOnBoarding] = useState(
    searchParams.get("onBoarding") || false
  );
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { code } = useParams();
  const navigate = useNavigate();

  const getDetailClass = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/course/` + code);

      const data = response.data.data;
      if (response.status == 200 && response.data.error === false) {
        setDetails(data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsReFetch(false);
    }
  }, [code]);

  useEffect(() => {
    if (isRefetch) {
      getDetailClass();
    } else {
      return;
    }
  }, [code, isRefetch, getDetailClass]);

  // Chapter

  const handleDone = async (topic) => {
    try {
      const response = await axios.post(
        `${BASE_URL}user/detailchapter/setdone/${details.code}/${topic}`
      );
      if (response.status === 200) {
        toast.success(response.data);
        await getDetailClass();
      }
      return;
    } catch (error) {
      toast.error(error.response.data.error);
      return;
    }
  };

  const handleTopicClick = (topic) => {
    setCurrentTopic(topic);

    const clickedChapter = details.chapters.find((chapter) =>
      chapter.detailChapters.some((detailChapter) => detailChapter.id === topic)
    );
    console.log(topic);

    if (clickedChapter) {
      const selectedDetail = clickedChapter.detailChapters.find(
        (detailChapter) => detailChapter.id === topic
      );
      setSelectedChapterContent([selectedDetail]);
    }
    handleDone(topic);
  };

  // Buy Course
  const handleCloseModal = () => {
    searchParams.delete("onBoarding");
    setOpen(false);
    setOpenOnBoarding(false);
  };

  const freeEnroll = async () => {
    try {
      const response = await app.post(`/course/enroll/${details.code}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.href = `/detail/${details.code}?onBoarding=true`;
        }, 1500);
      }
      return;
    } catch (error) {
      toast.error(error.response.data.message);
      return;
    }
  };

  const handleBuyCourse = () => {
    details.type === "PREMIUM"
      ? navigate(`/payment-pending/${details?.code}`)
      : freeEnroll();
  };

  // Add Rating
  const handleRate = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/course/rating/${details.code}?rating=${rateCourse}`
      );
      if (response.status === 200 && response.data.error === false) {
        toast.success(response.data.message);
        setIsReFetch(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      handleCloseRateModal();
    }
  };

  const handleCloseRateModal = () => {
    setOpenRate(false);
  };

  const handleClick = (value) => {
    setCurrentValue(value);
    setRateCourse(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  function handleTelegram() {
    window.open("https://t.me/+1JrPpQMZbaQzOWM1", "_blank", "noreferrer");
  }

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
                        <button onClick={() => setOpenRate(!openRate)}>
                          <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
                          <p>
                            {details?.rating ? details?.rating?.toFixed(1) : 0}
                          </p>
                        </button>
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
                    <div className="flex gap-4">
                      <Button
                        icon={<ChatBubbleLeftRightIcon className="h-6 w-6" />}
                        iconPosition="right"
                        size="md"
                        className="text-white my-5 w-full !bg-alert-success hover:!bg-purple-800 text-xs font-normal sm:text-lg sm:text-semibold sm:w-fit"
                        onClick={handleTelegram}
                      >
                        Join Grup Telegram
                      </Button>
                      <Button
                        onClick={() => {
                          setOpen(true);
                        }}
                        icon={<CurrencyDollarIcon className="h-6 w-6" />}
                        iconPosition="right"
                        size="md"
                        className="text-white my-5 w-full text-xs font-normal sm:text-lg sm:text-semibold sm:w-fit"
                      >
                        Beli Kelas
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
      <Drawer
        isOpen={isChapterDrawerOpen}
        onClose={() => setIsChapterDrawerOpen(!isChapterDrawerOpen)}
      >
        <ChapterLists details={details} handleTopicClick={handleTopicClick} />
      </Drawer>

      {/* Rating modal */}
      <Modals isOpen={openRate} onClose={handleCloseRateModal}>
        <div className="flex flex-col items-center">
          <h2 className="my-2 font-semibold">Rating Kelas</h2>
          <div className="flex flex-row">
            <FaStar
              size={30}
              onClick={() => handleClick(1)}
              onMouseOver={() => handleMouseOver(1)}
              value={rateCourse}
              onChange={(e) => setRateCourse(e.target.value)}
              className={`mr-3 cursor-pointer ${
                (hoverValue || currentValue) >= 1
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            />
            <FaStar
              size={30}
              onClick={() => handleClick(2)}
              onMouseOver={() => handleMouseOver(2)}
              value={rateCourse}
              onChange={(e) => setRateCourse(e.target.value)}
              className={`mr-3 cursor-pointer ${
                (hoverValue || currentValue) >= 2
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            />
            <FaStar
              size={30}
              onClick={() => handleClick(3)}
              onMouseOver={() => handleMouseOver(3)}
              value={rateCourse}
              onChange={(e) => setRateCourse(e.target.value)}
              className={`mr-3 cursor-pointer ${
                (hoverValue || currentValue) >= 3
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            />
            <FaStar
              size={30}
              onClick={() => handleClick(4)}
              onMouseOver={() => handleMouseOver(4)}
              value={rateCourse}
              onChange={(e) => setRateCourse(e.target.value)}
              className={`mr-3 cursor-pointer ${
                (hoverValue || currentValue) >= 4
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            />
            <FaStar
              size={30}
              onClick={() => handleClick(5)}
              onMouseOver={() => handleMouseOver(5)}
              value={rateCourse}
              onChange={(e) => setRateCourse(e.target.value)}
              className={`cursor-pointer ${
                (hoverValue || currentValue) >= 5
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            />
          </div>
          <button
            onClick={handleRate}
            className="text-white bg-darkblue-05 px-16 py-2 mt-3 flex gap-4 items-center hover:bg-purple-900 rounded-full hover:cursor-pointer transition-all duration-300"
          >
            Simpan Rating
          </button>
        </div>
      </Modals>

      {/* Buy Course Modal */}
      <Modals isOpen={open} onClose={() => setOpen(!open)}>
        <div className="text-center">
          <div className="mx-auto w-48">
            <div className="flex">
              <h3 className="text-lg font-bold mb-4">
                Selangkah Lagi menuju
                <br />
                <span className="text-darkblue-05">Kelas Premium</span>
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl">
            <img
              className="object-cover h-40 w-full"
              src={`${details?.image}`}
              alt=""
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h5 className="text-darkblue-05 text-sm font-semibold">
                  {details?.category}
                </h5>
                <span className="flex">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <p className="text-sm">
                    {details?.rating ? details?.rating?.toFixed(1) : 0}
                  </p>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="font-semibold mt-1">{details?.name}</h5>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">by {details?.lecturer}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Code: {details?.code}</p>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex my-2 gap-1">
                  <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                  <p>{details?.level} Level</p>
                </span>
                <span className="flex my-2 gap-1">
                  <RectangleStackIcon className="h-5 w-5 text-green-500" />
                  <p>10 Modul</p>
                </span>
                <span className="flex my-2 gap-1">
                  <ClockIcon className="h-5 w-5 text-green-500" />
                  <p>120 Menit</p>
                </span>
              </div>
              <Button
                className="!bg-darkblue-03 whitespace-nowrap"
                icon={<CurrencyDollarIcon className="h-5 w-5" />}
                iconPosition="left"
                size="sm"
              >
                {details?.price}
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4 mt-4">
            <button
              className="text-white bg-darkblue-05 h-10 px-8 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
              onClick={handleBuyCourse}
            >
              Beli Sekarang
              <ArrowRightCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Modals>

      {/* On Boarding Modals */}

      <Modals isOpen={openOnBoarding} onClose={handleCloseModal}>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-bold mb-4">Onboarding</h3>
          </div>
          <img
            src={onboarding}
            className="object-cover hover:scale-105 transition-all duration-300 mx-auto"
          />
          <div>
            <p className="font-semibold my-5">Selamat Belajar</p>
            <p>
              Persiapkan semua tools yang disarankan agar bisa belajar dengan
              maksimal
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4 mt-5">
            <button
              onClick={handleCloseModal}
              className="text-white bg-darkblue-05 h-10 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
            >
              Ikuti Kelas
            </button>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default ClassDetails;
