import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import HistoryActionsContainer from '@/components/HistoryActionsContainer.vue';

describe('HistoryActionsContainer.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(HistoryActionsContainer, {
      localVue,
      vuetify,
      attachTo: document.body,
    });
  });

  it('should render the action buttons', () => {
    expect(wrapper.find('[data-testid="fire-historical-query"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="copy-historical-query"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="delete-historical-query"]').exists()).toBe(true);
  });
});