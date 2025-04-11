import React from 'react'
import Mentor from '../../components/Mentor/Mentor'
import Project from '../../components/Projects/Project'
import Courses from '../../components/courses/Сourses'
import Card from '../../components/card/Card'
import Hero from '../../components/hero/Hero'
import Reviews from '../../components/reviews/Reviews'
import ContactForm from '../../components/contactForm/ContactForm'
import Hero2 from '../../components/hero2/Hero2'
import Dashboard from '../../components/User-dashboard/Dashboard.'

function Home() {
  return (
    <div>
        <Hero/>
        <Card/>
        <Hero2/>
        <Courses/>
      <Mentor/>
      <Project/>
        <Reviews/>
        <ContactForm/>
        <Dashboard/>
    </div>
  )
}

export default Home
