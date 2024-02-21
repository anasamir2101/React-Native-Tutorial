import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;

    if (start === true) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

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
