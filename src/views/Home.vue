<template>
    <div
        v-for="(product, index) in products"
        :key="index"
        class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10"
    >
        <div class="px-4 py-2">
            <h1 class="text-gray-900 font-bold text-3xl uppercase">NIKE AIR</h1>
            <p class="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos quidem sequi illum facere recusandae voluptatibus
            </p>
        </div>
        <img
            class="h-56 w-full object-cover mt-2"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="NIKE AIR"
        />
        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-gray-200 font-bold text-xl">$129</h1>
            <button
                class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
            >
                Add to card
            </button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
    name: "Home",
    components: {},
    created() {
        this.$store.dispatch("Product/fetchProducts");
        console.log(this.products);
    },
    computed: {
        ...mapGetters("Product", {
            products: "getProduct"
        })
    }
};
</script>
