import { FC } from 'react';
import pagesList1 from '@/constant/pagesList1';
import PagesList2 from '@/constant/pagesList2';
import Image from 'next/image';

const CarouselPage: FC = function() {
  return (
    <>
      <div className="mt-40 flex items-center relative overflow-hidden">
        <div className="flex animate-marqueeLeft space-x-10">
          {pagesList1.map((page, index) => (
            <div key={index} className="w-[444px] h-[306px] flex items-center justify-center bg-[#C7D0D9]">
              <Image src={page.path} alt={`Page ${index + 1}`} width={348} height={194} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center relative overflow-hidden">
        <div className='flex animate-marqueeRight space-x-10'>
            {PagesList2.map((page, index) => (
            <div key={index} className="w-[444px] h-[306px] flex items-center justify-center bg-[#C7D0D9]">
                <Image src={page.path} alt={`Page ${index + 1}`} width={348} height={194} />
            </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
