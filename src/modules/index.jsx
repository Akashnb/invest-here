import React from 'react';

import Home from './Home';
import Features from './Features';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Testimonials from './Testimonials';
import BlogPosts from './BlogPosts';
import ContactUs from './ContactUs';
import Footer from '../common/Footer';

const ModulesContainer = () => {
  return (
    <>
      <Home />
      <Features />
      <AboutUs />
      <OurTeam />
      <Testimonials />
      <BlogPosts />
      <ContactUs />
      <Footer />
    </>
  )
}

export default ModulesContainer;