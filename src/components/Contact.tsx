import {FC} from 'react'
import Profile from '@/assets/contact-profile.svg'
import Image from 'next/image'

const Contact:FC = () => {
    return (
        <>
            <div className='grid grid-cols-2 font-neue-montreal text-[27px] pt-[215px] pr-[85px] pl-[80px]'>
                <div className='flex flex-col'>
                    <div>
                        <Image src={Profile} alt='profile-pic' width={501}/>
                    </div>
                    <div>
                        <p className='text-[18px]'>Contact details</p>
                        <h2>ayush.barnwal@brightscout.com</h2>
                        <h2>+91 8651447521</h2>
                    </div>
                    <div>
                        <p className='text-[18px]'>Socials</p>
                        <h2>LinkedIn</h2>
                        <h2>Instagram</h2>
                        <h2>Twitter</h2>
                        <h2>Webflow</h2>
                        <h2>Figma</h2>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-[60px]'>Let’s build something cool together</h1>
                    <label className='text-[18px]'>Name</label>
                    <input type='text' placeholder='James Robert'></input>
                    <hr className="border-t-2"></hr>
                    <label className='text-[18px]'>Email</label>
                    <input type='text' placeholder='ayush.barnwal@brightscout.com'></input>
                    <label className='text-[18px]'>Subject</label>
                    <hr className="border-t-2"></hr>
                    <input type='text' placeholder='For web design work Enquire'></input>
                    <label className='text-[18px]'>Message</label>
                    <input type='text' placeholder='Type your Message'></input>
                    <hr className="border-t-2"></hr>
                </div>
            </div>
        </>
    )
}

export default Contact