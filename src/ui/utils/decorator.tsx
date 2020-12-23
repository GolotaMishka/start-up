import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decorator = (Story) => [
  () => (
    <div>
      <Story />
    </div>
  ),
];
