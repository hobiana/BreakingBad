
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions } from 'react-native'

export default function FadeIn(props) {
  const [positionLeft, setPositionLeft] = useState(new Animated.Value(Dimensions.get('window').width))

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    Animated.spring(
      positionLeft,
      {
        toValue: 0,
        useNativeDriver: false,
      }
    ).start()
  }, []);

  return (
    <Animated.View
      style={{ left: positionLeft }}>
      {props.children}
    </Animated.View>
  )
}