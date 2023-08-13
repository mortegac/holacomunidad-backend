/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
export const onCreateUserAccess = /* GraphQL */ `
  subscription OnCreateUserAccess(
    $filter: ModelSubscriptionUserAccessFilterInput
  ) {
    onCreateUserAccess(filter: $filter) {
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
export const onUpdateUserAccess = /* GraphQL */ `
  subscription OnUpdateUserAccess(
    $filter: ModelSubscriptionUserAccessFilterInput
  ) {
    onUpdateUserAccess(filter: $filter) {
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
export const onDeleteUserAccess = /* GraphQL */ `
  subscription OnDeleteUserAccess(
    $filter: ModelSubscriptionUserAccessFilterInput
  ) {
    onDeleteUserAccess(filter: $filter) {
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
export const onCreateResumeDashboard = /* GraphQL */ `
  subscription OnCreateResumeDashboard(
    $filter: ModelSubscriptionResumeDashboardFilterInput
  ) {
    onCreateResumeDashboard(filter: $filter) {
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
export const onUpdateResumeDashboard = /* GraphQL */ `
  subscription OnUpdateResumeDashboard(
    $filter: ModelSubscriptionResumeDashboardFilterInput
  ) {
    onUpdateResumeDashboard(filter: $filter) {
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
export const onDeleteResumeDashboard = /* GraphQL */ `
  subscription OnDeleteResumeDashboard(
    $filter: ModelSubscriptionResumeDashboardFilterInput
  ) {
    onDeleteResumeDashboard(filter: $filter) {
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
export const onCreatePages = /* GraphQL */ `
  subscription OnCreatePages($filter: ModelSubscriptionPagesFilterInput) {
    onCreatePages(filter: $filter) {
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
export const onUpdatePages = /* GraphQL */ `
  subscription OnUpdatePages($filter: ModelSubscriptionPagesFilterInput) {
    onUpdatePages(filter: $filter) {
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
export const onDeletePages = /* GraphQL */ `
  subscription OnDeletePages($filter: ModelSubscriptionPagesFilterInput) {
    onDeletePages(filter: $filter) {
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
export const onCreateCompanies = /* GraphQL */ `
  subscription OnCreateCompanies(
    $filter: ModelSubscriptionCompaniesFilterInput
  ) {
    onCreateCompanies(filter: $filter) {
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
export const onUpdateCompanies = /* GraphQL */ `
  subscription OnUpdateCompanies(
    $filter: ModelSubscriptionCompaniesFilterInput
  ) {
    onUpdateCompanies(filter: $filter) {
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
export const onDeleteCompanies = /* GraphQL */ `
  subscription OnDeleteCompanies(
    $filter: ModelSubscriptionCompaniesFilterInput
  ) {
    onDeleteCompanies(filter: $filter) {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
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
export const onCreateAssets = /* GraphQL */ `
  subscription OnCreateAssets($filter: ModelSubscriptionAssetsFilterInput) {
    onCreateAssets(filter: $filter) {
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
export const onUpdateAssets = /* GraphQL */ `
  subscription OnUpdateAssets($filter: ModelSubscriptionAssetsFilterInput) {
    onUpdateAssets(filter: $filter) {
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
export const onDeleteAssets = /* GraphQL */ `
  subscription OnDeleteAssets($filter: ModelSubscriptionAssetsFilterInput) {
    onDeleteAssets(filter: $filter) {
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
export const onCreateLocations = /* GraphQL */ `
  subscription OnCreateLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onCreateLocations(filter: $filter) {
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
export const onUpdateLocations = /* GraphQL */ `
  subscription OnUpdateLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onUpdateLocations(filter: $filter) {
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
export const onDeleteLocations = /* GraphQL */ `
  subscription OnDeleteLocations(
    $filter: ModelSubscriptionLocationsFilterInput
  ) {
    onDeleteLocations(filter: $filter) {
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
export const onCreatePageUsers = /* GraphQL */ `
  subscription OnCreatePageUsers(
    $filter: ModelSubscriptionPageUsersFilterInput
  ) {
    onCreatePageUsers(filter: $filter) {
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
export const onUpdatePageUsers = /* GraphQL */ `
  subscription OnUpdatePageUsers(
    $filter: ModelSubscriptionPageUsersFilterInput
  ) {
    onUpdatePageUsers(filter: $filter) {
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
export const onDeletePageUsers = /* GraphQL */ `
  subscription OnDeletePageUsers(
    $filter: ModelSubscriptionPageUsersFilterInput
  ) {
    onDeletePageUsers(filter: $filter) {
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
export const onCreatePostAssets = /* GraphQL */ `
  subscription OnCreatePostAssets(
    $filter: ModelSubscriptionPostAssetsFilterInput
  ) {
    onCreatePostAssets(filter: $filter) {
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
export const onUpdatePostAssets = /* GraphQL */ `
  subscription OnUpdatePostAssets(
    $filter: ModelSubscriptionPostAssetsFilterInput
  ) {
    onUpdatePostAssets(filter: $filter) {
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
export const onDeletePostAssets = /* GraphQL */ `
  subscription OnDeletePostAssets(
    $filter: ModelSubscriptionPostAssetsFilterInput
  ) {
    onDeletePostAssets(filter: $filter) {
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
export const onCreatePostLocation = /* GraphQL */ `
  subscription OnCreatePostLocation(
    $filter: ModelSubscriptionPostLocationFilterInput
  ) {
    onCreatePostLocation(filter: $filter) {
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
export const onUpdatePostLocation = /* GraphQL */ `
  subscription OnUpdatePostLocation(
    $filter: ModelSubscriptionPostLocationFilterInput
  ) {
    onUpdatePostLocation(filter: $filter) {
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
export const onDeletePostLocation = /* GraphQL */ `
  subscription OnDeletePostLocation(
    $filter: ModelSubscriptionPostLocationFilterInput
  ) {
    onDeletePostLocation(filter: $filter) {
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
