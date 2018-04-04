import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MatrixEffect } from '../dist/index';

storiesOf('MatrixEffect', module)
  .add('100x100', () => 
    <MatrixEffect height={100} width={100} />
  );
