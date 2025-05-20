import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-purple-300 text-sm">Loading 3D model...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;