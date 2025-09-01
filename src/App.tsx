import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/images/hasan.jpg" 
            alt="Hasan Kocaman" 
            className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-white shadow-lg"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-gray-800">Hasan Kocaman</h1>
            <p className="text-gray-600 -mt-1">Software Tester</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">TypeScript vs JavaScript - Cypress Karşılaştırması</p>
      </div>
    </div>
  );
}

export default App;
