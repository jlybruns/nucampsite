import CAMPSITES from './shared'

export const selectAllCampsites = () => {
    return CAMPSITES;
};

//If this doesn't work, flip Math.random and CAMPSITES.length
export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};
