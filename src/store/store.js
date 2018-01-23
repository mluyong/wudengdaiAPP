import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
	state: {
		newReport: ""
	},
	getters: {
		// saleProducts: (state) => {
		// 	Vue.http.get("http://192.168.2.178:53960/api/news?PageIndex=1&PageSize=3&newsTypeID=0")
		// 		.then(data => {
		// 			state.newReport = data.body.Data.Data;
		// 			console.log(state.newReport)
		// 		}, err => {
		// 			console.log(err);
		// 		});
		// },
	
	},
	// mutations: {
	// 	reducePrice: (state, payload) => {
	// 		// setTimeout(function(){
	// 		state.products.forEach(product => {
	// 			product.price -= payload;
	// 		})
	// 		// },3000);
	// 	}
	// },
	// actions: {
	// 	reducePrice: (context, payload) => {
	// 		setTimeout(function () {
	// 			context.commit("reducePrice", payload);
	// 		}, 2000);
	// 	}
	// }
});
