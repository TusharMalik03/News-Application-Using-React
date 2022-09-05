import React from 'react'
import { Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-black">
            <div className=" h-12 overflow-x-scroll md:overflow-hidden flex px-[2rem] items-center space-x-8 underline-offset-4 bg-[#735CDD] text-white">
                
                <div className="flex space-x-1">Select a Category:</div>

                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline"> 
                    <Link to="/business">Business</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="/entertainment">Entertainment</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="science">Science</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="sports">Sports</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="/general">General</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="/health">Health</Link>
                </div>
                <div className="flex space-x-1 hover:cursor-pointer hover:underline active:text-yellow-300 active:underline">
                    <Link to="/technology">Technology</Link>
                </div>
            </div>
            <hr className="bg-black"></hr>
        </div>
    )
}
