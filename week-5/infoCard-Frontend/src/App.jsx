import {useState} from 'react';
import './App.css';
import AddDetails from './components/AddDetails';
import InfoCards from './components/InfoCards';

const App = () => {
  const [personData, setPersonData] = useState([
    {
      name: 'John Doe',
      description: 'Software Developer',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      interests: ['Programming', 'Reading', 'Traveling'],
    },
  ]);

  const updatePersonData = (formData) => {
    const {name, description, interests} = formData;
    const newPerson = {
      name: name,
      description: description,
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      interests: interests.split(' '),
    };

    // Use spread operator to create a new array with the existing and new objects
    setPersonData((prevPersonData) => [...prevPersonData, newPerson]);
  };

  return (
    <div>
      <AddDetails updatePersonData={updatePersonData} />
      <InfoCards personData={personData} />
    </div>
  );
};

export default App;
