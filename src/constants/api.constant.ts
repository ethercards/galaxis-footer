import EnvironmentsModel from '../models/environments.model';

export const getApiConstanst = (environments: EnvironmentsModel) => {
  const YOUTUBE_API = '/youtube';
  const CMS_BLOG_API = `${environments.api.cms}/blog`;
  const CMS_COMMUNITIES_API = `${environments.api.cms}/projects`;
  const CMS_TEAM_API = `${environments.api.cms}/team`;
  const CMS_EMAIL_API = `${environments.api.cms}/email`;

  return {
    YOUTUBE_API,
    CMS_BLOG_API,
    CMS_COMMUNITIES_API,
    CMS_TEAM_API,
    CMS_EMAIL_API,
  };
};
