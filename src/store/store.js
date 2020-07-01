import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({

    state: {

        products: [{
                id: 1,
                name: "heelo",
                price: 20
            },
            {
                id: 2,
                name: "heelo2",
                price: 202
            }
        ]
    },
    getters:{

        saleProducts:state=>{

            var saleProducts = state.products.map(product =>{
            console.log(product);

        return {
          id:product.id,
          name:'****'+ product.name +'****',
          price:product.price/2,
        }
      });
      return saleProducts;
        }
    },
    mutations: {
        reducePrice:(state,payload) => {
            state.products.forEach( product => {
                product.price -= payload
            });
        }
    },
    actions:{
        
        reducePrice:(context,payload)=>{

            setTimeout(() => {
                context.commit('reducePrice',payload);
            }, 2000);
        }

    }

});