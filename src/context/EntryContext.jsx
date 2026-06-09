import { createContext , useState, useContext} from "react";

const EntryContext= createContext();

export default function EntryProvider({ children }) {
  const allEntrys = JSON.parse(localStorage.getItem('allentrys')) || [];
  const [entrys, setEntrys] = useState(allEntrys);

  const addEntry = (entry) => {
    //add to local storage and update set entry from storage

    const dateMatch=entrys.some((x) => x.date===entry.date);
    if(!dateMatch){
    const updatedEntrys = [entry,...entrys];

    localStorage.setItem('allentrys', JSON.stringify(updatedEntrys));

    setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
    }else{
        alert("You already have entry for the day. Select other day");
    }
  };

  

  return (
    <EntryContext.Provider value={{entrys, addEntry}}>
      {children}
    </EntryContext.Provider>
  );
}

export function useEntry() {
  return useContext(EntryContext);
}