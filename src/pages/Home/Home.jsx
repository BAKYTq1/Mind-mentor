import Mentor from '../../components/Mentor/Mentor'
import Project from '../../components/Projects/Project'
import Card from '../../components/card/Card'
import Hero from '../../components/hero/Hero'
import Reviews from '../../components/reviews/Reviews'
import ContactForm from '../../components/contactForm/ContactForm'
import Hero2 from '../../components/hero2/Hero2'
import AdminCourse from "../../components/adminCourses/AdminCourse.jsx";
import Dashboard from '../../components/User-dashboard/Dashboard.'
import Courses1 from "../../components/Corses1/Courses1.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";
import UserData from '../../components/UserData/index.jsx'

function Home() {
  return (
    <div>
        <Hero/>
        <Card/>
        <Hero2/>
        <Courses1/>
        <Mentor/>
        <Project/>
        <Reviews/>
        <ContactForm/>
        <AdminCourse/>
        <Dashboard/>
        <AdminPage/>
        <UserData/>
    </div>
  )
}

export default Home
