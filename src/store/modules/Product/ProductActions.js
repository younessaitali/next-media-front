/* eslint-disable */
import ProductService from "@/services/product.service";

export default {
    async fetchProducts({ commit }, flitters) {
        try {
            const response = await ProductService.getProducts();
            commit("SET_PRODUCTS", response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
};
