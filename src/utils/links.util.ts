const getCurrentDomain = (url: string): string => {
  const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?(.*?)\//;
  const matches = url.match(domainRegex);
  if (matches && matches.length >= 2) {
    const domain = matches[1];
    return domain;
  }
  return url;
};

const areUrlsSame = (url1: string, url2: string): boolean => {
  return url1 === url2;
};

const removeDomainFromUrl = (url: string): string => {
  const pathRegex = /^(?:https?:\/\/)?[^\/]*(\/.*)/;
  const match = url.match(pathRegex);

  if (match && match.length > 1) {
    const route = match[1];
    return route;
  }

  return url;
};

const containsContactForm = (url: string): boolean => {
  const regex = /contact-form/i;
  return regex.test(url);
};

const generateContactFormUrl = (url: string, subjectForContactUs: string): string | undefined => {
  if (containsContactForm(url)) {
    const encodedSubject = encodeURIComponent(subjectForContactUs);
    return `https://galaxis.xyz?subject=${encodedSubject}`;
  }
  return undefined;
};

const extractSubjectFromUrl = (url: string): string | null => {
  const regex = /\?subject=.*$/;
  const match = url.match(regex);
  if (match) {
    const subject = match[0];
    return subject;
  }
  return null;
};

export {
  getCurrentDomain,
  areUrlsSame,
  removeDomainFromUrl,
  generateContactFormUrl,
  extractSubjectFromUrl,
};
