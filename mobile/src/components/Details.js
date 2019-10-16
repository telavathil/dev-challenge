import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
    position: 'relative',
    padding: 10
  }
});

export default memo(({ data }) => (
  <View style={styles.container}>
    <View style={[styles.imageWrapper, { borderColor: data.color }]}>
      <Image style={styles.image} source={{ uri: data.image }} />
    </View>
    <View style={[styles.stack]}>
      <Text>{data.name}</Text>
      {data.email && <Text>{data.email}</Text>}
      {data.adress && (
        <Text>
          {data.address.streetAddress}, {data.address.city},{' '}
          {data.address.county}, {data.address.zipCode}
        </Text>
      )}
    </View>
  </View>
));
