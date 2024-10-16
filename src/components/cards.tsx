interface CardProps{
    image: string,
    title: string,
    population: string,
    region: string,
    capital: string
}
export function Card( {image, title, population, region, capital}:CardProps){
    return(        
        <div className="w-96 h-auto shadow-md bg-slate-800">
            <img src={image} alt="" className="w-screen h-96"/>
            <div className="px-4 py-4">
                <h1 className="text-white">{title}</h1>
                <p className="text-white text-sm-2">population:<span className="text-slate-400">{population}</span></p>
                <p className="text-white text-sm-2">region:<span className="text-slate-400">{region}</span></p>
                <p className="text-white text-sm-2">capital:<span className="text-slate-400">{capital}</span></p> 
            </div>

        </div>
    )
}  