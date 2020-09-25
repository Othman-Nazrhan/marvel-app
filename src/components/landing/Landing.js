import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom';


const Landing = () => {

    const refWilverine = useRef(null);


    const [btn, setbtn] = useState(false)

    // Add image
    useEffect(() => {
        refWilverine.current.classList.add("startingImg");

        //  remove image
        setTimeout(() => {
            refWilverine.current.classList.remove("startingImg");
            setbtn(true)
        }, 2000);


    }, []
    )

    const setleftImg = () => {
        refWilverine.current.classList.add("leftImg");
    }
    const setRightImg = () => {
        refWilverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
          if(refWilverine.current.classList.contains("leftImg")){
              refWilverine.current.classList.remove("leftImg");
          } else if (refWilverine.current.classList.contains("rightImg")){
            refWilverine.current.classList.remove("rightImg");
        } 
    }

    // display btn
    const displayBtn = btn && (
<Fragment>
            <div onMouseOver={setleftImg} onMouseOut={clearImg} className="leftBox">
              <Link to ="/signup"><button className="btn-welcome">Inscription </button></Link>  
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
               <Link to ="/login"> <button className="btn-welcome"> Connexion</button></Link>
            </div>
        </Fragment>
    )
    console.log(refWilverine)
    return (
        <main ref={refWilverine} className="welcomePage">
            {displayBtn}
        </main>
    )
}
export default Landing