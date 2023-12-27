import Hero from "@/components/HomePage/Hero";
import StudyCategories from "@/components/HomePage/StudyCategories";
import KursusPopuler from "@/components/HomePage/KursusPopuler";
import WhyUs from "@/components/HomePage/WhyUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <StudyCategories />
      <KursusPopuler />
      <WhyUs />
    </main>
  );
};

export default Home;
