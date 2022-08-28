import React, { Fragment, useEffect, useState } from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  const [asked, setAsked] = useState([])

  useEffect(() => {
    setAsked(ref.current)
  }, [ref])

  const userAnswerTable = asked.map(res => {
    return (
      <tr key={res.id}>
        <td>{res.question}</td>
        <td>{res.answer}</td>
        <td><button className="btnSubmit">Info</button></td>
      </tr>
    )
  })
  return (
    <Fragment>
      <div className="stepsBtnContainer">
        <p className="successMsg"> well done you are an expert</p>
        <button className="btnResult success"> Next Level</button>
      </div>
      <div className="percentage">
        <div className="progressPercent"> result</div>
        <div className="progressPercent"> Note </div>
      </div>
      <hr />
      <p>Answers to questions askeds</p>
      <div className="amswerContainer">
        <table className="answers">
          <thead>
            <tr>
              <th>question</th>
              <th>Answer</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {userAnswerTable}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
})

export default React.memo(QuizOver)
