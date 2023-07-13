import React, {useState} from "react";
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good,setGood] = useState(0);
  const [bad,setBad] = useState(0);
  const [neutral,setNeutral] = useState(0);


  // useEffect(()=>{
  //   setGood(good + 1 );
  // },[]);

  // Funciones de estadisticas
  const incrementGood = () =>{
    setGood(good => good + 1)
  }

  const incrementNeutral = () =>{
    setNeutral(neutral => neutral + 1)
  }

  const incrementBad =() => {
    setBad(bad => bad + 1)
    console.log(bad)
  }

  const countTotalFeedback =() =>{
    let totalFeedback = good + bad + neutral;
    return totalFeedback;
  }

  const  countPositiveFeedbackPercentage = () =>{
    let percentagePositiveFeedback = (good/ countTotalFeedback()) * 100;
    return Math.round(percentagePositiveFeedback);
  }


  return (
    <div>
      <Section title = {'Please Leave Feedback'}/>

      <FeedbackOptions  options = {incrementGood} onLeaveFeedback ={'Good'}/>
      <FeedbackOptions options = {incrementBad} onLeaveFeedback ={'Bad'}/>
      <FeedbackOptions options = {incrementNeutral} onLeaveFeedback ={'Neutral'}/>

     
      {countTotalFeedback() > 0 ?
      (
        <Statistics
        good = {good}
        bad = {bad}
        neutral = {neutral}
        total = {countTotalFeedback()}
        positiveFeedback = {countPositiveFeedbackPercentage()}
        ></Statistics>
      )
      :
      (<Notification message = {'There is not feedback'}></Notification>)
      }
      
    </div>
  );
};

