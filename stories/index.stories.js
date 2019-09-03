import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Button from '../src/button';
import TopBar from '../src/shared_components/topBar';
import TopBarView from './components/topBarView';

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') }
  }))
  .add('with some emoji', () => ({
    Component: Button,
    props: {
      text: '😀 😎 👍 💯'
    },
    on: { click: action('clicked') }
  }));

storiesOf('TopBar', module)
  .add('TopBar', () => ({
    Component: TopBar,
    props: {
      title: 'Top Bar Component'
    }
  }))
  .add('Top Bar with menu', () => ({
    Component: TopBarView,
    props: {
      title: 'Top Bar Component'
    }
  }));
