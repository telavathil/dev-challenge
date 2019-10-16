import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ErrorScene, UserList } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const PAGE_SIZE = 10;

const paginatedQuery = gql`
  query UserCursor($after: String, $first: Int) {
    usersCursor(after: $after, first: $first) {
      edges {
        cursor
        node {
          id
          color
          name
          email
          image
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;

export default class UsersScene extends PureComponent {
  render() {
    const { navigation } = this.props;
    let previousEdges = [];

    return (
      <View style={styles.container}>
        <Query query={paginatedQuery} variables={{ first: PAGE_SIZE }}>
          {({ loading, error, data, refetch, networkStatus, fetchMore }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            if (previousEdges.length === 0)
              previousEdges = data.usersCursor.edges;

            return (
              <FlatList
                data={data.usersCursor.edges}
                refreshing={networkStatus === 4}
                onRefresh={() => refetch()}
                onEndReachedThreshold={0.5}
                onEndReached={() =>
                  fetchMore({
                    query: paginatedQuery,
                    variables: {
                      first: PAGE_SIZE,
                      after: data.usersCursor.pageInfo.endCursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                      //store edges outside of update to preserve earlier edges
                      previousEdges = previousEdges.concat(
                        fetchMoreResult.usersCursor.edges
                      );

                      const results = data.usersCursor.pageInfo.hasNextPage
                        ? fetchMoreResult.usersCursor
                        : previousResult.usersCursor;

                      return {
                        usersCursor: {
                          ...results,
                          edges: previousEdges
                        }
                      };
                    }
                  })
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserScene', { id: item.node.id })
                    }
                  >
                    <UserList user={item.node} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}
