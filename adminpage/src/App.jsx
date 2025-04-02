import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import DetailedReport from './components/DetailedReport';
import './App.css'

function App() {

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] h-screen">
      <Sidebar />

      <div className="flex flex-col">
        <Header />
        <div className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Overview />
          <DetailedReport />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
