import React from 'react';
import image from '../../image/about3.jpg'
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="about-text">
                <h1>Your Effort, Your Success</h1>
            </div>
            <div>
                <img className="w-75" src={image} alt="" />
            </div>
            <div >
                <p className='article-text fs-4'>We are imporving of our students. Because we know that Accounting is most of important subject in all business sector.Accounts is maintain of our life.This part to be Calculate in our life. This part to be calculate in our whole time.So, all person to be calculate in his /her life experience.</p>

            </div>
            <div className="guiding">
                <h4><u>OUR GUIDING PRINCIPLES</u></h4>
                <div>
                    <ul>
                        <h5>Inclusivity</h5>
                        <h5>Integrity</h5>
                        <h5>Innovation</h5>
                        <h5>Clarity</h5>

                    </ul>
                    <br />
                    <h4><u>Commitment</u></h4>
                    <h5 className='article-text fs-4'>We will try to best guide of our student.Because our Student is most important of our Country.They are imporving of our next generation.</h5>
                </div>
            </div>
        </div>
    );
};

export default About;