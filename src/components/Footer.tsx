import {FC} from 'react'

const Footer:FC = () => {
    return (
        <div className='pt-[80px] pr-[82px] pl-[79px] pb-[81px] bg-black font-neue-montreal text-white'>
            <div className='flex justify-between'>
                <h2>Build with 💖 by Brightscout & Ayush </h2>
                <div className='flex justify-between gap-[30px]'>
                    <h2>LinkedIn</h2>
                    <h2>Twitter</h2>
                    <h2>Instagram</h2>
                    <h2>Webflow</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer