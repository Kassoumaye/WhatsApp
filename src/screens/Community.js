import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Community = () => {
  return (
  <View style={styles.container}>
    <Text>Community</Text>
  </View>
  );
}

export default Community;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });