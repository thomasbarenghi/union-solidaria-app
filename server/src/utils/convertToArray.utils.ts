export const convertToArray = (obj: any): string[] => {
  if (Array.isArray(obj)) {
    return obj;
  }

  if (typeof obj === 'string') {
    return [obj];
  }
};
