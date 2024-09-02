import {Link} from 'react-router-dom';
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className="section__container header__container">
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Girls Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis cum optio quae! Culpa distinctio recusandae sed? Quia nulla incidunt natus pariatur ut enim. Laudantium, ullam! Corrupti dignissimos animi reiciendis.</p>
            <button className="btn"><Link to="/shop">EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner