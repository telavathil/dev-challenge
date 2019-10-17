import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Details from './Details';
import TouchableList from './TouchableList';

export default memo(({ user, navigation }) => (
  <View style={styles.container}>
    <Details data={user} isUser />
    {user.company && (
      <View>
        <TouchableList
          data={[user.company]}
          navigation={navigation}
          scene="CompanyScene"
          title="Company"
        />
      </View>
    )}
    <View>
      <TouchableList
        data={user.friends}
        navigation={navigation}
        scene="UserScene"
        title="Friends"
      />
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20
  }
});
