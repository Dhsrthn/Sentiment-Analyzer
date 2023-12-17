import {ResponseGraph} from "./../../components"
import Rating from '@mui/material/Rating';

const EmployeeDashboard = () => {
    return ( <div className="h-full w-full flex flex-col items-center">
        <div className="h-1/2 w-full mt-10 flex justify-around">
            <div className="h-[80%] w-2/5 flex flex-col item-center justify-between">
                <div className="h-[35%] w-[90%]  bg-white rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex">
                    <div className="w-1/3 h-full flex flex-col text-center">
                        <span className="h-1/6 mt-2 font-ubuntu font-normal">Admin</span>
                        <img src="/assets/main/defaultuser.svg" alt="" className="h-2/3 w-full"/>
                    </div>
                    <div className="w-2/3 flex flex-col justify-center">
                        <span className="text-4xl font-alumniSans font-bold">Samuel L.Richard</span>
                        <span>HR Manager</span>
                    </div>
                </div>
                <div className="w-[90%] h-[35%] rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] bg-white flex items-center justify-evenly flex-col">
                    <div className="font-josefinSans text-3xl font-semibold">Your Rating</div>
                    <Rating name="half-rating-read" precision={0.1} value={3.5} size="large" readOnly />
                </div>
            </div>
            <div className="h-4/5 w-2/5 bg-white/[0.5]">
                <ResponseGraph/>
            </div>
        </div>
    </div>);
}
 
export default EmployeeDashboard;