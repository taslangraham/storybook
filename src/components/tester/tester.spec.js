import { shallowMount } from '@vue/test-utils';
import Tester from './tester.vue';

describe('Tester.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Tester);

    expect(wrapper.exists()).toEqual(true);
  });
});
