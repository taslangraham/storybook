import { Component, Prop, Vue } from 'vue-property-decorator';
import { Story, StoryProp, } from '@/modules/story';
import { DEFAULT_MODULE } from '@/modules/constants';


@Story({
  module: DEFAULT_MODULE,
  description: 'Tester States'
})


@Component({
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
    values: []
  })

  @Prop({})


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