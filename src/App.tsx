import { Moon } from "lucide-react";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Card } from "./components/cards";
import { useEffect, useState } from "react";

interface dataProps{
  title:string,
  population:string,
  region:string,
  capital:string
}

export function App() {
  const [coutryData, setCountryData] = useState([])
 
  useEffect (()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then((data)=>{
      setCountryData(data)
      coutryData.map((data)=>{
        console.log(data)
      })
    })
  },[coutryData])
  return (
    <div className="bg-slate-900 h-screen">
      <Header
        title="Where in the world"
        icon={Moon}
        modeTipe="Dark Modesss"
      />
      <Search/>
      <div className="grid grid-cols-4 px-7 gap-12">
        {
          coutryData.map((data) =>{
            return(
              <Card
              key={data.name.common}
              image={data.flags.svg}
              title={data.name.common}
              population={data.population}
              region={data.region}
              capital={data.capital}
              />
            )
          })
        }
      </div>
    </div>
  )
}
