export interface NavigationProps {
  categories: [
    {
      node: {
        name: string;
        slug: string;
        children: {
          nodes: [
            {
              slug: string;
              name: string;
            }
          ];
        };
        ancestors: {
          nodes: [
            {
              slug: string;
              name: string;
            }
          ];
        };
      };
    }
  ];
}
