import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserProfile {
  ADMIN = "admin",
  SUBADMIN = "subadmin",
  CONTENT_CREATOR = "contentCreator",
  BASIC = "basic"
}

export enum TypeOfModule {
  NONE = "none",
  NEW_JOBS = "newJobs",
  NEW_NEWS = "newNews",
  NEW_ADVERTISEMENTS = "newAdvertisements",
  NEW_SCHEDULES = "newSchedules",
  NEW_PROJECTS = "newProjects",
  LOGIN = "login",
  LOGOUT = "logout",
  DASHBOARD = "dashboard",
  PROFILE = "profile",
  SUPPORT = "support",
  LIST_NEWS = "listNews",
  LIST_USERS = "listUsers",
  REPORT_PAGE = "reportPage"
}

export enum PostState {
  PENDING = "pending",
  PUBLISHED = "published",
  DELETED = "deleted",
  REVIEW = "review"
}

export enum PostType {
  JOBS = "jobs",
  NEWS = "news",
  ADVERTISEMENTS = "advertisements",
  SCHEDULES = "schedules",
  PROJECTS = "projects",
  NONE = "none"
}

export enum CompanyType {
  ADMIN = "admin",
  ENTERPRISE = "enterprise",
  GOV = "gov",
  NONE = "none"
}

export enum PageType {
  NONE = "none",
  REPORTS = "reports",
  ADMIN = "admin"
}

type EagerGeo = {
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly height?: string | null;
}

type LazyGeo = {
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly height?: string | null;
}

export declare type Geo = LazyLoading extends LazyLoadingDisabled ? EagerGeo : LazyGeo

export declare const Geo: (new (init: ModelInit<Geo>) => Geo)

type EagerS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUser: string;
  readonly name: string;
  readonly validated?: boolean | null;
  readonly hasAdminAccess?: boolean | null;
  readonly perfil?: UserProfile | keyof typeof UserProfile | null;
  readonly Geo?: Geo | null;
  readonly Company?: Companies | null;
  readonly PageUsers?: (PageUsers | null)[] | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companiesUsersId?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUser: string;
  readonly name: string;
  readonly validated?: boolean | null;
  readonly hasAdminAccess?: boolean | null;
  readonly perfil?: UserProfile | keyof typeof UserProfile | null;
  readonly Geo?: Geo | null;
  readonly Company: AsyncItem<Companies | undefined>;
  readonly PageUsers: AsyncCollection<PageUsers>;
  readonly Posts: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companiesUsersId?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerUserAccess = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAccess, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUser: string;
  readonly module?: TypeOfModule | keyof typeof TypeOfModule | null;
  readonly date: string;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly hour?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAccess = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAccess, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idUser: string;
  readonly module?: TypeOfModule | keyof typeof TypeOfModule | null;
  readonly date: string;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly hour?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAccess = LazyLoading extends LazyLoadingDisabled ? EagerUserAccess : LazyUserAccess

export declare const UserAccess: (new (init: ModelInit<UserAccess>) => UserAccess) & {
  copyOf(source: UserAccess, mutator: (draft: MutableModel<UserAccess>) => MutableModel<UserAccess> | void): UserAccess;
}

type EagerResumeDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResumeDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: PostType | keyof typeof PostType | null;
  readonly count?: number | null;
  readonly isAll?: boolean | null;
  readonly idLocation?: string | null;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResumeDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResumeDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: PostType | keyof typeof PostType | null;
  readonly count?: number | null;
  readonly isAll?: boolean | null;
  readonly idLocation?: string | null;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ResumeDashboard = LazyLoading extends LazyLoadingDisabled ? EagerResumeDashboard : LazyResumeDashboard

export declare const ResumeDashboard: (new (init: ModelInit<ResumeDashboard>) => ResumeDashboard) & {
  copyOf(source: ResumeDashboard, mutator: (draft: MutableModel<ResumeDashboard>) => MutableModel<ResumeDashboard> | void): ResumeDashboard;
}

