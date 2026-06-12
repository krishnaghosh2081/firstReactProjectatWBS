import { useState } from "react";
import { useEntry } from "../context/EntryContext";

const initialState = { title: '',
    date: '',
    imgUrl: '',
    content: '', };

const HeaderForm = () => {
    const {addEntry}=useEntry();
    const [form, setForm] = useState(initialState);
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


    const handleSubmit = (e) => {
       
    e.preventDefault();
    const button = e.target.elements.submit; 
    button.disabled=true;
    button.className="w-[100px] py-2 bg-gray-400 text-white rounded";
    try{
        const title = form.title; 
        const date = form.date; 
        const imgUrl = form.imgUrl; 
        const content = form.content; 

    if(!title )throw new Error("Title should not be blank ");
    if(!date )throw new Error("Date should not be blank  ");
    if(!imgUrl )throw new Error("Image url should not be blank  ");
    if(!content )throw new Error("Content should not be blank ");
     
        const entry = { title: title,
    date: date,
    imgUrl: imgUrl,
    content: content, };

        addEntry(entry);
        setForm(initialState);
    setTimeout(()=>{button.disabled=false;
    button.className="w-[100px] py-2 bg-blue-800 text-white rounded hover:bg-pink-700";},3000); 
    
    }catch(error){
      alert(error);
      button.disabled=false;
      button.className="w-[100px] py-2 bg-blue-800 text-white rounded hover:bg-pink-700";
    }
        
        
    };

    return (
        
    <div className="bg-blue-200 p-6   mx-auto">
      <h3 className="text-xl font-bold">Entry Form</h3>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" border-2 p-4 rounded-sm"
        >
        <label className="block text-sm font-medium text-gray-700">
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Date
          <input
            name="date"
            value={form.date}
            type="date"
            onChange={handleChange}
            // max={today}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          ImageUrl
          <input
            name="imgUrl"
            value={form.imgUrl}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Content
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>
        <br/>
        <div className="flex w-full justify-items-end">
          <button name="submit"
            type="submit"
            className="w-[100px] py-2 bg-blue-800 text-white rounded hover:bg-pink-700"
          >
            Submit form
          </button>
        </div>
        
        </form>
      </div>
      </div>
    );
};

export default HeaderForm;