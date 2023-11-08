// config/populate-config.ts
interface PopulateConfig {
  path: string;
  model?: string;
  populate?: PopulateConfig[] | PopulateConfig;
  select?: string;
}

export const populateInitiative = () => {
  const baseConfig: PopulateConfig[] = [
    {
      path: 'volunteers',
      populate: {
        path: 'user',
        model: 'User',
      },
    },
    {
      path: 'owner',
      model: 'User',
    },
    {
      path: 'posts',
      model: 'Post',
      populate: [
        {
          path: 'author',
          model: 'User',
          select: 'username firstName lastName orgName email profileImage _id ',
        },
        {
          path: 'initiative',
          model: 'Initiative',
          select: 'title _id thumbnail',
        },
      ],
    },
    {
      path: 'reviews',
      model: 'Review',
    },
  ];

  return baseConfig;
};