type EagerPages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly ico: string;
  readonly type?: PageType | keyof typeof PageType | null;
  readonly PageUsers?: (PageUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly ico: string;
  readonly type?: PageType | keyof typeof PageType | null;
  readonly PageUsers: AsyncCollection<PageUsers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pages = LazyLoading extends LazyLoadingDisabled ? EagerPages : LazyPages

export declare const Pages: (new (init: ModelInit<Pages>) => Pages) & {
  copyOf(source: Pages, mutator: (draft: MutableModel<Pages>) => MutableModel<Pages> | void): Pages;
}

type EagerCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: CompanyType | keyof typeof CompanyType | null;
  readonly Users?: (Users | null)[] | null;
  readonly Posts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type?: CompanyType | keyof typeof CompanyType | null;
  readonly Users: AsyncCollection<Users>;
  readonly Posts: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Companies = LazyLoading extends LazyLoadingDisabled ? EagerCompanies : LazyCompanies

export declare const Companies: (new (init: ModelInit<Companies>) => Companies) & {
  copyOf(source: Companies, mutator: (draft: MutableModel<Companies>) => MutableModel<Companies> | void): Companies;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly publishingDate?: string | null;
  readonly createdAt?: string | null;
  readonly content: string;
  readonly type?: PostType | keyof typeof PostType | null;
  readonly state?: PostState | keyof typeof PostState | null;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly hour?: string | null;
  readonly Company?: Companies | null;
  readonly User?: Users | null;
  readonly PostAssets?: (PostAssets | null)[] | null;
  readonly PostLocation?: (PostLocation | null)[] | null;
  readonly updatedAt?: string | null;
  readonly usersPostsId?: string | null;
  readonly companiesPostsId?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly publishingDate?: string | null;
  readonly createdAt?: string | null;
  readonly content: string;
  readonly type?: PostType | keyof typeof PostType | null;
  readonly state?: PostState | keyof typeof PostState | null;
  readonly day: string;
  readonly month: string;
  readonly year?: string | null;
  readonly hour?: string | null;
  readonly Company: AsyncItem<Companies | undefined>;
  readonly User: AsyncItem<Users | undefined>;
  readonly PostAssets: AsyncCollection<PostAssets>;
  readonly PostLocation: AsyncCollection<PostLocation>;
  readonly updatedAt?: string | null;
  readonly usersPostsId?: string | null;
  readonly companiesPostsId?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerAssets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly file?: S3Object | null;
  readonly PostAssets?: (PostAssets | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly file?: S3Object | null;
  readonly PostAssets: AsyncCollection<PostAssets>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Assets = LazyLoading extends LazyLoadingDisabled ? EagerAssets : LazyAssets

export declare const Assets: (new (init: ModelInit<Assets>) => Assets) & {
  copyOf(source: Assets, mutator: (draft: MutableModel<Assets>) => MutableModel<Assets> | void): Assets;
}

type EagerLocations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Locations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Geo?: Geo | null;
  readonly type: string;
  readonly PostLocation?: (PostLocation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Locations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Geo?: Geo | null;
  readonly type: string;
  readonly PostLocation: AsyncCollection<PostLocation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Locations = LazyLoading extends LazyLoadingDisabled ? EagerLocations : LazyLocations

export declare const Locations: (new (init: ModelInit<Locations>) => Locations) & {
  copyOf(source: Locations, mutator: (draft: MutableModel<Locations>) => MutableModel<Locations> | void): Locations;
}

type EagerPageUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PageUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersId?: string | null;
  readonly pagesId?: string | null;
  readonly users: Users;
  readonly pages: Pages;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPageUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PageUsers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersId?: string | null;
  readonly pagesId?: string | null;
  readonly users: AsyncItem<Users>;
  readonly pages: AsyncItem<Pages>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PageUsers = LazyLoading extends LazyLoadingDisabled ? EagerPageUsers : LazyPageUsers

export declare const PageUsers: (new (init: ModelInit<PageUsers>) => PageUsers) & {
  copyOf(source: PageUsers, mutator: (draft: MutableModel<PageUsers>) => MutableModel<PageUsers> | void): PageUsers;
}

type EagerPostAssets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostAssets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postsId?: string | null;
  readonly assetsId?: string | null;
  readonly posts: Posts;
  readonly assets: Assets;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostAssets = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostAssets, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postsId?: string | null;
  readonly assetsId?: string | null;
  readonly posts: AsyncItem<Posts>;
  readonly assets: AsyncItem<Assets>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostAssets = LazyLoading extends LazyLoadingDisabled ? EagerPostAssets : LazyPostAssets

export declare const PostAssets: (new (init: ModelInit<PostAssets>) => PostAssets) & {
  copyOf(source: PostAssets, mutator: (draft: MutableModel<PostAssets>) => MutableModel<PostAssets> | void): PostAssets;
}

type EagerPostLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostLocation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postsId?: string | null;
  readonly locationsId?: string | null;
  readonly posts: Posts;
  readonly locations: Locations;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostLocation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postsId?: string | null;
  readonly locationsId?: string | null;
  readonly posts: AsyncItem<Posts>;
  readonly locations: AsyncItem<Locations>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostLocation = LazyLoading extends LazyLoadingDisabled ? EagerPostLocation : LazyPostLocation

export declare const PostLocation: (new (init: ModelInit<PostLocation>) => PostLocation) & {
  copyOf(source: PostLocation, mutator: (draft: MutableModel<PostLocation>) => MutableModel<PostLocation> | void): PostLocation;
}