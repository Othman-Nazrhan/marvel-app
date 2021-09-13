import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Levels from './Levels';
import ProgressBar from './ProgressBar';
import { MarvelQuiz } from './MarvelQuiz';
import QuizOver from './QuizOver';
toast.configure();
class Quiz extends Component {


    state = {
        levelNames: ["beginner", "intermediate", "advanced"],
        quizLevel: 0,
        maxQuestions: 10,
        storedQuestions: [],
        questions: null,
        options: [],
        idQuestion: 0,
        userAnswer: null,
        btnDisabled: true,
        score: 0,
        welcomeMsg: false,
        quizEnd: false
    }
    storedDateRef = React.createRef();

     

    loadQuestions = quizList => {

        const fetchArrayQuiz = MarvelQuiz[0].quizList[quizList];
        if (fetchArrayQuiz.length >= this.state.maxQuestions) {
            this.storedDateRef.current = fetchArrayQuiz;

            console.log("list with answer ", this.storedDateRef.current)

            const newArray = fetchArrayQuiz.map(({ answer, ...KeepRest }) => KeepRest)
            this.setState({
                storedQuestions: newArray
            })
            console.log("list of Questions", newArray)
        }
        else {
            console.log("error quiz list ");
        }
    }

    showMsgWel = name => {
        if (!this.state.welcomeMsg) {

            this.setState({
                welcomeMsg: true
            })
            toast(` Welcome ${name}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    componentDidMount() {
        this.loadQuestions(this.state.levelNames[this.state.quizLevel])
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.storedQuestions !== prevState.storedQuestions) {
            this.setState({
                questions: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options,
            })
        }


        if (this.state.idQuestion !== prevState.idQuestion) {
            this.setState({
                questions: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options,
            })

        }
        if (this.props.userData.name) {
            this.showMsgWel(this.props.userData.name);
        }


    }

    submitAnswer = selectedAnswer => {
        this.setState({
            userAnswer: selectedAnswer,
            btnDisabled: false
        })
    }

    submitNext = () => {

        if (this.state.idQuestion === this.state.maxQuestions - 1) {
            this.gameOver()
        }
        else {
            this.setState(prevState =>
            ({ idQuestion: prevState.idQuestion + 1 }
            ))

        }

        const goodAnswer = this.storedDateRef.current[this.state.idQuestion].answer
        if (goodAnswer === this.state.userAnswer) {
            this.setState(prevState => ({
                score: prevState.score + 1
            }))
            toast.success(`Good Answer +1`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

        } else {
            toast.error(`Bad Answer 0`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

        }

    }

    gameOver = () => {
        this.setState({
            quizEnd: true
        })
    }

    render() {

        const dispatchOption = this.state.options.map((option, index) => {
            return <p
                key={index}
                className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`}
                onClick={() => this.submitAnswer(option)}
            >{option}</p> 
        })



        return (
            this.state.quizEnd ? (
                <QuizOver ref={this.storedDateRef}
                  score ={this.state.score}
                  maxQuestions={this.state.maxQuestions}
                  
                />
            )
                :
                (
                    <Fragment>
                        <Levels levelNames={this.state.levelNames}/>
                        <ProgressBar idQuestion={this.state.idQuestion} maxQuestions={this.state.maxQuestions} />
                        <h2>{this.state.questions}</h2>
                        {dispatchOption}
                        <button onClick={this.submitNext}
                            disabled={this.state.btnDisabled}
                            className="btnSubmit">{ this.state.idQuestion < this.state.maxQuestions - 1 ? "Next" : "ended" }</button>
                    </Fragment>
                )

        )
    }
}
export default Quiz;