import '../css/HomeHeroSection.css'
import ReactTypingEffect from 'react-typing-effect';
//images 
import CompanyLogo from '../images/Company Final Logo Design PNG File.png';
import Round from '../images/Ellipse.png';
import Person from '../images/vecteezy_3d-male-character-engaged-in-work-on-a-laptop_24658981.png'

function HomeHeroSection() {
  return (
<>

<div className='HomeHeroSection'>

<div className='HomeHeroSection_left ' data-aos="zoom-in-right">

<a href="https://www.newdubaiborkahouse.com/" target="_blank" rel="noopener noreferrer"> 

<img src={CompanyLogo} alt="CompanyLogo"  className='CompanyLogo'/>
 </a>
<h1 className='text-amber-600'>  New Dubai Borka House </h1>
<h1>  <ReactTypingEffect
          text={["Hiring..."]}
          speed={90}          // Speed of typing
          eraseSpeed={50}      // Speed of erasing
          eraseDelay={1500}    // Delay before erasing starts
          typingDelay={500}    // Delay before typing starts
          cursor="|"           // Custom cursor
        /> </h1>
<h1>A Digital Marketing Officer</h1>
<p>We are looking for enthusiastic individuals to join our team as Digital Marketers.</p>
<button
  className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group border-black border"
  type="button"
  
>
  <div
    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p className="translate-x-2">Explore </p>
</button>
 

</div>

<div className='HomeHeroSection_right' data-aos="zoom-in-left">


<div className='HomeHeroSection_right_round'>
<img src={Round} alt="Round" />
</div>
<div className='HomeHeroSection_right_phone'>
<img src={Person} alt="Person"  className='Person'/>
</div>






</div>





</div>




</>
  )
}

export default HomeHeroSection