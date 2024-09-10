import { useCallback } from "react";
import { UrlModel } from "../models/url.model";

const areUrlsSame = (url1: string, url2: string): boolean => {
  return url1 === url2;
};

const removeDomainFromUrl = (url: string): string => {
  const pathRegex = /^(?:https?:\/\/)?[^\/]*(\/.*)/;
  const match = url.match(pathRegex);

  if (match && match.length > 1) {
    const [, route] = match;
    return route;
  }

  return url;
};

const containsContactForm = (url: string): boolean => {
  const regex = /contact-form/i;
  return regex.test(url);
};

const generateContactFormUrl = (
  url: string,
  galaxisUrl: string,
  subjectForContactUs?: string
): string | undefined => {
  if (containsContactForm(url)) {
    if (subjectForContactUs) {
      const encodedSubject = encodeURIComponent(subjectForContactUs);
      return `${galaxisUrl}?subject=${encodedSubject}`;
    } else {
      const subjectFromCms = url.split("=")[1];
      return `${galaxisUrl}?subject=${subjectFromCms}`;
    }
  }
  return undefined;
};

const extractSubjectFromUrl = (url: string): string | null => {
  const regex = /\?subject=.*$/;
  const match = url.match(regex);
  if (match) {
    const [subject] = match;
    return subject;
  }
  return null;
};

const getCurrentDomain = (url: string): string => {
  const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?([^\/]+)/;
  const matches = url.match(domainRegex);
  if (matches && matches.length >= 2) {
    const [, domain] = matches;
    return domain;
  }
  return url;
};

const useItemsMapper = (items: UrlModel[], customSubject?: string, galaxisUrl = "") => {
  return useCallback(
    (currentHostName: string, items: UrlModel[]): UrlModel[] => {
      return items.map((item) => {
        const currentUrl = getCurrentDomain(item.url);
        const sameHost = areUrlsSame(currentHostName, currentUrl);

        const generatedUrl = generateContactFormUrl(
          currentUrl,
          galaxisUrl,
          customSubject ?? customSubject
        );

        if (!sameHost) {
          const path = generatedUrl ? generatedUrl : item.url;
          return { ...item, url: path, openInNewTab: true };
        } else {
          let generatedPath = null;
          if (generatedUrl) {
            generatedPath = extractSubjectFromUrl(generatedUrl);
          }
          const path = removeDomainFromUrl(generatedPath ? generatedPath : item.url);
          return { ...item, url: path, openInNewTab: false };
        }
      });
    },
    [items]
  );
};

export { getCurrentDomain, useItemsMapper };
