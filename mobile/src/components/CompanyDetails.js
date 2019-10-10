import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default memo(({ company }) => (
  <View style={styles.container}>
    <View style={[styles.imageWrapper, { borderColor: company.color }]}>
      <Image style={styles.image} source={{ uri: company.image }} />
    </View>
    <View
      style={[
        styles.stack,
        {
          marginTop: 19,
          height: 111,
          width: 315
        }
      ]}
    >
      <Text style={styles.ID}>{company.id}</Text>
      <Text style={styles.Name}>{company.name}</Text>
    </View>
  </View>
));
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20
  },
  imageWrapper: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 298,
    height: 321,
    overflow: 'hidden'
  },
  image: {
    width: 298,
    height: 321
  },
  stack: {
    position: 'relative'
  },
  Name: {
    top: 0,
    left: 0,
    width: 315,
    height: 28,
    color: '#121212',
    position: 'absolute',
    fontFamily: 'roboto-regular'
  },
  ID: {
    top: 28,
    left: 0,
    width: 315,
    height: 28,
    color: '#121212',
    position: 'absolute',
    fontFamily: 'roboto-regular'
  }
});
