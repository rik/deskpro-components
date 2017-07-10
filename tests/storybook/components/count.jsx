import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Count from '../../../src/Components/Common/Count';

storiesOf('Common', module)
  .add('Count', () => (
    <div>
      <Count>3</Count><br />
      <Count>3333</Count><br />
      <Count separator=".">3333</Count>
    </div>
  )
)
;
