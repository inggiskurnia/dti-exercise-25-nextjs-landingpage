import { FC } from "react"

const Header:FC = () => {
    return (
        <>
            <header className="pt-[26px] pr-[80px] pl-[80px]">
                <nav className="flex justify-between items-center font-neue-montreal text-[18px]">
                    <span>@Ayush Barnwal</span>
                    <div className="flex gap-x-[40px]">
                        <a>About</a>
                        <a>Work</a>
                        <a href="./">Contact</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header