
import style from './HeroSection.module.css'

function HeroSection() {
    return(
        <div className={`${style.herosection} container`}>
            <div>
                <h1>Contact Us</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
        </div>
    );
}

export default HeroSection;