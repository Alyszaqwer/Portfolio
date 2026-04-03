import './Intro.css'
import bgImage from '../../assets/photo-light.jpg'  

const Intro = () => {
  return (
    <div id="home" className="intro">

    
      <div className="introLeft">
        <div className="introContent">
          <h1 className="introHello">Hello,</h1>
          <h1 className="introIm">I'm</h1>
          <h1 className="introName">Alyssa.</h1>
          <p className="introSub">Determined, Curious, and Enthusiastic.</p>
        </div>
        <div className="scrollDown">
          <span className="scrollLine"></span>
          <span className="scrollText">SCROLL DOWN</span>
        </div>
      </div>

      
      <div className="introRight">
        <img src={bgImage} alt="Alyssa" className="bg" />
      </div>

    </div>
  )
}

export default Intro