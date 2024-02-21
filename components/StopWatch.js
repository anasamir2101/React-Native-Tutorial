import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    // This effect will run when the component mounts
    // It starts a timer to update the seconds every second
    if (start === true) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Clean-up function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [start]); // The effect will re-run whenever the 'seconds' state changes

  const handleButtonClick = () => {
    setStart(true);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Seconds: {seconds}</Text>
      <Button title='Start Timer' onPress={handleButtonClick} />
    </View>
  );
};

export default StopWatch;
