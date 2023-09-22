export const buildQueryInitiative = (params): any => {
  const query = {} as any;

  if (params.country !== undefined && params.country !== '') {
    query.country = params.country;
  }

  if (params.province !== undefined && params.province !== '') {
    query.province = params.province;
  }

  if (params.name !== undefined && params.name !== '') {
    query.title = {
      contains: params.name,
    };
  }

  if (params.themes !== undefined && params.themes !== '') {
    query.themes = {
      has: params.themes,
    };
  }

  if (params.opportunities !== undefined && params.opportunities !== '') {
    query.opportunities = {
      has: params.opportunities,
    };
  }
  return query;
};
