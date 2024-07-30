<script setup lang="ts">
definePageMeta({
    layout: 'landing',
    auth: false,
});

const features = [
    {
        title: 'Nuxt Architecture',
        description: 'Harness the full power of Nuxt 3 and its modules ecosystem.',
        icon: 'i-simple-icons-nuxtdotjs'
    },
    {
        title: 'Vue Components',
        description: 'Use built-in components (or your own!) inside your content.',
        icon: 'i-simple-icons-vuedotjs'
    },
    {
        title: 'Modular development',
        description: 'Build your application in a modular way, using Nuxt\'s powerful layering system.',
        icon: 'i-heroicons-rectangle-group'
    },
    {
        title: 'Elegant Design',
        description: 'Craft beautiful sites with NuxtUI and Headless UI components. Built with TailwindCSS and mobile first.',
        icon: 'i-heroicons-paint-brush'
    },
    {
        title: 'JWT Auth, ACL, etc',
        description: 'Uno Admin provides extendable JWT auth which can be configured easily and provides ready to use ACL.',
        icon: 'i-simple-icons-jsonwebtokens'
    },
    {
        title: 'Deploy anywhere',
        description: 'Zero config to deploy on Vercel or Netlify. Uno Admin is carefully crafted and ready for production.',
        icon: 'i-heroicons-rocket-launch'
    },
]


</script>
<template>
    <section>
        <div class="max-w-screen-xl mx-auto px-4 py-16 gap-12 md:px-8">
            <div class="space-y-5 max-w-4xl mx-auto text-center">
                <h1
                    class="text-3xl font-extrabold mx-auto md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#166534]">
                    Welcome to Uno Admin
                </h1>
                <h2 class="text-4xl font-extrabold mx-auto md:text-5xl"> Build your Application with the best </h2>
                <p class="max-w-2xl mx-auto"> Best opensource admin template. Built on top of Nuxtjs and Nuxt UI, Its
                    flexibility, developer-friendly, modular, feature-rich, and highly customizable.</p>
                <div class="items-center justify-center gap-3 flex">
                    <UButton to="/dashboard" size="lg">Get Started</UButton>
                    <!-- <UButton icon="i-heroicons-star" target="_blank" to="/" size="lg" variant="outline" color="yellow">
                        Get Pro
                    </UButton> -->
                    <UButton target="_blank" to="https://uno-admin-docs.vercel.app/" size="lg" variant="outline"
                        color="gray">Docs
                    </UButton>
                </div>
            </div>

        </div>
    </section>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-center md:px-8">
            <div class="max-w-2xl mx-auto">
                <h3 class="text-3xl font-semibold sm:text-4xl"> The fastest way to create a application </h3>
                <p class="mt-3"> All the features you need to start your app! </p>
            </div>
            <div class="mt-12">
                <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    <li v-for="(feature, key) in features" :key class="space-y-3">
                        <div
                            class="w-12 h-12 mx-auto bg-primary/10 text-primary-600 text-3xl rounded-full flex items-center justify-center">
                            <UIcon :name="feature.icon" />
                        </div>
                        <h4 class="text-lg font-semibold">{{ feature.title }}</h4>
                        <p class="text-slate-700">{{ feature.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">

                <!-- Pricing Card -->
                <div
                    class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Free Version</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for
                        your next project.</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$0</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Free forever (MIT License)</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Lifetime free updates</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Community support</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Documentation</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Free Components</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>Example Pages (LandPage, Auth Pages, Dasboard, Account, Error)</span>
                        </li>
                    </ul>
                    <UButton to="https://github.com/jotadevelopers/uno-admin" color="purple" block size="lg">Get started
                    </UButton>

                </div>
                <!-- Pricing Card -->
                <div
                    class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Pro Version</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and
                        extended redistribution rights.</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">$69</span>
                    </div>
                    <!-- List -->
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>All in free version</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span>12 Months Support & Updates</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span> Personal or Commercial Use </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span> Pro Dashboards </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span> Pro Components </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <UIcon name="i-heroicons-check-badge-16-solid" class="text-green-500" />
                            <span> Modules (Security, Email, Calendar) </span>
                        </li>
                    </ul>
                    <UButton color="purple" disabled block size="lg">Come soon</UButton>

                </div>
            </div>
        </div>
    </section>
</template>