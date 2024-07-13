import React from 'react';
import Dev from '../components/Dev';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import View from '../components/View';
const Home = () => {
  return (
    <>
      <Dev/>
      <HomeCards/>
      <JobListings isHome={true}/>
      <View/>
    </>
  );
}

export default Home
