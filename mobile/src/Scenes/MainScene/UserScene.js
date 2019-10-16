import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ErrorScene, UserDetails } from '../../components';

const query = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      color
      name
      email
      image
      address {
        zipCode
        city
        streetAddress
        country
      }
      company {
        name
        id
        image
      }
      friends {
        id
        color
        name
        email
        image
      }
    }
  }
`;

export default class UserScene extends PureComponent {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    // todo: 2. would be cool if we actually displayed full user data that is contained in the user data object.

    // todo: 3. would be extra cool to include their company info, and if you tap on it you can go that CompanyScene.
    // if this is done correctly, we should be re-using components from the CompaniesScene.

    // todo: 4. would be even cooler to see a list of their friends, so I can tap on them an get more info about that user.
    // todo: 5 would be cool to make the user name and email updateable and saved ot the database, so we can let our users change their info.
    return (
      <View>
        <Query query={query} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return <UserDetails user={data.user} navigation={navigation} />;
          }}
        </Query>
      </View>
    );
  }
}
