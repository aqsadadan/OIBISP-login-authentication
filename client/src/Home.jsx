import { useState,useEffect } from 'react';
import backgroundImage from './image.png';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import { AiFillHome } from "react-icons/ai";
import { CiPizza } from "react-icons/ci";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
function Home() {
  const placeholders = ["Search Cheese pizza", "Search Veg pizza", "Search Thin crust pizza", "Search Ulta pizza", "Search Monster pizza"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Cycle through placeholders every 2 seconds (2000 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      
           <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
      }}
    >
      
    </div>
    <div className='header'>
    <header
      style={{
        position: 'fixed', // Makes the header stick to the top
        top: 0,
        width: '100%',
        height: '80px', // Set desired height for the header
        backgroundColor: 'white', // Background color of the header
        color: 'black', // Text color
        display:'flex'}}
        >
              <div
      style={{
        backgroundImage: `url(${logo})`,
        padding:'10px',
        height: '50px',
        width: '190px',
        marginTop:'15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'  
      }}
    >
      
    </div>
    
    <div style={{display:'flex', position:'relative'}}>
      <BsFillSearchHeartFill style={{marginTop:'25px',fontSize:'20px', color:'red', position:'absolute', left:'15px'}}/>
        <input type='text' placeholder={placeholders[placeholderIndex]}style={{height:'40px', paddingLeft:'40px',marginTop:'15px',borderRadius:'15px', width:'600px'}}></input>
    </div>


    <div
      style={{
        marginTop:'25px',
        display: 'flex',
        right:'300px',
        position:'fixed',
        fontSize:'20px',
        alignItems: 'center'  
      }}  
    >
      <AiFillHome style={{color:'red'}}/>
      Home
    </div>
    <div
      style={{
        marginTop:'25px',
        display: 'flex',
        right:'200px',
        position:'fixed',
        fontSize:'20px',
        alignItems: 'center'  
      }}  
    >
      <BsFillArrowThroughHeartFill style={{color:'red'}}/>
      Favs!
    </div>
    <div
      style={{
        marginTop:'25px',
        display: 'flex',
        right:'50px',
        position:'fixed',
        fontSize:'20px',
        alignItems: 'center'  
      }}  
    >
      <    RiDiscountPercentFill style={{color:'red'}}/>
      Mojo deals!
    </div>

        </header>
      
    </div>
    <div style={{textAlign:'right', alignItem:'center',position:'absolute', top:'35%', fontSize:'100px',color:'white',fontFamily:'Lucida Handwriting', right:'100px'}}>Delicious!</div>
    <div style={{textAlign:'right', alignItem:'center',position:'absolute', top:'50%', fontSize:'60px',color:'white',fontFamily: 'margerine',  right:'100px'}}>Italian Cuisine</div>
    <Link to='/Signup' className='Ordernow' style={{textAlign:'right',textDecoration:'none', alignItem:'center',position:'absolute', top:'60%', fontSize:'20px',padding:'10px',margin:'10px',backgroundColor:'red',height: '50px', width:'160px',textAlign:'center',color:'white',fontFamily: 'margerine',  right:'100px'}}>Order now</Link>
    <Link to='/Menu' className='log' style={{textAlign:'right', alignItem:'center',position:'absolute', top:'60%', fontSize:'20px',padding:'10px',margin:'10px',backgroundColor:'white',height: '50px', width:'160px',textAlign:'center',color:'black',textDecoration:'none',fontFamily: 'margerine',  right:'270px'}}>View menu</Link>
   </div>
  );
}

export default Home;
