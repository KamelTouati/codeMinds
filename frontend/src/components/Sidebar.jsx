import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { RiHome6Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from 'react-router-dom';


function Sidebar(props) {
    // const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const location = useLocation()
    let user = {
        firstName: 'AHmed',
        lastName: 'Samer ',
        email: 'ahmed@samer.com',
        password: 'ahmedsamer',
        profileImage: null,
        role: 'ADMIN',
        groupId: null,
        modules: [],
    }
    return (
    (user) ? (
        <div className="w-[20%] bg-[#F2F6FF] h-full flex flex-col gap-6 p-6">
            <Link href="/" className="py-4">
                UNILAB
            </Link>
            
            
            
            <div className="flex flex-col gap-4">
                <Link href="/" className={`flex flex-row gap-2 rounded-xl w-full xl:w-[80%] px-4 py-2 font-semibold text-lg ${(location.pathname=='/admin' || location.pathname=='/teacher' ||location.pathname=='/student'  ||location.pathname=='/maintenance' )? "bg-[#734AE5]/40":"bg-[#D9D9D9]/20" } `}>                
                    <RiHome6Line size={24}/>
                    <span>Home</span>
                </Link>
                {user.role==='ADMIN'?(<Link href="/dashboard" className="flex flex-row items-center gap-2 rounded-xl w-full xl:w-[80%] font-semibold text-lg px-4 py-2 bg-[#D9D9D9]/20">
                    <LuLayoutDashboard />                
                    <span>Dashboard</span>
                    <IoIosArrowForward />
                </Link>):null}
                <Link href="/announcements" className="flex flex-row gap-2 w-full xl:w-[80%] rounded-xl  px-4 py-2 bg-[#D9D9D9]/20">                
                    Announcements
                </Link>
                <Link href="/modules" className="flex flex-row gap-2 w-full xl:w-[80%] rounded-xl  px-4 py-2 bg-[#D9D9D9]/20">                
                    Modules
                </Link>

                <Link href="/profile" className="flex flex-row gap-2 w-full xl:w-[80%] rounded-xl  px-4 py-2 bg-[#D9D9D9]/20">                
                    Profile
                </Link>
                
                <Link href="/schedule" className="flex flex-row gap-2 rounded-xl w-full xl:w-[80%] px-4 py-2 bg-[#D9D9D9]/20">                
                    Schedule
                </Link>
            </div>


        </div>
    ):null
  )
}

export default Sidebar