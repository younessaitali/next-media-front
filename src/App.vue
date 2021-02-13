<template>
    <div class="flex flex-col justify-center items-center">
        <nav class="flex space-x-8 p-5 mt-5 text-xl font-bold">
            <router-link :to="{ name: 'Home' }" class="hover:text-green-600"
                >Home</router-link
            >
            <router-link
                :to="{ name: 'ProductForm' }"
                class="hover:text-green-600"
            >
                Create Product
            </router-link>
        </nav>
        <router-view />
    </div>
</template>

<style></style>
