import "../../App.css";
import icon1 from "/images/icon_1.png";
import icon2 from "/images/icon_2.png";
import icon3 from "/images/icon_3.png";
import icon4 from "/images/icon_4.png";
import icon5 from "/images/icon_4.png"; // Add new icon as needed

const HomeSection4 = () => {
  return (
    <section className="h-auto lg:h-[651px] w-full">
      <div className="flex flex-col justify-center px-4 lg:px-12 lg:mt-12 lg:py-0 py-12">
        <div className="flex flex-col lg:flex-row justify-between lg:w-full py-6">
          <h1 className="text-[26px] lg:text-[45px] font-bold font-sans lg:w-[50%]">
            Our Strategic Approach
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:w-[50%] lg:mt-6">
            <div className="hidden lg:block w-[3px] h-[90px] bg-blue-500 lg:mr-4"></div>
            <p className="text-[10px] lg:text-[18px] text-[#5B5B5B] font-sans lg:w-[90%]">
              At Visionary-Staffing Services, our structured approach to staffing and client satisfaction follows these key steps:
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row mx-4 justify-around items-center lg:items-start lg:mt-24 lg:gap-16">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5 w-full">
            <img src={icon1} alt="icon" className="w-[100px] h-[100px]" />
            <h1 className="text-blue-500 tracking-[.40em] mt-4 lg:mt-6 text-center lg:text-left w-full">
              Step 1
            </h1>
            <h1 className="my-2 text-[20px] lg:text-[15px] text-center lg:text-left w-full">
              Appropriate Databank of Good Candidates
            </h1>
            <p className="text-[#838280] text-[15px] lg:text-[12px] text-center lg:text-left w-full">
              A curated list of highly qualified candidates to match diverse requirements.
            </p>
          </div>

          {/* Divider */}
          <div className="w-[3px] h-[30px] lg:w-[120px] lg:h-1 bg-black my-8 lg:my-14 self-center"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5 w-full">
            <img src={icon2} alt="icon" className="w-[100px] h-[100px]" />
            <h1 className="text-blue-500 tracking-[.40em] mt-4 lg:mt-6 text-center lg:text-left w-full">
              Step 2
            </h1>
            <h1 className="my-2 text-[20px]g:text-[15px] l text-center lg:text-left w-full">
              Test, Examination & Interviews
            </h1>
            <p className="text-[#838280] text-[15px] lg:text-[12px] text-center lg:text-left w-full">
              Rigorous assessments to select the right candidates for the role.
            </p>
          </div>

          {/* Divider */}
          <div className="w-[3px] h-[30px] lg:w-[120px] lg:h-1 bg-black my-8 lg:my-14 self-center"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5 w-full">
            <img src={icon3} alt="icon" className="w-[100px] h-[100px]" />
            <h1 className="text-blue-500 tracking-[.40em] mt-4 lg:mt-6 text-center lg:text-left w-full">
              Step 3
            </h1>
            <h1 className="my-2 text-[20px] lg:text-[15px] text-center lg:text-left w-full">
              Document Processing
            </h1>
            <p className="text-[#838280] text-[15px] lg:text-[12px] text-center lg:text-left w-full">
              Streamlined document handling to expedite onboarding and compliance.
            </p>
          </div>

          {/* Divider */}
          <div className="w-[3px] h-[30px] lg:w-[120px] lg:h-1 bg-black my-8 lg:my-14 self-center"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5 w-full">
            <img src={icon4} alt="icon" className="w-[100px] h-[100px]" />
            <h1 className="text-blue-500 tracking-[.40em] mt-4 lg:mt-6 text-center lg:text-left w-full">
              Step 4
            </h1>
            <h1 className="my-2 text-[20px] lg:text-[15px] text-center lg:text-left w-full">
              Timely Deployment
            </h1>
            <p className="text-[#838280] text-[15px] lg:text-[12px] text-center lg:text-left w-full">
              Ensuring candidates are deployed efficiently to meet project timelines.
            </p>
          </div>

          {/* Divider */}
          <div className="w-[3px] h-[30px] lg:w-[120px] lg:h-1 bg-black my-8 lg:my-14 self-center"></div>

          {/* Step 5 */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/5 w-full">
            <img src={icon1} alt="icon" className="w-[100px] h-[100px]" />
            <h1 className="text-blue-500 tracking-[.40em] mt-4 lg:mt-6 text-center lg:text-left w-full">
              Step 5
            </h1>
            <h1 className="my-2 text-[20px] lg:text-[15px] text-center lg:text-left w-full">
              Feedback & Future Improvements
            </h1>
            <p className="text-[#838280] text-[15px] lg:text-[12px] text-center lg:text-left w-full">
              Gathering feedback to continuously enhance our service quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
