import Vue from 'vue'
import Router from 'vue-router'
import TableBlock from '@/components/TableBlock'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TableBlock',
      component: TableBlock
    }
  ]
})
