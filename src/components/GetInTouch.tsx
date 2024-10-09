import {FC} from 'react'
import profile from '@/assets/footer-profile.svg'
import Image from 'next/image'

const GetInTouch:FC = () => {
    return (
        <div className='mt-[141px] bg-black font-neue-montreal text-white pt-[80px] pr-[88px] pl-[80px] pb-[48px]'>
            <div className='grid grid-cols-3 grid-flow-row items-center'>
                <h1 className='text-[60px] col-span-2'>Have something in mind?</h1>
                <div className='justify-self-end row-span-2 flex items-center justify-center rounded-[170px] w-[190px] h-[70px] bg-white'>
                    <h2 className='text-[18px] text-black'>Get in touch</h2>
                </div>
                <div className='flex col-span-2'>
                    <div>
                        <Image src={profile} alt='profile-pic'/>
                    </div>
                    <h1 className='text-[60px] ml-[12px]'>let&aposs build it together</h1>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch