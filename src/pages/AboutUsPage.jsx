import MyGoogleMapForEveryone from "../UI/MyGoogleMapForEveryone";
import AboutUsComponent from "../components/AboutUsComponent";
import AboutUsParagraph from "../components/AboutUsParagraph";
import FooterForEveryone from '../components/FooterForEveryone'
const AboutUsPage = () => {
    return (
        <>
        <div>
        <AboutUsComponent/>
        <AboutUsParagraph/>
        <MyGoogleMapForEveryone/>
        <FooterForEveryone/>
        </div>
        </>
    );
}

export default AboutUsPage;
