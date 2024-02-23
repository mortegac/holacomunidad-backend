/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createUserAccess = /* GraphQL */ `
  mutation CreateUserAccess(
    $input: CreateUserAccessInput!
    $condition: ModelUserAccessConditionInput
  ) {
    createUserAccess(input: $input, condition: $condition) {
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
export const updateUserAccess = /* GraphQL */ `
  mutation UpdateUserAccess(
    $input: UpdateUserAccessInput!
    $condition: ModelUserAccessConditionInput
  ) {
    updateUserAccess(input: $input, condition: $condition) {
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
export const deleteUserAccess = /* GraphQL */ `
  mutation DeleteUserAccess(
    $input: DeleteUserAccessInput!
    $condition: ModelUserAccessConditionInput
  ) {
    deleteUserAccess(input: $input, condition: $condition) {
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
export const createResumeDashboard = /* GraphQL */ `
  mutation CreateResumeDashboard(
    $input: CreateResumeDashboardInput!
    $condition: ModelResumeDashboardConditionInput
  ) {
    createResumeDashboard(input: $input, condition: $condition) {
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
export const updateResumeDashboard = /* GraphQL */ `
  mutation UpdateResumeDashboard(
    $input: UpdateResumeDashboardInput!
    $condition: ModelResumeDashboardConditionInput
  ) {
    updateResumeDashboard(input: $input, condition: $condition) {
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
export const deleteResumeDashboard = /* GraphQL */ `
  mutation DeleteResumeDashboard(
    $input: DeleteResumeDashboardInput!
    $condition: ModelResumeDashboardConditionInput
  ) {
    deleteResumeDashboard(input: $input, condition: $condition) {
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
export const createResumeIdProcess = /* GraphQL */ `
  mutation CreateResumeIdProcess(
    $input: CreateResumeIdProcessInput!
    $condition: ModelResumeIdProcessConditionInput
  ) {
    createResumeIdProcess(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateResumeIdProcess = /* GraphQL */ `
  mutation UpdateResumeIdProcess(
    $input: UpdateResumeIdProcessInput!
    $condition: ModelResumeIdProcessConditionInput
  ) {
    updateResumeIdProcess(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteResumeIdProcess = /* GraphQL */ `
  mutation DeleteResumeIdProcess(
    $input: DeleteResumeIdProcessInput!
    $condition: ModelResumeIdProcessConditionInput
  ) {
    deleteResumeIdProcess(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCompanies = /* GraphQL */ `
  mutation CreateCompanies(
    $input: CreateCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    createCompanies(input: $input, condition: $condition) {
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
export const updateCompanies = /* GraphQL */ `
  mutation UpdateCompanies(
    $input: UpdateCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    updateCompanies(input: $input, condition: $condition) {
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
export const deleteCompanies = /* GraphQL */ `
  mutation DeleteCompanies(
    $input: DeleteCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    deleteCompanies(input: $input, condition: $condition) {
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
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
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
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
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
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
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
export const createLocations = /* GraphQL */ `
  mutation CreateLocations(
    $input: CreateLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    createLocations(input: $input, condition: $condition) {
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
export const updateLocations = /* GraphQL */ `
  mutation UpdateLocations(
    $input: UpdateLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    updateLocations(input: $input, condition: $condition) {
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
export const deleteLocations = /* GraphQL */ `
  mutation DeleteLocations(
    $input: DeleteLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    deleteLocations(input: $input, condition: $condition) {
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
export const createPostLocation = /* GraphQL */ `
  mutation CreatePostLocation(
    $input: CreatePostLocationInput!
    $condition: ModelPostLocationConditionInput
  ) {
    createPostLocation(input: $input, condition: $condition) {
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
export const updatePostLocation = /* GraphQL */ `
  mutation UpdatePostLocation(
    $input: UpdatePostLocationInput!
    $condition: ModelPostLocationConditionInput
  ) {
    updatePostLocation(input: $input, condition: $condition) {
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
export const deletePostLocation = /* GraphQL */ `
  mutation DeletePostLocation(
    $input: DeletePostLocationInput!
    $condition: ModelPostLocationConditionInput
  ) {
    deletePostLocation(input: $input, condition: $condition) {
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
