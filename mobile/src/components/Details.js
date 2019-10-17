import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import UpdateUser from './UpdateUser';

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
    position: 'relative'
  }
});

export default class Details extends Component {
  state = {
    edit: false
  };

  render() {
    const data = this.props.data;
    const isUser = this.props.isUser;

    return (
      <View style={styles.container}>
        <View style={[styles.imageWrapper, { borderColor: data.color }]}>
          <Image style={styles.image} source={{ uri: data.image }} />
        </View>
        <View style={[styles.stack]}>
          <Text>{data.name}</Text>
          {isUser && (
            <View>
              <Text>{data.email}</Text>
              <Text>
                {data.address.streetAddress}, {data.address.city},{' '}
                {data.address.county}, {data.address.zipCode}
              </Text>
              <Button
                onPress={() => this.setState({ edit: !this.state.edit })}
                title="Update"
              />
              {this.state.edit && (
                <UpdateUser
                  name={data.name}
                  email={data.email}
                  id={data.id}
                  editSuccess={() => this.setState({ edit: false })}
                />
              )}
            </View>
          )}
        </View>
      </View>
    );
  }
}
