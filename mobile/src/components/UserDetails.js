import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Details from './Details';

export default memo(({ user, navigation }) => (
  <View style={styles.container}>
    <Details data={user} />
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
  }
});
