import { LucideSearch } from "lucide-react";

export function Search(){
    return(
        <div className="flex justify-between items-center px-7 pt-32 pb-14">
            <div className="bg-slate-800 flex items-center w-80 px-4 rounded-md gap-2">
                <LucideSearch className="text-white"/>
                <input type="search" placeholder="Search for a contry..." className="bg-slate-800 flex-1 placeholder-white h-full py-4 text-white outline-none"/>
            </div>
            <select name="" id="" >
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
      </div>
    )
}