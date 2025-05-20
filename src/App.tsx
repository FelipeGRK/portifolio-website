import React from 'react';
import PCModelViewer from './components/PCModelViewer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-purple-500/20">
        <div className="relative aspect-video w-full bg-gray-900/50">
          <React.Suspense fallback={<LoadingSpinner />}>
            <PCModelViewer />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;