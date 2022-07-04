import React, {useEffect, useState} from 'react';
import './App.css';
import JobListComp from './Components/JobListComp';
import data from './Components/data.json';
import FilterComp from './Components/FilterComp';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);


  // console.log(data);
  useEffect(() => {
    setJobs(data); 
    changeBackground();
  }, []);

  function changeBackground() {
    const headerImg = document.querySelector('.header--image');
    if(window.innerWidth >= 765) {
      headerImg.src = "../images/bg-header-desktop.svg";
    }
    else {
      headerImg.src = "../images/bg-header-mobile.svg";
    }
  }

  window.addEventListener('resize', changeBackground)


  const filterFunc = ({ role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }

    const tags = [role, level]

    if(tools) {
      tags.push(...tools);
    }

    if(languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  }

  const filteredJobs = jobs.filter(filterFunc);
  console.log(filteredJobs);


  function handleTagClick(tag) {
    // -1 means if the value is not found then push the tag in filters
    if(filters.indexOf(tag) === -1) {
      setFilters(prevState => [...prevState, tag])
    }
  }

  function clearFilter(tag) {
    setFilters(filters.filter((item) => item !== tag));
  }


  function clearAll() {
    setFilters([]);
  }

  return (
    <>
      <header className='w-full bg-teal-800 z-10 transition ease-in duration-300'>
        <img className='header--image w-full object-cover z-10' src="../images/bg-header-mobile.svg" alt="" />
      </header>
      {filters.length > 0 && 
        <FilterComp 
        filters={filters}
        clearFilter={clearFilter}
        clearAll={clearAll}
      />}
     
      {jobs.length === 0 ? 
      (
      <p>Jobs are Fetching ...</p>
      )  : 
      (
          filteredJobs.map((job) => 
            <JobListComp
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
             /> 
          )
        )
      }
    </>
  );
}

export default App;
