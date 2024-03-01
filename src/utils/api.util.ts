const api = {
  get: async <T>(url: string) => await handler<T>(url, "GET"),
};

const handler = async <T>(url: string, method: "GET"): Promise<{ response: Response; data: T }> => {
  const options: RequestInit = {
    method,
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return { response, data };
};

export { api };
