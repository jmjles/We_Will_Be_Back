import React from 'react';
import {landingPageAni,learnMore} from'../js/main';
import background from '../img/beeswax.jpg';
class LandingPage extends React.Component {

    componentDidMount(){
        landingPageAni();
    }

    render(){
        return (
            <section>
                <div className="completeCenter">
                    <h1>The Bees Are In Need!</h1>
                    <p>Bees Are In A Steady <b>Decline</b> And Depend On <b>You</b> For Their Survival.</p>
                    <br/>
                    <br/>

                    <a href="#Charts" id="learnMore" onMouseOver={learnMore.mouseOver} onMouseLeave={learnMore.mouseLeave}>Learn More</a>
                </div>
                <img className="background" src={background} alt="Honeycomb background"/>
                <svg id= 'lines'xmlns="http://www.w3.org/2000/svg" width="6.4in" height="3.6in" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                    <path id="Path"
                    d="M 1249.50,-31.50
              C 1249.50,-31.50 1486.50,213.00 1486.50,213.00
                1486.50,213.00 1728.00,274.50 1728.00,274.50
                1728.00,274.50 1944.00,501.00 1944.00,501.00
                1944.00,501.00 1954.50,1126.50 1954.50,1126.50
                1954.50,1126.50 756.00,1122.00 756.00,1122.00
                756.00,1122.00 444.00,736.50 444.00,736.50
                444.00,736.50 202.50,685.50 202.50,685.50
                202.50,685.50 -16.50,499.50 -16.50,499.50
                -16.50,499.50 -16.50,-48.00 -16.50,-48.00
                -16.50,-48.00 1249.50,-31.50 1249.50,-31.50" />
                </svg>
            </section>
        )
        
    }
}
export default LandingPage;