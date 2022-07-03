import React from "react";

function FilterComp({ filters, clearFilter, clearAll }) {
  return (
    <div className="bg-white z-50 relative bottom-10 flex items-center flex-wrap my-0 mx-auto w-[25rem] p-5 shadow-lg">
      {filters.map((tag, index) => {
        return (
          <div key={index} className="bg-teal-100 py-0 px-0 rounded-md flex gap-1 ml-2 my-1 cursor-pointer text-white">
            <span className="text-teal-500 py-1 rounded-tl-sm rounded-bl-sm font-bold bg-teal-100 px-2">
              {tag}
            </span>
            <span onClick={() => clearFilter(tag)} className="text-white font-bold py-1 bg-teal-500 px-2 rounded-tr-sm rounded-br-sm ">
              X
            </span>
          </div>
        );
      })}
      {/* <div className="bg-teal-100 py-0 px-0 rounded-md flex gap-1 cursor-pointer text-white">

        <span className="text-teal-500 py-1 rounded-tl-sm rounded-bl-sm font-bold bg-teal-100 px-2">
          filter
        </span>
        <span className="text-white font-bold py-1 bg-teal-500 px-2 rounded-tr-sm rounded-br-sm ">
          X
        </span>
      </div> */}
      <button onClick={clearAll} className="ml-auto bg-slate-50 px-2 text-slate-600 cursor-pointer hover:text-teal-500 ease-in duration-300 transition">
        Clear
      </button>
    </div>
  );
}

export default FilterComp;
