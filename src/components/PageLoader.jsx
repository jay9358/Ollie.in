import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#e0f8a5] to-[#d9f19e] rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-[#4a5c21] rounded-lg"></div>
          </div>
          <h1 className="text-2xl font-bold text-stone-900">Ollie</h1>
        </div>
        
        {/* Loading Spinner */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 border-3 border-stone-200 border-t-[#8ca34f] rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-stone-600 text-lg">Loading your AI decisioning platform...</p>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto mt-6">
          <div className="h-1 bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#8ca34f] to-[#99bc43] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
