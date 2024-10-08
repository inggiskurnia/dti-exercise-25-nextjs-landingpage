import { FC } from "react"

const Header:FC = () => {
    return (
        <>
            <header className="pt-[26px] pr-[80px] pl-[80px]">
                <nav className="flex justify-between items-center font-neue-montreal">
                    <div>@Ayush Barnwal</div>
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