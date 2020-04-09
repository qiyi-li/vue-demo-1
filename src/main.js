const Vue =window.Vue
Vue.config.productionTip = false

import Demo from './Demo.vue'

// eslint-disable-next-line no-unused-vars

new Vue({
  components:{Demo},
  data :{
    visible: true,
    n: 0
  }
  ,
  template:`
      <div>
          {{n}}
          <Demo :message="n" :fn="add"/>
      </div>
  `,
  methods:{
    add(){
      this.n +=1
    },
    toggle() {
      this.visible = !this.visible
    }
  }
}).$mount("#ergou")