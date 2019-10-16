import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-evenly'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  ImageWrapper: {
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 40,
    height: 40,
    overflow: 'hidden'
  },
  Image: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  Name: {
    fontSize: 24,
    padding: 10
  }
});

export default memo(({ data, navigation, scene, title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    {data.map((item, index) => (
      <TouchableOpacity
        onPress={() => navigation.navigate(scene, { id: item.id })}
        key={index.toString()}
      >
        <View style={styles.item}>
          <View style={[styles.ImageWrapper, { borderColor: item.color }]}>
            <Image style={styles.Image} source={{ uri: item.image }} />
          </View>
          <View style={styles.Name}>
            <Text style={styles.textName}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
));
