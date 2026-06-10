import { createContext , useState, useContext} from "react";

const EntryContext= createContext();

export default function EntryProvider({ children }) {
  const allEntrys = JSON.parse(localStorage.getItem('allentrys')) || [];
  const [entrys, setEntrys] = useState(allEntrys);

  const addEntry = (entry) => {
    const date=new Intl.DateTimeFormat("en-US").format(new Date());
    const entryDate=new Intl.DateTimeFormat("en-US").format(new Date(entry.date));

    console.log(date);
    console.log(entryDate);

    if(compareDates(entryDate,date)){
        alert("Future date entry not allowed!!");
    }else if(entrys.some((x) => x.date===entry.date)){
       alert("You already have entry for the day. Select other day");
    }else{
      const updatedEntrys = [entry,...entrys];
      localStorage.setItem('allentrys', JSON.stringify(updatedEntrys));
      setEntrys(JSON.parse(localStorage.getItem('allentrys')) || []);
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


const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  return date1>date2;
};