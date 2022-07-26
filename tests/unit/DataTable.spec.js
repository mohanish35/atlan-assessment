import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex'
import DataTable from '@/components/DataTable.vue';

import { getHeaders } from '../mockData/tableData';

const headers = getHeaders()
const filterableHeaders = headers.slice(0, 3)

describe('DataTable.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        headers,
      },
    })

    const vuetify = new Vuetify();
    
    wrapper = mount(DataTable, {
      data: () => ({
        search: '',
        filterableHeaders
      }),
      store,
      localVue,
      vuetify,
      attachTo: document.body,
    });
  });

  it('should render data table with title Pokedex', () => {
    expect(wrapper.text()).toContain('Pokedex')
    expect(wrapper.find('[data-testid="data-table"]').exists()).toBe(true);
  });

  it('should getHeadersWithFilterRestrictions return headers with filter restrictions applied', () => {
    const filterableHeaders = wrapper.vm.filterableHeaders
    const headersWithFilterRestrictions = wrapper.vm.getHeadersWithFilterRestrictions

    expect(headersWithFilterRestrictions.every(header => {
      if (filterableHeaders.includes(header.value))
        return !Boolean(header.filterable)

      return true
    }))
      .toBe(true)
  });
});