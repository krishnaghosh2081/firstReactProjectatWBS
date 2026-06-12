import AddEntry from "./AddEntry";

export default function Navbar() {
  
  return (
    <div className="bg-green-300 p-10 rounded-8px shadow   mx-auto text-blue-600 flex h-45px items-center justify-between">
      <span>Logo</span>
      <h2 className="text-2xl font-bold text-center mb-6">
        Daily Routine
      </h2>    
      <AddEntry/>
    </div>
  );
}