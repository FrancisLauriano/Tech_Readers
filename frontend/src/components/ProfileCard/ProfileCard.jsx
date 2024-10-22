import React from 'react';
import { StyledProfileCard } from './ProfileCard.styles';

const ProfileCard = ({ profileData }) => {
  return (
    <StyledProfileCard>
      <h2>{profileData.name}</h2>
      <p>{profileData.bio}</p>
    </StyledProfileCard>
  );
};

export default ProfileCard;



