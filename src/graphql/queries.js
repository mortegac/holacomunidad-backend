/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        createdAt
        updatedAt
        __typename
      }
      Posts {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
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
        id
        createdAt
        updatedAt
        companiesUsersId
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getResumeDashboard = /* GraphQL */ `
  query GetResumeDashboard($id: ID!) {
    getResumeDashboard(id: $id) {
      id
      lastIdCreated
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
        lastIdCreated
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getResumeIdProcess = /* GraphQL */ `
  query GetResumeIdProcess($id: ID!) {
    getResumeIdProcess(id: $id) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listResumeIdProcesses = /* GraphQL */ `
  query ListResumeIdProcesses(
    $filter: ModelResumeIdProcessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumeIdProcesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        nextToken
        __typename
      }
      Posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
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
        companiesUsersId
        __typename
      }
      fileImage
      PostLocation {
        nextToken
        __typename
      }
      updatedAt
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
        fileImage
        updatedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        fileImage
        updatedAt
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
        __typename
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByIdAndMonthAndYear = /* GraphQL */ `
  query PostsByIdAndMonthAndYear(
    $id: ID!
    $monthYear: ModelPostsSearchByDiaMesAnoCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByIdAndMonthAndYear(
      id: $id
      monthYear: $monthYear
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
        fileImage
        updatedAt
        usersPostsId
        companiesPostsId
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
