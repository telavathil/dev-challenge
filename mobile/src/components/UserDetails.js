import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default memo(({ user, navigation }) => (
  <View style={styles.container}>
    <View style={[styles.imageWrapper, { borderColor: user.color }]}>
      <Image style={styles.image} source={{ uri: user.image }} />
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
      <Text style={styles.ID}>{user.id}</Text>
      <Text style={styles.Name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
    <View>
      <View style={styles.companyList}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CompanyScene', { id: user.company.id })
          }
        >
          <View
            style={[
              styles.companyImageWrapper,
              { borderColor: user.company.color }
            ]}
          >
            <Image
              style={styles.companyImage}
              source={{ uri: user.company.image }}
            />
          </View>
          <View style={styles.companyName}>
            <Text style={styles.textName}>{user.company.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20
  },
  companyList: {
    flexDirection: 'row',
    padding: 20
  },
  companyImageWrapper: {
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 80,
    height: 80,
    overflow: 'hidden'
  },
  companyImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  companyText: {
    flexDirection: 'column'
  },
  companyName: {
    fontSize: 24
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
