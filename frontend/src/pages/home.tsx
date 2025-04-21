
import { AppbarHome } from "../components/AppbarHome"
import ActionSection from "../HomeComponents/Action"
import WelcomeBanner from "../HomeComponents/Banner"
import FeatureSection from "../HomeComponents/Feature"
import Footer from "../HomeComponents/Footer"
import ServicesSection from "../HomeComponents/Services"


export const Home = () =>{
    return <div>
        <div>
            <AppbarHome/>
            <WelcomeBanner/>
            <FeatureSection/>
            <ActionSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    </div>
}