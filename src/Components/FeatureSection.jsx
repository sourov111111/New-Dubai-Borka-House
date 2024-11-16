
import '../css/FeatureSection.css'
import CountUp from 'react-countup';
function FeatureSection() {
  return (
  <>
  
  <div className="FeatureSection" >

    <div className='FeatureSection_main' data-aos="zoom-out-up">
        <div className='FeatureSection_child'>

        
        <h1 className='text-success'> <CountUp start={0} end={511} duration={5} />K</h1>
        <b> Likes</b>


        </div>
        <div className='FeatureSection_child'>
    
        <h1 className='text-success'> <CountUp start={0} end={680} duration={5} />K</h1>
        <b> Active user</b>
        </div>
        <div className='FeatureSection_child'>
    
        <h1 className='text-success'> <CountUp start={0} end={25} duration={1.5} />%</h1>
        <b> Increase User</b>
        </div>
        <div className='FeatureSection_child'>
    
    <h1 className='text-success'> <CountUp start={0} end={540} duration={5} />K</h1>
    <b> Followers</b>
    </div>

    </div>

  </div>
  
  </>
  )
}

export default FeatureSection