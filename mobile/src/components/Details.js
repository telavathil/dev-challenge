import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
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
  },
  email: {
    top: 56,
    left: 0,
    width: 315,
    height: 28,
    color: '#121212',
    position: 'absolute',
    fontFamily: 'roboto-regular'
  }
});

export default memo(({ data }) => (
  <View>
    <View style={[styles.imageWrapper, { borderColor: data.color }]}>
      <Image style={styles.image} source={{ uri: data.image }} />
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
      <Text style={styles.ID}>{data.id}</Text>
      <Text style={styles.Name}>{data.name}</Text>
      {data.email && <Text style={styles.email}>{data.email}</Text>}
    </View>
  </View>
));
