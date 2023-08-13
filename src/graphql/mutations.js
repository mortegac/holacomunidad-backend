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
      PageUsers {
        items {
          id
          usersId
          pagesId
          createdAt
          updatedAt
          __typename
        }
        nextToken
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
      PageUsers {
        items {
          id
          usersId
          pagesId
          createdAt
          updatedAt
          __typename
        }
        nextToken
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
      PageUsers {
        items {
          id
          usersId
          pagesId
          createdAt
          updatedAt
          __typename
        }
        nextToken
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
export const createPages = /* GraphQL */ `
  mutation CreatePages(
    $input: CreatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    createPages(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePages = /* GraphQL */ `
  mutation UpdatePages(
    $input: UpdatePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    updatePages(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePages = /* GraphQL */ `
  mutation DeletePages(
    $input: DeletePagesInput!
    $condition: ModelPagesConditionInput
  ) {
    deletePages(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
          usersPostsId
          companiesPostsId
          __typename
        }
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
          __typename
        }
        PageUsers {
          nextToken
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
      PostAssets {
        items {
          id
          postsId
          assetsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostLocation {
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
          __typename
        }
        PageUsers {
          nextToken
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
      PostAssets {
        items {
          id
          postsId
          assetsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostLocation {
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
          __typename
        }
        PageUsers {
          nextToken
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
      PostAssets {
        items {
          id
          postsId
          assetsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostLocation {
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
      updatedAt
      usersPostsId
      companiesPostsId
      __typename
    }
  }
`;
export const createAssets = /* GraphQL */ `
  mutation CreateAssets(
    $input: CreateAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    createAssets(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAssets = /* GraphQL */ `
  mutation UpdateAssets(
    $input: UpdateAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    updateAssets(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAssets = /* GraphQL */ `
  mutation DeleteAssets(
    $input: DeleteAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    deleteAssets(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPageUsers = /* GraphQL */ `
  mutation CreatePageUsers(
    $input: CreatePageUsersInput!
    $condition: ModelPageUsersConditionInput
  ) {
    createPageUsers(input: $input, condition: $condition) {
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
          __typename
        }
        PageUsers {
          nextToken
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
      pages {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          __typename
        }
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
export const updatePageUsers = /* GraphQL */ `
  mutation UpdatePageUsers(
    $input: UpdatePageUsersInput!
    $condition: ModelPageUsersConditionInput
  ) {
    updatePageUsers(input: $input, condition: $condition) {
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
          __typename
        }
        PageUsers {
          nextToken
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
      pages {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          __typename
        }
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
export const deletePageUsers = /* GraphQL */ `
  mutation DeletePageUsers(
    $input: DeletePageUsersInput!
    $condition: ModelPageUsersConditionInput
  ) {
    deletePageUsers(input: $input, condition: $condition) {
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
          __typename
        }
        PageUsers {
          nextToken
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
      pages {
        id
        name
        url
        ico
        type
        PageUsers {
          nextToken
          __typename
        }
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
export const createPostAssets = /* GraphQL */ `
  mutation CreatePostAssets(
    $input: CreatePostAssetsInput!
    $condition: ModelPostAssetsConditionInput
  ) {
    createPostAssets(input: $input, condition: $condition) {
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
export const updatePostAssets = /* GraphQL */ `
  mutation UpdatePostAssets(
    $input: UpdatePostAssetsInput!
    $condition: ModelPostAssetsConditionInput
  ) {
    updatePostAssets(input: $input, condition: $condition) {
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
export const deletePostAssets = /* GraphQL */ `
  mutation DeletePostAssets(
    $input: DeletePostAssetsInput!
    $condition: ModelPostAssetsConditionInput
  ) {
    deletePostAssets(input: $input, condition: $condition) {
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
        PostAssets {
          nextToken
          __typename
        }
        PostLocation {
          nextToken
          __typename
        }
        updatedAt
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
          __typename
        }
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
