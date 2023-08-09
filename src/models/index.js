// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserProfile = {
  "ADMIN": "admin",
  "SUBADMIN": "subadmin",
  "CONTENT_CREATOR": "contentCreator",
  "BASIC": "basic"
};

const TypeOfModule = {
  "NONE": "none",
  "NEW_JOBS": "newJobs",
  "NEW_NEWS": "newNews",
  "NEW_ADVERTISEMENTS": "newAdvertisements",
  "NEW_SCHEDULES": "newSchedules",
  "NEW_PROJECTS": "newProjects",
  "LOGIN": "login",
  "LOGOUT": "logout",
  "DASHBOARD": "dashboard",
  "PROFILE": "profile",
  "SUPPORT": "support",
  "LIST_NEWS": "listNews",
  "LIST_USERS": "listUsers",
  "REPORT_PAGE": "reportPage"
};

const PostState = {
  "PENDING": "pending",
  "PUBLISHED": "published",
  "DELETED": "deleted",
  "REVIEW": "review"
};

const PostType = {
  "JOBS": "jobs",
  "NEWS": "news",
  "ADVERTISEMENTS": "advertisements",
  "SCHEDULES": "schedules",
  "PROJECTS": "projects",
  "NONE": "none"
};

const CompanyType = {
  "ADMIN": "admin",
  "ENTERPRISE": "enterprise",
  "GOV": "gov",
  "NONE": "none"
};

const PageType = {
  "NONE": "none",
  "REPORTS": "reports",
  "ADMIN": "admin"
};

const { Users, UserAccess, ResumeDashboard, Pages, Companies, Posts, Assets, Locations, PageUsers, PostAssets, PostLocation, Geo, S3Object } = initSchema(schema);

export {
  Users,
  UserAccess,
  ResumeDashboard,
  Pages,
  Companies,
  Posts,
  Assets,
  Locations,
  PageUsers,
  PostAssets,
  PostLocation,
  UserProfile,
  TypeOfModule,
  PostState,
  PostType,
  CompanyType,
  PageType,
  Geo,
  S3Object
};