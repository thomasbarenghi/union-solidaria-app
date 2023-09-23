export const buildQueryInitiative = (params): any => {
  const query = {} as any;

  if (params.country !== undefined && params.country !== '') {
    query.country = params.country;
  }

  if (params.province !== undefined && params.province !== '') {
    query.province = params.province;
  }

  if (params.title !== undefined && params.title !== '') {
    query.title = { $regex: params.title, $options: 'i' };
  }

  if (params.themes !== undefined && params.themes !== '') {
    query.themes = {
      $elemMatch: { $eq: params.themes },
    };
  }

  if (params.opportunities !== undefined && params.opportunities !== '') {
    query.opportunities = {
      $elemMatch: { $eq: params.opportunities },
    };
  }
  return query;
};
