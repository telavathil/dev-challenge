import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Details from './Details';
import TouchableList from './TouchableList';

export default memo(({ company, navigation }) => (
  <View style={styles.container}>
    <Details data={company} />
    <View>
      <TouchableList
        data={company.employees}
        navigation={navigation}
        scene="UserScene"
        title="Employees"
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
