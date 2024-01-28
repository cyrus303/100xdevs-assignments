import React from 'react';
import {useSetRecoilState} from 'recoil';
import {colorAtom} from './store/atoms/colorAtom';

const ColorPill = ({text, color}) => {
  const fontColor = color === 'black' ? 'white' : 'black';
  const setColorAtom = useSetRecoilState(colorAtom);

  const handleClick = () => {
    setColorAtom(color);
  };

  return (
    <div
      className="pill"
      style={{backgroundColor: color, color: fontColor}}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default ColorPill;
