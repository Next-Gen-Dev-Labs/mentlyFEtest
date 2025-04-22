import React from 'react';
import { ArrowLeft, Settings, Trash2, Share,Copy , Share2} from 'react-feather'; // Using react-feather for icons
import { Preview } from '../../constants';
import Image from "next/image";

const ProgramInformation = () => {
  const { touch, more } = Preview;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center">
          <button className="flex items-center text-orange-400 hover:text-orange-500">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Copy className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Program Information</h1>
        
        {/* Section Title Input */}
        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center border rounded-md p-2 bg-white">
              <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">T</span>
              <input 
                type="text"
                placeholder="Describe Section Title e.g What you stand to learn"
                className="w-full outline-none"
              />
            </div>
            <p className="mt-2 text-sm p-4 text-gray-600 bg-[#CEE1FB]">
              Provide your preferred title for this section i.e What's in this Program for you?
            </p>
          </div>
        </div>

        {/* Rich Text Editor */}
        <div className="mb-6">
          <div className="border rounded-md bg-white">
            <div className="border-b p-2 flex items-center space-x-2">
              {/* Text formatting options */}
              <button className="p-2 hover:bg-gray-100 rounded">B</button>
              <button className="p-2 hover:bg-gray-100 rounded">I</button>
              <button className="p-2 hover:bg-gray-100 rounded">U</button>
              {/* Add more formatting buttons as needed */}
            </div>
            <textarea 
              placeholder="Input Text"
              className="w-full p-4 min-h-[200px] outline-none resize-none"
            />
          </div>
          <p className="mt-2 text-sm p-4 text-gray-600 bg-[#CEE1FB]">
            Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.
          </p>
        </div>

        {/* Add Section Button */}
        <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 mb-6">
          + Add new section
          <span className="text-sm text-gray-500 block">(maximum number of sections to add is 3)</span>
        </button>

        {/* Show when Published Option */}
        <div className="flex items-center mb-6">
          <input 
            type="checkbox" 
            id="showPublished"
            className="w-4 h-4 text-purple-800 rounded border-gray-300 focus:ring-purple-800"
          />
          <label htmlFor="showPublished" className="ml-2 text-gray-700">
            Show this section when Published
          </label>
        </div>

        {/* Program Information Sections */}
        <div className="space-y-4 mb-6">
          <div className="bg-[#F1F1F1] p-4 rounded-md flex justify-between items-center">
            <span>Program Information Text 1</span>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800"><Image 
                  src={touch} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                /></button>
              <button className="text-gray-600 hover:text-gray-800"><Image 
                  src={more}
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                /></button>
            </div>
          </div>
          <div className="bg-[#F1F1F1] p-4 rounded-md flex justify-between items-center">
            <span>Program Information Text 2</span>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800"><Image 
                  src={touch} 
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                /></button>
              <button className="text-gray-600 hover:text-gray-800"><Image 
                  src={more}
                  alt="ContentIcons"
                  width={24}
                  height={24} 
                /></button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-6 border-t">
          <button className="text-gray-600 hover:text-gray-800">
            Go Back
          </button>
          <button className="px-6 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900">
            Save & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramInformation;






