import React from 'react'
import { Fragment } from 'react'


 const ProgressBar = ({idQuestion , maxQuestions }) => {


const getWidth = (totalQuestions , questionId ) => {

    return ( 100 / totalQuestions) * questionId ;
}

const posetionQuistion = idQuestion + 1
const progressBar = getWidth(maxQuestions,posetionQuistion )



    return (
    <Fragment>
         <div className="percentage">
             <div className="progressPercent">Question: {idQuestion + 1 }/{maxQuestions}</div>
             <div className="progressPercent">{`Progression: ${progressBar}%`}</div>
         </div>


         <div className="progressBar">
             <div className="progressBarChange"  style={{width:`${progressBar}%`}}>

             </div>
         </div>
    </Fragment>
       
    )
}
export default ProgressBar;