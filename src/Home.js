import React from 'react';
import Nav from './components/Nav';
import Topics from './components/Topics';
import './App.css';
import HeroS from './components/herofocus3D';
import i from './components/img/mbg.jpg';
import Cards from './components/cards_t'
import img1 from './components/img/hanan.jpg'
import img2 from './components/img/ali.jpg'
import img3 from './components/img/tasneem.jpg'

function Home(props) {

  const topicTitle1 = "Tech";
  const topicTitle2 = "Sports";
  const topicTitle3 = "Space";
  const topicTitle4 = "Education";
  const topicTitle5 = "Economy";

  return (
    <>
    <div className="app">
        <HeroS t="what if ?"></HeroS>
      <Cards p="OUR TEAM ✨ :" im1={img1} im2={img2} im3={img3} n1="Hanan" n2="ali"n3="tasneem"></Cards>

      
      <div className="homeScreen">
      
        {/* <section>
      
          <div className="box">
            <h2>blabla yoga blablabla</h2>
            <div className="container"> 
                <div class="img-box jarallax">
                  <img src={i}></img>
                </div>
                <div className="content">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                </div>

            </div> 
  </div>
        </section> */}
      </div>
       
        {/* <Topics 
        topic1={topicTitle1} 
        topic2={topicTitle2} 
        topic3={topicTitle3} 
        topic4={topicTitle4} 
        topic5={topicTitle5} /> */}

    </div>
  </>
  );
}

export default Home;
