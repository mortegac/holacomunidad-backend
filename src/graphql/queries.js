/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchResumeDashboards = /* GraphQL */ `
  query SearchResumeDashboards(
    $filter: SearchableResumeDashboardFilterInput
    $sort: [SearchableResumeDashboardSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableResumeDashboardAggregationInput]
  ) {
    searchResumeDashboards(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        type
        count
        isAll
        idLocation
        day
        month
        year
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostsFilterInput
    $sort: [SearchablePostsSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePostsAggregationInput]
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      idUser
      name
      validated
      hasAdminAccess
      perfil
      Geo {
        lat
        long
        height
        __typename
      }
      Company {
        id
        name
        type
        Users {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PageUsers {
        items {
          id
          usersId
          pagesId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Posts {
        items {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      companiesUsersId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        idUser
        name
        validated
        hasAdminAccess
        perfil
        Geo {
          lat
          long
          height
          __typename
        }
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companiesUsersId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        idUser
        name
        validated
        hasAdminAccess
        perfil
        Geo {
          lat
          long
          height
          __typename
        }
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companiesUsersId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserAccess = /* GraphQL */ `
  query GetUserAccess($id: ID!) {
    getUserAccess(id: $id) {
      id
      idUser
      module
      date
      day
      month
      year
      hour
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserAccesses = /* GraphQL */ `
  query ListUserAccesses(
    $filter: ModelUserAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAccesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idUser
        module
        date
        day
        month
        year
        hour
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserAccesses = /* GraphQL */ `
  query SyncUserAccesses(
    $filter: ModelUserAccessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAccesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        idUser
        module
        date
        day
        month
        year
        hour
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getResumeDashboard = /* GraphQL */ `
  query GetResumeDashboard($id: ID!) {
    getResumeDashboard(id: $id) {
      id
      name
      type
      count
      isAll
      idLocation
      day
      month
      year
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listResumeDashboards = /* GraphQL */ `
  query ListResumeDashboards(
    $filter: ModelResumeDashboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumeDashboards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        count
        isAll
        idLocation
        day
        month
        year
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncResumeDashboards = /* GraphQL */ `
  query SyncResumeDashboards(
    $filter: ModelResumeDashboardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResumeDashboards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        count
        isAll
        idLocation
        day
        month
        year
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPages = /* GraphQL */ `
  query GetPages($id: ID!) {
    getPages(id: $id) {
      id
      name
      url
      ico
      type
      PageUsers {
        items {
          id
          usersId
          pagesId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCompanies = /* GraphQL */ `
  query GetCompanies($id: ID!) {
    getCompanies(id: $id) {
      id
      name
      type
      Users {
        items {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Posts {
        items {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompaniesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        Users {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompaniesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        Users {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      name
      publishingDate
      createdAt
      content
      type
      state
      day
      month
      year
      hour
      Company {
        id
        name
        type
        Users {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      User {
        idUser
        name
        validated
        hasAdminAccess
        perfil
        Geo {
          lat
          long
          height
          __typename
        }
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companiesUsersId
        __typename
      }
      PostAssets {
        items {
          id
          postsId
          assetsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PostLocation {
        items {
          id
          postsId
          locationsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      usersPostsId
      companiesPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAssets = /* GraphQL */ `
  query GetAssets($id: ID!) {
    getAssets(id: $id) {
      id
      name
      file {
        bucket
        region
        key
        __typename
      }
      PostAssets {
        items {
          id
          postsId
          assetsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelAssetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        file {
          bucket
          region
          key
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAssets = /* GraphQL */ `
  query SyncAssets(
    $filter: ModelAssetsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        file {
          bucket
          region
          key
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLocations = /* GraphQL */ `
  query GetLocations($id: ID!) {
    getLocations(id: $id) {
      id
      name
      Geo {
        lat
        long
        height
        __typename
      }
      type
      PostLocation {
        items {
          id
          postsId
          locationsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Geo {
          lat
          long
          height
          __typename
        }
        type
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Geo {
          lat
          long
          height
          __typename
        }
        type
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPageUsers = /* GraphQL */ `
  query GetPageUsers($id: ID!) {
    getPageUsers(id: $id) {
      id
      usersId
      pagesId
      users {
        idUser
        name
        validated
        hasAdminAccess
        perfil
        Geo {
          lat
          long
          height
          __typename
        }
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        Posts {
          nextToken
          startedAt
          __typename
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        companiesUsersId
        __typename
      }
      pages {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPageUsers = /* GraphQL */ `
  query ListPageUsers(
    $filter: ModelPageUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersId
        pagesId
        users {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        pages {
          id
          name
          url
          ico
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPageUsers = /* GraphQL */ `
  query SyncPageUsers(
    $filter: ModelPageUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPageUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usersId
        pagesId
        users {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        pages {
          id
          name
          url
          ico
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPostAssets = /* GraphQL */ `
  query GetPostAssets($id: ID!) {
    getPostAssets(id: $id) {
      id
      postsId
      assetsId
      posts {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      assets {
        id
        name
        file {
          bucket
          region
          key
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPostAssets = /* GraphQL */ `
  query ListPostAssets(
    $filter: ModelPostAssetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postsId
        assetsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        assets {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPostAssets = /* GraphQL */ `
  query SyncPostAssets(
    $filter: ModelPostAssetsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postsId
        assetsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        assets {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPostLocation = /* GraphQL */ `
  query GetPostLocation($id: ID!) {
    getPostLocation(id: $id) {
      id
      postsId
      locationsId
      posts {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      locations {
        id
        name
        Geo {
          lat
          long
          height
          __typename
        }
        type
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPostLocations = /* GraphQL */ `
  query ListPostLocations(
    $filter: ModelPostLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postsId
        locationsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        locations {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPostLocations = /* GraphQL */ `
  query SyncPostLocations(
    $filter: ModelPostLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postsId
        locationsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        locations {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postsByIdAndDayAndMonthAndYear = /* GraphQL */ `
  query PostsByIdAndDayAndMonthAndYear(
    $id: ID!
    $dayMonthYear: ModelPostsSearchByDiaMesAnoCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByIdAndDayAndMonthAndYear(
      id: $id
      dayMonthYear: $dayMonthYear
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        publishingDate
        createdAt
        content
        type
        state
        day
        month
        year
        hour
        Company {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        User {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        PostAssets {
          nextToken
          startedAt
          __typename
        }
        PostLocation {
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pageUsersByUsersId = /* GraphQL */ `
  query PageUsersByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPageUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pageUsersByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usersId
        pagesId
        users {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        pages {
          id
          name
          url
          ico
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pageUsersByPagesId = /* GraphQL */ `
  query PageUsersByPagesId(
    $pagesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPageUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pageUsersByPagesId(
      pagesId: $pagesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        usersId
        pagesId
        users {
          idUser
          name
          validated
          hasAdminAccess
          perfil
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          companiesUsersId
          __typename
        }
        pages {
          id
          name
          url
          ico
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postAssetsByPostsId = /* GraphQL */ `
  query PostAssetsByPostsId(
    $postsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostAssetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postAssetsByPostsId(
      postsId: $postsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postsId
        assetsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        assets {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postAssetsByAssetsId = /* GraphQL */ `
  query PostAssetsByAssetsId(
    $assetsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostAssetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postAssetsByAssetsId(
      assetsId: $assetsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postsId
        assetsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        assets {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postLocationsByPostsId = /* GraphQL */ `
  query PostLocationsByPostsId(
    $postsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postLocationsByPostsId(
      postsId: $postsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postsId
        locationsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        locations {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postLocationsByLocationsId = /* GraphQL */ `
  query PostLocationsByLocationsId(
    $locationsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postLocationsByLocationsId(
      locationsId: $locationsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postsId
        locationsId
        posts {
          id
          name
          publishingDate
          createdAt
          content
          type
          state
          day
          month
          year
          hour
          updatedAt
          _version
          _deleted
          _lastChangedAt
          usersPostsId
          companiesPostsId
          __typename
        }
        locations {
          id
          name
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
