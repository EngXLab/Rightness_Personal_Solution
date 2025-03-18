import React, { useState } from 'react';
import { jobs } from './data';
import JobPreview from './jobpreview';

const JobPage = () => {
  const [filter, setFilter] = useState('upcoming');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJobDetail, setSelectedJobDetail] = useState(null);
  const [isPopOpen, setIsPopOpen] = useState(false);

  const currentDate = new Date();

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  // Handle job selection to open the JobPreview with job details
  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSelectedJobDetail(job.jobDetails[0]); // Default to the first role within jobDetails
    setIsPopOpen(true);
  };

  // Close the JobPreview pop-up
  const closePop = () => {
    setIsPopOpen(false);
    setSelectedJob(null);
    setSelectedJobDetail(null);
  };
  
  const statusColors = [
    'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400',
    'bg-indigo-400', 'bg-teal-400', 'bg-orange-400'
  ];

  const upcomingJobs = jobs.filter((job) => new Date(job.date) >= currentDate);
  const pastJobs = jobs.filter((job) => new Date(job.date) < currentDate);

  return (
    <div className='bg-gray-200 pt-12 lg:pt-14 h-full min-h-[70vh]'>
      <div className="max-w-4xl flex-grow bg-gray-100 mx-auto py-8 px-4 md:px-6 flex flex-col">
        <div className="flex items-center justify-between mb-6 md:px-2">
          <h2 className="text-3xl font-bold text-gray-900">Jobs</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 border-2 border-black rounded-full ${filter === 'upcoming' ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 border-2 border-black rounded-full ${filter === 'past' ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
            >
              Past
            </button>
          </div>
        </div>
        
        {/* Jobs list */}
        <div className="flex flex-col justify-center">
          {filter === 'upcoming' ? (
            upcomingJobs.length > 0 ? (
              upcomingJobs.map((job, index) => (
                <div
                  key={job.id}
                  onClick={() => handleJobClick(job)}
                  className="bg-white text-gray-900 p-4 mb-6 rounded-lg mx-2 cursor-pointer"
                >
                  <div className="flex justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-2 pb-2">
                      <span className={`${statusColors[index % statusColors.length]} text-white font-semibold text-xs px-2 py-1 rounded`}>
                        {job.status}
                      </span>
                        <span className="text-sm font-semibold break-words">{formatDate(job.date)}</span>
                      </div>
                      <h3 className="text-xl text-blue-500 font-bold break-words">{job.name}</h3>
                      <p className="text-gray-900 font-semibold">{job.organizer}</p>
                      <p className="text-gray-900 font-semibold">{job.venue}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-green-400 font-semibold">Tap to open Details</span>
                      </div>
                    </div>
                    <img 
                      src={job.imageUrl} 
                      alt={job.name} 
                      className="w-36 h-36 rounded-lg object-cover flex-shrink-0" 
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-900">No upcoming jobs available.</p>
            )
          ) : (
            pastJobs.length > 0 ? (
              pastJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-100 text-gray-900 p-4 mb-6 rounded-lg mx-2 cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <div className="flex justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-2 pb-2">
                        <span className="bg-red-500 text-xs px-2 py-1 rounded">{job.status}</span>
                        <span className="text-sm">{formatDate(job.date)}</span>
                      </div>
                      <h3 className="text-xl font-bold break-words">{job.name}</h3>
                      <p className="text-gray-900">{job.organizer}</p>
                      <p className="text-gray-900">{job.venue}</p>
                    </div>
                    <img 
                      src={job.imageUrl} 
                      alt={job.name} 
                      className="w-36 h-36 rounded-lg object-cover flex-shrink-0" 
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-900">No past jobs available.</p>
            )
          )}
        </div>
        
        {/* JobPreview Component */}
        {selectedJob && (
          <JobPreview
            job={selectedJob}
            jobDetail={selectedJobDetail}
            isOpen={isPopOpen}
            onClose={closePop}
          />
        )}
      </div>
    </div>
  );
};

export default JobPage;
