import { useState} from "react";
import { useEntry } from "../context/EntryContext";
import ShowEntry from "./ShowEntry";

const HomePage = () => {
    const {entrys}=useEntry();
    //const [isModalOpen, setIsModalOpen] = useState(false);
    //const [image, setIsModalOpen] = useState(false);

    return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <h2 className="text-2xl font-bold text-center mb-6">
        Diary Entry to display
      </h2>
      
      {entrys && (
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
          {entrys.map((p) => (
           //console.log("P:",p),
            <div
              key={p.date}
              className="bg-brown p-4 rounded shadow text-center capitalize hover:shadow-md transition-shadow"
              
            >
              <span className="flex flex-col items-center font-semibold text-yellow-700">Title:{p.title}, Date: {p.date}  
             {<img src={ p.imgUrl} />} </span>
            
            <br/>
            <ShowEntry entry={p}/>

            </div>
            
            
          ))}
        </section>
      )}
    </main>
  )
};

export default HomePage;