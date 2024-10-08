import { FC } from "react"
import ArrowFwd from '@/assets/arrow-forward.svg'
import ArrowFwdHover from '@/assets/arrow-forward-hover.svg'
import projectList from '@/constant/projectList'
import Image from 'next/image'

const RecentWorks:FC = () => {
    return (
        <div className="pt-[160px] pl-[92px] pr-[80px]">
            <div className="grid grid-cols-3 font-neue-montreal">
                <h1 className="text-[40px]">Recent Works</h1>
                <div className="col-span-2">
                    {projectList.map((project, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 items-center">
                            <h1 className="col-span-2 text-[60px]">{project.name}</h1>
                            <div className="row-span-2 flex items-center justify-end">
                                <a className="relative flex items-center justify-center w-[85.25px] h-[85.25px] hover:bg-[#0B0C0E] border-2 rounded-full border-[#3C3D3E]" href={project.link}>
                                    <Image src={ArrowFwd} className="absolute" alt="arrow-forward"/>
                                    <Image src={ArrowFwdHover} className="absolute opacity-0 hover:opacity-100" alt="arrow-forward-hover"/>
                                </a>
                            </div>
                            <p className="col-span-2 text-[18px]">{project.roles.join(' - ')}</p>
                            <hr className="border-t-2 col-span-3"></hr>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    )
}

export default RecentWorks