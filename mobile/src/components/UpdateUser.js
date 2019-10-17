import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const mutation = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String) {
    updateUser(user: { id: $id, name: $name, email: $email })
  }
`;

export default class UpdateUser extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    id: this.props.id
  };

  render() {
    return (
      //didn't get time to refetchQueries and update cache
      <Mutation mutation={mutation}>
        {(updateUserMutation, { data }) => (
          <View>
            <Text>User Info:</Text>

            <TextInput
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
              placeholder="name"
            />

            <TextInput
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
              placeholder="email"
            />

            <Button
              onPress={() => {
                updateUserMutation({
                  variables: {
                    ...this.state
                  }
                })
                  .then(({ data }) => {
                    if (data.updateUser) this.props.editSuccess();
                  })
                  .catch(err => <Text>{err}</Text>);
              }}
              title="Submit"
            />
          </View>
        )}
      </Mutation>
    );
  }
}
