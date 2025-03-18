import Hero1 from "./components/Hero1";
import HomeSection2 from "./components/HomeSection2";
import HomeSection4 from "./components/HomeSection4";
import HomeSection5 from "./components/HomeSection5";
import HomeSection6 from "./components/review/ReviewSection";
import Partners from "./components/patners";
const Home = () => (
  <div className='bg-[#F1F1F1] pt-0 lg:pt-16'>
    <div
      // style={{
      //   backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2081/cb2c/ccce101787826cdda8d46132546dd1e0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQKM4-CA5EVJeZocRtRVAyvN7O2Y-t2C7JPRQk1-4r1WbQub-TYA-SLjUbZ57gWhtOc20AdBK0-BbdjtXx5i8R~EhxAL98Vti3-zWyj2a5nfyJmYf6QsHQr3iZ8Q9S5EJ~hCaNHJxm7Mdttt94O4YBB2xLAsxURVMTOhc0ht~ocfjaHbYBvgXli2LWPBhDvlskReyzql~l~oYI73UMLHFEDDZeWMRBOpGnffGQUnW0FOKpJqnpXsff~2zA2RRVAIfZMF5o8t9ErfBchc2b1KidNH5KMj2~Bru~XTBefslcgdQp2fkSAop~NLRjDFg7lb7u1X77aV7s4tjsJQ5jd9bw__')",
      //   backgroundSize: '100% 45%',
      //   backgroundRepeat: 'no-repeat',
      // }}

    >
      <Hero1/>
      <HomeSection2/>
      {/* <HomeSection3/> */}
      <Partners/>
      <HomeSection4/>
      <HomeSection6/>
      <HomeSection5/>
      {/* <HomeSection7/> */}

    </div>
  </div>
);

export default Home;