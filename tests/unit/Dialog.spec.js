import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Dialog from '@/components/Dialog.vue';

describe('Dialog', () => {
  let localVue;
  let vuetify;
  let wrapper;
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    // to render vuetify dialog, vuetify requres the v-app component
    // so we pack our component into a "bridge" component
    const App = localVue.component('App', {
      components: { Dialog },
      data() {
        return { dialog: false };
      },
      template: `
        <v-app>
          <Dialog
            ref="dialog"
            v-model="dialog"
          />
        </v-app>
      `,
    });
    wrapper = mount(App, {
      localVue,
      vuetify,
      attachTo: document.body,
    });
  });
  it('should open dialog', async () => {
    wrapper.setData({ dialog: true });
    await wrapper.vm.$nextTick(); // we have to wait until vue rerender the components content
    expect(wrapper.find('[data-testid="dialog-close-button"]').exists()).toBe(true);
  });
});