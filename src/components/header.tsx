import { ElementType } from "react";

interface HeaderProps{
    title:string,
    modeTipe:string,
    icon:ElementType
}

export function Header( { title, modeTipe, icon:Icon }: HeaderProps){
    return(
        <div className="shadow-xl bg-slate-800 flex items-center justify-between py-7 px-12 fixed w-screen">
            <h1 className="font-extrabold text-white">{title}</h1>
            <button className="flex items-center gap-2">
                {<Icon className="text-white"/>}
                <p className="text-white">{modeTipe}</p>
            </button>
        </div>
    )
}