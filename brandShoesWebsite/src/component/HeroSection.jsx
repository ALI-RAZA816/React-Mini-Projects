
function HeroSection() {
    return(
        <div className="hero-container">
            <div className="container">
                <div className="left">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="buttons">
                        <button style={{marginBottom:"1rem"}}>Shop Now</button>
                        <button>Category</button>
                    </div>
                    <div className="available">
                        <p>Also available on</p>
                        <div className="images">
                            <img src="/images/flipkart.png "alt="sponser"/>
                            <img src="/images/amazon.png" alt="sponser"/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="/images/shoe_image.png" alt="brand-image"/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;