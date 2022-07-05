import React from 'react';

function JobListComp({
    job: {
        logo,
        id,
        company,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    }, handleTagClick
}) {

    const tags = [role, level];
    // console.log(tags);

    if(tools) {
        tags.push(...tools);
    }

    if(languages) {
        tags.push(...languages);
    }
    return(
       <div role="main" className={`flex flex-col gap-4 py-2 px-4 my-6 bg-teal-50 shadow-lg mx-auto w-96 ${featured && 'border-l-4 border-teal-500 border-solid' } md:flex-row md:w-9/12`}>
         <div className='first--wrapper flex flex-col gap-2'>
            <div className="logo--img w-16 relative mb-4 -mt-8 sm:mt-0">
                <img src={logo} alt="{job.company}" />
            </div>
            <div className="detail--wrapper pb-2 flex-col flex gap-2 border-b md:border-b-0">
                <h1 className='text-teal-500 font-medium'>
                    {company}
                    {isNew && <span className='ml-2 bg-teal-500 text-white px-2 py-1 rounded-xl cursor-pointer'>New</span> }
                    {featured && <span className='ml-2 bg-black text-white px-2 py-1 rounded-xl cursor-pointer'>Featured</span>}
                </h1>
                <h2 className='text-teal-500 font-bold'>{position}</h2>
                <p className='text-slate-500'>
                    {postedAt} . {contract} . {location} 
                </p>
            </div>
         </div>

         <div className="skill--wrapper flex flex-wrap gap-4 md:justify-center md:items-center md:ml-auto pb-2">
            {tags ? (tags.map((tag, index) => <span
                onClick={() => handleTagClick(tag)}
                key={index} 
                className="bg-teal-100 px-2 p-1 text-teal-500 font-bold cursor-pointer">{tag}</span>)
            ) : ''

            }
             {/* <span className='bg-teal-100 px-2 p-1 text-teal-500 font-bold cursor-pointer'>frontend</span> */}
            {/* // <span className='bg-teal-100 px-2 p-1 text-teal-500 font-bold cursor-pointer'>Backend</span> */}
         </div>
       </div>
    )
}

export default JobListComp;