// Internal Libraries
import { useCallback, useEffect, useState } from "react";
// External Libraries
import {
  StarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowLeftIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

// Utilities
import { BASE_URL } from "@/lib/baseUrl";

// Core components
import ContentClass from "@/components/ClassPage/ContentClass";
import Drawer from "@/components/CoursePage/Drawer";
import ChapterLists from "@/components/ClassPage/ChapterLists";
import Button from "@/components/UI/Button";
import ChapterDetails from "@/components/ClassPage/ChapterDetails";
import Modals from "@/components/CoursePage/Modals";
import Input from "@/components/UI/Input";

const Details = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);
  const [selectedChapterContent, setSelectedChapterContent] = useState(null);
  const [openRate, setOpenRate] = useState(false);
  const [details, setDetails] = useState();
  const [isRefetch, setIsReFetch] = useState(true);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const { code } = useParams();
  const navigate = useNavigate();

  const handleCloseRateModal = () => {
    setOpenRate(false);
  };
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
      console.log(details);
      setIsReFetch(false);
    }
  }, [code, details]);

  useEffect(() => {
    if (isRefetch) {
      return () => getDetailClass();
    } else {
      return;
    }
  }, [code, isRefetch, getDetailClass]);

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

    if (clickedChapter) {
      const selectedDetail = clickedChapter.detailChapters.find(
        (detailChapter) => detailChapter.id === topic
      );
      setSelectedChapterContent([selectedDetail]);
    }
    handleDone(topic);
  };

  const handleRate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/course/rating/${details.code}?rating=${rating}`
      );
      if (response.status === 200 && response.error === false) {
        toast.success(response.data);
        console.log(response);
      } else {
        toast.error("Kamu masih salah!");
        console.log(response);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      handleCloseRateModal();
    }
  };

  const freeEnroll = async () => {
    try {
      const response = await app.post(`/course/enroll/${details?.code}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
      if (response.status === 200) {
        toast.success(response.message);
        setTimeout(() => {
          window.location.href = "/my-class";
        }, 1500);
      }
      console.log(response);
      return;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      return;
    }
  };

  const handleBuyCourse = () => {
    details.type === "PREMIUM"
      ? navigate(`/payment-pending/${details?.code}`)
      : freeEnroll();
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
                        <button onClick={() => setOpenRate(!openRate)}>
                          <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
                          <p>{details?.rating}</p>
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
                    <div className="flex gap-5">
                      <Button
                        icon={<ChatBubbleLeftRightIcon className="h-6 w-6" />}
                        iconPosition="right"
                        size="md"
                        className="text-white my-5 w-full !bg-alert-success hover:!bg-purple-800 text-xs font-normal sm:text-lg sm:text-semibold sm:w-fit"
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
      <Modals isOpen={openRate} onClose={() => setOpenRate(false)}>
        <form onClick={handleRate}>
          <Input
            placeholder="Berikan rating..."
            type="number"
            label="Masukkan rating kelas"
            value={rating}
            // setRating={setRating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-darkblue-05 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 rounded-full hover:cursor-pointer transition-all duration-300"
          >
            Simpan Rating
          </button>
        </form>
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
                  <p className="text-sm">{details?.rating}</p>
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
    </>
  );
};

export default Details;
