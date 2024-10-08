import TestimonialList from "@/constant/testimonialList"
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className="pt-[140px] pr-[86px] pl-[92px]">
            <div className="grid grid-cols-3 font-neue-montreal">
                <h1 className="text-[40px]">Testimonials</h1>
                <div className="col-span-2 flex flex-col gap-[64px]">
                    {TestimonialList.map((testimonial, index) => (
                        <div key={index} className="flex flex-col gap-[28px]">
                            <h2 className="text-[27px]">{testimonial.review}</h2>
                            <div className="w-1/3 grid grid-rows-2 grid-flow-col items-center">
                                <Image src={testimonial.image} className="row-span-2" alt="testimonial" width={64} height={64}/>
                                <h3 className="col-span-2 text-[18px]">{testimonial.name}</h3>
                                <p className="col-span-2 text-[14px]">{testimonial.roles}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials