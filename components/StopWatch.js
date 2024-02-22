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

  const StartTimer = () => {
    setStart(true);
  };

  const StopTimer = () => {
    setStart(false);
    setSeconds(0);
  };
  const PauseTimer = () => {
    setStart(false);
    setSeconds(interval);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Time: {formatTime(seconds)}</Text>
      <Button title='Start Timer' onPress={StartTimer} />
      <Button title='Stop' onPress={StopTimer} />
      <Button title='Pause' onPress={PauseTimer} />
    </View>
  );
};

export default StopWatch;
