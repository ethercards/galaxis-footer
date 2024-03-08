function getCurrentDomain(url: string): string {
  const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?(.*?)\//;
  const matches = url.match(domainRegex);
  if (matches && matches.length >= 2) {
    return matches[1];
  }
  return url;
}

function areUrlsSame(url1: string, url2: string): boolean {
  if (url1 === url2) {
    return true;
  }
  return false;
}

function removeDomainFromUrl(url: string): string {
  const pathRegex = /^(?:https?:\/\/)?[^\/]*(\/.*)/;
  const match = url.match(pathRegex);

  if (match && match.length > 1) {
    return match[1];
  }
  return url;
}

function containsContactForm(url: string): boolean {
  const regex = /#/;
  // const regex = /contact-form/i;
  return regex.test(url);
}

function generateContactFormUrl(url: string, subjectForContextUS: string): string | null {
  if (containsContactForm(url)) {
    const encodedSubject = encodeURIComponent(subjectForContextUS);
    return `https://galaxis.xyz?subject=${encodedSubject}`;
  }
  return null;
}

function extractSubjectFromUrl(url: string): string | null {
  const regex = /\?subject=.*$/;
  const match = url.match(regex);
  return match ? match[0] : null;
}

export {
  getCurrentDomain,
  areUrlsSame,
  removeDomainFromUrl,
  generateContactFormUrl,
  extractSubjectFromUrl,
};
