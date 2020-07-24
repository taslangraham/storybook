import Tester from './tester.vue';
import { Category, previewOf } from '../../../.storybook/modules';

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const preview = previewOf(Tester, Category.COMPONENT)
  // You can add mutiple examples
  .addExample(
    {
      title: 'Standard - Tester Component',
      description: 'This is the standard Tester component with title',
      styles: ''
    },

    // add snippet of component use here
    `
    <tester text="Hello world"/>
    `,
  )
  .addExample(
    {
      title: 'Standard - Tester Component',
      description: 'This is the standard without title',
      styles: ''
    },

    // add snippet of component use here
    `
    <tester />
    `,
  )
  .render();

export { preview as default, preview as Tester };

