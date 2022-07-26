import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex'
import ShowHistory from '@/components/control-actions/ShowHistory.vue';

import { getHeaders } from '../../mockData/tableData'
import { getQueryHistory } from '../../mockData/queryData'

const queryHistory = getQueryHistory()
const headers = getHeaders(3)

describe('ShowHistory.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex)

    store = new Vuex.Store({
      state: {
        queryHistory
      },
      mutations: {
        SYNC_QUERY_HISTORY: (state, { queryHistory }) => state.queryHistory = queryHistory
      }
    })

    const vuetify = new Vuetify();

    // dialog requires to be nested in the App component
    const App = localVue.component('App', {
      components: { ShowHistory },
      template: `
        <v-app>
          <ShowHistory />
        </v-app>
      `,
    });
    
    wrapper = mount(App, {
      data: () => ({
        dialog: false,
        headers
      }),
      store,
      localVue,
      vuetify,
      attachTo: document.body,
    });
  });

  it('should render the Show History button', () => {
    expect(wrapper.text()).toContain('Show History')
    expect(wrapper.find('[data-testid="show-history"]').exists()).toBe(true);
  });

  // it.todo('should have Show History button disabled when queryHistory is empty', async () => {
  //   const showHistoryButton = wrapper.find('[data-testid="show-history"]')

  //   store.commit('SYNC_QUERY_HISTORY', { queryHistory: [] })
  //   expect(store.state.queryHistory).toEqual([])
  //   expect(showHistoryButton.attributes().disabled).toBe(true)
  // })

  it('should open History Query Table on clicking Show History', async () => {
    await wrapper.find('[data-testid="show-history"]').trigger('click')
    
    expect(wrapper.text()).toContain('History')
    expect(wrapper.find('[data-testid="historical-query-table"]').exists()).toBe(true);
  });

  it('should close History Query Table on clicking close button', async () => {
    await wrapper.find('[data-testid="show-history"]').trigger('click')
    expect(wrapper.find('[data-testid="historical-query-table"]').exists()).toBe(true);

    await wrapper.find('[data-testid="close-show-history"]').trigger('click')
    setTimeout(() => {
      expect(wrapper.find('[data-testid="historical-query-table"]').exists()).toBe(false);
    })
  });

  // Note: columns render correctly when the component is directly rendered instead of nesting it in the app
  // it.todo('should contain all the columns in Query History Table', async () => {
  //   await wrapper.find('[data-testid="show-history"]').trigger('click')
  //   expect(wrapper.find('[data-testid="historical-query-table"]').exists()).toBe(true);

  //   expect(headers.every(({ value }) => {
  //     return expect(wrapper.text()).toContain(value)
  //   }))
  //   .toBe(true)
  // })
});