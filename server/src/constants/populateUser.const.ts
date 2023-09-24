// config/populate-config.ts
interface PopulateConfig {
  path: string;
  model?: string;
  populate?: PopulateConfig[];
  select?: string;
}

export const populateUser = (withVolunteers = false, withReviews = false) => {
  const baseConfig: PopulateConfig[] = [
    {
      path: 'initiatives',
      model: 'Initiative',
    },
    {
      path: 'favorites',
      model: 'Initiative',
    },
    {
      path: 'posts',
      model: 'Post',
    },
    {
      path: 'reviews',
      model: 'Review',
    },
  ];

  if (withVolunteers) {
    // Si withVolunteers es true, incluir población adicional
    baseConfig[0].populate = [
      {
        path: 'volunteers',
        populate: [
          {
            path: 'user',
            model: 'User',
          },
        ],
      },
    ];
  }

  if (withReviews) {
    // Si withReviews es true, incluir población adicional
    baseConfig[3].populate = [
      {
        path: 'author',
        model: 'User',
        select: 'username firstName lastName email profileImage',
      },
      {
        path: 'initiativeOwner',
        model: 'User',
        select: 'username firstName lastName email profileImage _id orgName',
      },
      {
        path: 'initiative',
        model: 'Initiative',
        select: 'title _id thumbnail',
      },
    ];
  }

  return baseConfig;
};
