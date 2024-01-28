import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ProfileCard from './components/question-1/ProfileCard';
import BackgroundChanges from './components/question-2/BackgroundChanges';

function App() {
  const Navigate = useNavigate();
  return (
    <>
      <div style={{padding: '1rem', margin: '1rem'}}>
        <h1>week 7 assignments</h1>
        <button
          onClick={() => {
            Navigate('/');
          }}
          style={{marginRight: '1rem'}}
        >
          Question 1
        </button>
        <button
          onClick={() => {
            Navigate('/background');
          }}
          style={{marginRight: '1rem'}}
        >
          Question 2
        </button>
      </div>
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/background" element={<BackgroundChanges />} />
      </Routes>
    </>
  );
}

export default App;
