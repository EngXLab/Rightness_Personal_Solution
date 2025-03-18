import React from 'react';
import { Plus } from 'lucide-react';

const JobPreview = ({ job, isOpen, onClose }) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-70">
      <div className="relative overflow-auto w-full max-w-3xl bg-[#1E293B] max-h-screen text-white p-6 rounded-lg shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
        >
          <Plus className="rotate-45 text-2xl" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-200 shadow-lg">
            <img
              src={job.imageUrl}
              alt={job.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl text-indigo-300 font-bold">{job.name}</h1>
          <p className="text-gray-400 mt-1">{job.organizer}</p>
          <p className="text-gray-500 mt-1 italic">{job.venue}</p>
          <p className="text-indigo-400 mt-4 text-center font-semibold">{job.category}</p>
        </div>

        {/* Details Section */}
        <div className="mt-6 space-y-8">
          {job.jobDetails.map((jobDetail, index) => (
            <div key={index} className="space-y-4 border-t border-gray-700 pt-4">
              <h2 className="text-lg font-semibold text-indigo-300">
                Position: <span className="text-gray-100">{jobDetail.title || 'N/A'}</span>
              </h2>
              <p className="text-indigo-200">
                {jobDetail.type === 'Internship'
                  ? `Stipend: ${jobDetail.stipend || 'N/A'}`
                  : `Salary: ${jobDetail.salary || 'N/A'}`}
              </p>

              {/* Responsibilities */}
              {jobDetail.responsibilities?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400">Responsibilities:</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    {jobDetail.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Qualifications */}
              {jobDetail.qualifications?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400">Qualifications:</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    {jobDetail.qualifications.map((qualification, i) => (
                      <li key={i}>{qualification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Application Info */}
        <div className="mt-6 text-center bg-indigo-800 bg-opacity-30 rounded-lg p-4">
          <p className="text-indigo-300">
            Last Date for Submission: <span className="font-semibold text-white">{job.lastDateForSubmission || 'N/A'}</span>
          </p>
          <p className="text-indigo-300 mt-2">
            Candidates Needed: <span className="font-semibold text-white">{job.candidatesNeeded || 'N/A'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
