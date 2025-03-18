{/* <section id='sec-clients' className='relative'>
<div className='layout flex flex-col items-center justify-center space-y-5 py-14 lg:py-0'>
  <h2 className='heading'>
    What are
    <span className='fancy'>Clientsss</span>
    Says?
  </h2>
  <p className='h3'>
    This is not just a peice of our work, these are the different
    shades of our creativety.
  </p>
</div>
<div className='layout flex flex-col gap-4 py-5 pb-10 text-lg'>
  <Carousel
    cols={3}
    rows={1}
    gap={30}
    autoplay={2500}
    dotColorActive='#f97316'
    showDots
    loop
    arrowRight={
      <RiArrowRightSLine
        size={40}
        className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-base-content/10 text-primary-base'
      />
    }
    arrowLeft={
      <RiArrowLeftSLine
        size={40}
        className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-base-content/10 text-primary-base'
      />
    }
  >
    {clientsays.map((client) => (
      <Carousel.Item key={client.by}>
        <TestimonialCard {...client} />
      </Carousel.Item>
    ))}
  </Carousel>
</div>
</section>

// ``````````````````````````````````````````````````````````````

"use client";
import NextImage from '@/components/NextImage';

import { ClientSayIn } from '@/constant/clientsays';

export default function TestimonialCard({ title, description, img }: ClientSayIn) {
  return (
    <div className='border-bse-content/30 relative mt-0 h-full flex-1 space-y-4 rounded-xl border bg-base-100/80 p-6 backdrop-blur'>
      <NextImage
        src={img ?? '/images/testimonials/Fredrick Omoke.jpeg'}
        alt='image'
        className='flex w-full justify-center'
        width={300}
        height={70}
        imgClassName='rounded-3xl'
      />
      <h3 className='h2 fancy mb-3 h-fit'>{title}</h3>
      <p className='h5 h-fit text-justify'>{description}</p>
    </div>
  );
}

// ```````````````````````````````````````````````````````````````````````````````````````
const clientsays = [
    {
      id: 0,
      img: '/images/Tesimonials/FredrickOmoke.png',
      title: 'Fredrick Omoke',
      description:
        `Choosing AxStudios for our web3 project was the best decision we made. Their deep understanding of blockchain technology and commitment to staying ahead of the curve ensured a seamless and secure implementation. We couldn't be happier with the outcome.`,
      by: 'Fredrick Omoke (founder hederalpha ) ',
    },
    {
      id: 1,
      img: '/images/Tesimonials/MackenzieWilliams.png',
      title: 'Mackenzie Williams ',
      description:
        "AxStudios doesn't just deliver software; they deliver peace of mind. Their team's professionalism and expertise shone through every phase of our project, from initial concept to final deployment. We're grateful for their unwavering support and dedication.",
      by: 'Mackenzie Williams (founder MJweb)',
    },
    {
      id: 2,
      img: '/images/Tesimonials/kunalkushwaha.png',
      title: 'Kunal kushwaha',
      description:
        'Choosing AxStudios to spearhead our open-source project was a game-changer for our community. Their passion for innovation and commitment to giving back to the community translated into tangible results.',
      by: 'Kunal kushwaha - founder wemakedevs',
    },
    {
      id: 3,
      img: '/images/Tesimonials/DevinZhang.png',
      title: 'Devin Zhang',
      description:
        "Working with AxStudios was a game-changer for our business. Their commitment to delivering high-quality SaaS solutions on time and within budget is commendable. We're thrilled with the results and look forward to future collaborations.",
      by: 'Devin Zhang (Founder Tweeteasy)',
    },
  ];
  
  export default clientsays;
  export type ClientSayIn = (typeof clientsays)[number];
   */}