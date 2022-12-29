import { useState } from "react";
import "./QuizComponent.css";
import questionData from "../data/quizQuestion";

let QuizComponent = () => {
    let [currentQuestion, changeQuestion] = useState(0);

    let question = {
        ...questionData[currentQuestion],
        id: currentQuestion+1,
    };

    let updateQuestion=(forward)=>{
        changeQuestion(prev=>{
            if((prev<1&&!forward)||(prev>=questionData.length-1&&forward)){
                return prev
            }
            if(forward===true){
                return prev+1
            }
            return prev-1
        })
    }

    return (
        <div className="Quiz">
            <h2>Question</h2>
            <div className="counter">{question.id} of 15</div>
            <div className="question">
                {question.question}
            </div>
            <div className="options">
                <div className="opt">{question.optionA}</div>
                <div className="opt">{question.optionB}</div>
                <div className="opt">{question.optionC}</div>
                <div className="opt">{question.optionD}</div>
            </div>
            <div className="cta">
                <button className="prev" onClick={()=>updateQuestion(false)}>Previous</button>
                <button className="next" onClick={()=>updateQuestion(true)}>Next</button>
                <button className="quit" onClick={()=>window.confirm("Are you sure you want to quit?")}>Quit</button>
            </div>
        </div>
    );
};

export default QuizComponent;
