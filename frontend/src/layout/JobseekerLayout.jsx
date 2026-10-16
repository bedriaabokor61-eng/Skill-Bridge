import SideBar from "../components/SideBar";
import { FaFolderPlus } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoMdCog } from "react-icons/io";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";

const JobseekerLayout = () => {

     const jobseekerLinks = [
            {
                name: "Dashboard",
                path: "/job-seeker",
                icon: <FaFolderPlus />
            },
            {
                name: "Application",
                path: "/job-seeker/applications",
                icon: <FaFolderPlus />
            },
            {
                name: "myskills",
                path: "/job-seeker/myskills",
                icon: <GiSkills />
            },
            {
                name: "Settings",
                path: "/job-seeker/settings",
                icon: <IoMdCog />
            }
        ];
    return ( 
        <div>
            <div className="d-flex">
                <div >
                    <SideBar links={jobseekerLinks} title="job-seekerDashboard" />
                </div>
                <div className="flex-row">
                    <div
                     className="car border-0 shadow">
                        <DashboardNavBar />

                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JobseekerLayout;