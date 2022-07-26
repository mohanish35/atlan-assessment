import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ControlActionsContainer from '@/components/ControlActionsContainer.vue';

jest.mock('@/components/control-actions/ShowHistory.vue')
jest.mock('@/components/control-actions/ResetQuery.vue')
jest.mock('jsPDF', () => ({}))

describe('ControlActionsContainer.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = shallowMount(ControlActionsContainer, {
      localVue,
      vuetify,
      attachTo: document.body,
    });
  });

  it('should render the action buttons', () => {
    expect(wrapper.find('[data-testid="new-query"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="show-history"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="reset-query"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="download-table"]').exists()).toBe(true);
  });
});