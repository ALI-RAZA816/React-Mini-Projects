import style from './HeroSection.module.css'
function HeroSection() {
    return(
        <div className={style.herocontainer}>
            <div className={style.container}>
                <div className={style.left}>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className={style.buttons}>
                        <button style={{marginBottom:"1rem"}}>Shop Now</button>
                        <button>Category</button>
                    </div>
                    <div className={style.available}>
                        <p>Also available on</p>
                        <div className={style.images}>
                            <img src="/images/flipkart.png "alt="sponser"/>
                            <img src="/images/amazon.png" alt="sponser"/>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <img src="/images/shoe_image.png" alt="brand-image"/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;