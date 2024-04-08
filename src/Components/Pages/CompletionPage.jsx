import React, { useEffect, useState } from 'react';

const CompletionPage = () => {
  const [totalTime, setTotalTime] = useState(null);
  const [clickCount, setClickCount] = useState(10);
  
  useEffect(() => {
    // Read start time from session storage
    const startTime = sessionStorage.getItem('startTime');
    if (startTime) {
        const endTime = Date.now();
        const duration = (endTime - parseInt(startTime)) / 1000;
        setTotalTime(duration);
    }

    // const clicksfromResults1 = sessionStorage.getItem('clicksr1') || '0';
    const clicksfromResults2 = sessionStorage.getItem('clicksr2') || '0';
    const clicksfromResults3 = sessionStorage.getItem('clicksr3') || '0';
    const clicksfromHomeC = sessionStorage.getItem('homec') || '0';
    const clicksFromHomeA = sessionStorage.getItem('homea') || '0';
  
    // Parse each click count as an integer before adding them together
    // Using '0' as a default value for parseInt to avoid NaN
    const totalClicks = [clicksFromHomeA, clicksfromHomeC, clicksfromResults2, clicksfromResults3]
      .map(click => parseInt(click, 10))
      .reduce((acc, current) => acc + (isNaN(current) ? 0 : current), 0);
  
    setClickCount(totalClicks);
  }, []);

  return (
    <div>
        <h1>Congrats!</h1>
        <p>You have completed the task. Time taken: {totalTime} seconds. Clicks: {clickCount - 1}</p>
    </div>
  )
}

export default CompletionPage;
