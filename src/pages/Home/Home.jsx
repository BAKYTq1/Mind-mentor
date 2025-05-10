import Mentor from '../../components/Mentor/Mentor'
import Project from '../../components/Projects/Project'
import Card from '../../components/card/Card'
import Hero from '../../components/hero/Hero'
import Reviews from '../../components/reviews/Reviews'
import ContactForm from '../../components/contactForm/ContactForm'
import Hero2 from '../../components/hero2/Hero2'
import AdminCourse from "../../components/adminCourses/AdminCourse.jsx";
import Dashboard from '../../components/User-dashboard/Dashboard.'
import Courses1 from "../../components/Courses1/Courses1.jsx";
import AdminPage from "../AdminPage/AdminPage.jsx";
import UserData from '../../components/UserData/index.jsx'
import { Container } from 'lucide-react'
import Mentory from '../../components/mentory/Mentory.jsx'
import DeleteUsers from '../../components/Delete-users/index.jsx'
import BlockUser from '../../components/BlockUser/index.jsx'
import Dashboarde from '../../components/Dashboard/Dashboarde.jsx'
import NewUser from '../../components/NewUser/index.jsx'
import SpecialistsPanel from '../../components/Special/index.jsx'
import Payments from '../../components/payments/Payments.jsx'
import Korzina from '../../components/korzina/Korzina.jsx'
// import CardCarousel from '../../components/cards/cards.jsx'
import Podbor from '../../components/podbor/Podbor.jsx'

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
        <Podbor/>
        {/* <Payments/> */}
        {/* <AdminPage/> */}
        {/* <Mentory/> */}
        {/* <Dashboarde/>
        <AdminPage/>
        <Mentory/> */}
        {/* <NewUser/> */}
        {/* <Dashboard/> */}
        {/* <DeleteUsers/> */}
        {/* <BlockUser/> */}
        {/* <AdminPage/> */}
        {/* <Mentory/>
        <Dashboard/> */}
        {/* <AdminPage/> */}
        {/* <AdminCourse/>
        <Mentory/> */}
        {/* <AdminPage/> */}
        {/* <UserData/> */}
        {/* <SpecialistsPanel/> */}
        {/* <Korzina/> */}
    </div>
  )
}

export default Home
