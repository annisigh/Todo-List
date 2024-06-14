"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    // This is inbuild method used to stay submit the form.
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    // console.log(mainTask);
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  //To show render data under the ul
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }} 
          className="bg-red-400 text-white px-4 py-2 rounded font-bold">
            Delete
            </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black  text-white border-2 font-bold text-center text-3xl px-6 py-4">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-200 border-2 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          //two way binding-- show user as well as react that what to do.
          onChange={(e) => {
            // console.log(e.target.value)
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-200 border-2 m-10 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-slate-400 text-pretty px-4 py-2 text-1xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-300 text-pretty px-4 py-2 text-2xl font-bold rounded m-5">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
