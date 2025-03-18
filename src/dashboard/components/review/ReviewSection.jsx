import { useInView } from "react-intersection-observer";
import ReviewCard from "./ReviewCard";

const HomeSection6 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Start animation when 10% of the section is in view
  });

  return (
    <section
      ref={ref}
      className={`h-auto lg:h-[830px] w-full bg-[#034B63] `}
    >
      <div className="flex flex-col mx-4 lg:mx-28">
        <div className="flex flex-col lg:flex-row justify-items-start justify-between lg:w-full pb-6 mt-10">
          <h1 className="text-[26px] lg:text-[45px] font-bold font-sans lg:w-[50%] text-white">
            Valuable feedbacks from <br /> our customers
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:w-[50%] lg:mt-6">
            <div className="hidden lg:block w-[3px] h-[80px] bg-blue-500 lg:mr-4"></div>
            <p className="text-[14px] lg:text-[18px] text-white font-sans lg:w-[90%] mt-4 lg:mt-0">
            A trusted staffing partner who consistently delivers top-tier talent.{" "}
            </p>
          </div>
        </div>
        <div>
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
