import React, { useEffect, useState } from 'react';

const CompletionPage = () => {
  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    // Read start time from session storage
    const startTime = sessionStorage.getItem('startTime');
    if (startTime) {
        const endTime = Date.now();
        const duration = (endTime - parseInt(startTime)) / 1000;
        setTotalTime(duration);
    }
  }, []);

  return (
    <div>
        <h1>Congrats!</h1>
        <p>You have completed the task. Time taken: {totalTime} seconds</p>
    </div>
  )
}

export default CompletionPage