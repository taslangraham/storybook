import { Component, Prop, Vue } from 'vue-property-decorator';
import { Story, StoryProp, StoryComponent } from '@/modules/story';
import { DEFAULT_MODULE } from '@/modules/constants';


@StoryComponent({
  module: DEFAULT_MODULE,
  description: 'Tester States',
  api: true,
  playground: true
},
  {
    components: {
    },
    name: 'tester',
  })


class Tester extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Props
  // --------------------------------------------------------------------------
  @StoryProp({
    description: '',
    values: ['Card Title', 'New Levels']
  })

  @Prop({ type: String, default: '' }) private text!: string;



  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------



  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Tester as default,
  Tester,
};
