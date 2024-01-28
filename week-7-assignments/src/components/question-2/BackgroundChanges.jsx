import React from 'react';
import ColorPill from './ColorPill';
import './styles.css';
import {useRecoilValue} from 'recoil';
import {colorAtom} from './store/atoms/colorAtom';

const data = [
  {
    id: 1,
    text: 'red',
    color: 'red',
  },
  {
    id: 2,
    text: 'yellow',
    color: 'yellow',
  },
  {
    id: 3,
    text: 'black',
    color: 'black',
  },
  {
    id: 4,
    text: 'purple',
    color: 'purple',
  },
  {
    id: 5,
    text: 'green',
    color: 'green',
  },
  {
    id: 6,
    text: 'blue',
    color: 'blue',
  },
  {
    id: 7,
    text: 'white',
    color: 'white',
  },
];

const BackgroundChanges = () => {
  const colorAtomValue = useRecoilValue(colorAtom);

  return (
    <div
      className="main-container"
      style={{backgroundColor: colorAtomValue}}
    >
      <div className="pill-container">
        {data.map((item) => {
          return (
            <ColorPill
              text={item.text}
              color={item.color}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundChanges;
