import '../css/BenifitSection.css'

//images 
import BenifitOne from '../images/benefits6.png' ; 
import aboutCOntact from '../images/about-contact.png' ;
import skill from '../images/benefits5.png'

function BenifitSection() {
  return (
 <>
 
 <div className='BenifitSection container'>

 <div className="card bg-base-100 w-96 shadow-xl " data-aos="zoom-in-right">
  <figure className="px-10 pt-10">
    <img
      src={BenifitOne}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Performance</h2>
    <p>Competitive salary with regular increments based on performance</p>
    <div className="card-actions">
      <button className="btn btn-primary">Progressive </button>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl" data-aos="zoom-out-up">
  <figure className="px-10 pt-10">
    <img
      src={aboutCOntact}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Learning</h2>
    <p>Opportunities for continuous learning and skill development</p>
    <div className="card-actions">
      <button className="btn btn-primary">Progressive </button>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl"data-aos="zoom-in-left" >
  <figure className="px-10 pt-10">
    <img
      src={skill}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Environment</h2>
    <p>Additional office benefits, including team-building activities, workshops, and a supportive work environment</p>
    <div className="card-actions">
      <button className="btn btn-primary">Progressive </button>
    </div>
  </div>
</div>


 </div>
 
 
 
 
 </>
  )
}

export default BenifitSection