import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ErrorScene, CompanyDetails } from '../../components';

const query = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      color
      name
      image
      employees {
        name
        image
        id
        color
      }
    }
  }
`;

export default class CompanyScene extends PureComponent {
  render() {
    // todo: 2. would be really cool to show the company info here.
    // todo: 3. would be extra cool to show the employee list and make it navigate to that user on tap.
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <View>
        <Query query={query} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return (
              <CompanyDetails company={data.company} navigation={navigation} />
            );
          }}
        </Query>
      </View>
    );
  }
}
