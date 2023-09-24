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
  ];

  return baseConfig;
};
