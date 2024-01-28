import React from 'react';
import './profileCard.css';

const profiles = [
  {
    image: '',
    name: 'abc',
    age: 12,
    place: 'london',
    socialMedia: {
      followers: 80000,
      links: 803000,
      photos: 1400,
    },
  },
  {
    image: '',
    name: 'def',
    age: 24,
    place: 'dublin',
    socialMedia: {
      followers: 50000,
      links: 503000,
      photos: 900,
    },
  },
  {
    image: '',
    name: 'ghi',
    age: 36,
    place: 'cork',
    socialMedia: {
      followers: 20000,
      links: 903000,
      photos: 9400,
    },
  },
];

const ProfileCard = () => {
  return (
    <>
      <div className="main-container">
        {/* <div className="next">
          <button>Profile</button>
        </div> */}
        <div className="card-container">
          <div className="card">
            <div className="background">
              <img
                src="https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png"
                alt=""
              />
            </div>
            <p className="main-text name">
              <div>
                charmander <small className="sub-text">30</small>
              </div>
              <p className="sub-text place">London</p>
            </p>
            <div className="count-container">
              <div className="main-text">
                80k <span className="sub-text">followers</span>
              </div>
              <div className="main-text">
                803k <span className="sub-text">Likes</span>
              </div>
              <div className="main-text">
                1.4k <span className="sub-text">Photos</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="prev">
          <button>Profile</button>
        </div> */}
      </div>
    </>
  );
};

export default ProfileCard;
