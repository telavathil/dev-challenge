import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start'
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
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(scene, { id: item.id })}
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
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
));
