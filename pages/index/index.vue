<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="text-teal-500 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                    Uno Admin</h1>
                <h3
                    class="max-w-2xl mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">
                    A nuxtjs admin template.</h3>

                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Best opensource admin template. Built on top of Nuxtjs and Nuxt UI, Its
                    flexibility, developer-friendly, modular,
                    feature-rich, and highly customizable.</p>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <UButton :ui="{ rounded: 'rounded-full' }" to="https://github.com/jotadevelopers/uno-admin">Get free
                        version</UButton>
                    <!-- <UButton color="purple" variant="outline" :ui="{ rounded: 'rounded-full' }">Get pro version
                    </UButton> -->
                    <UButton to="/login" color="gray" variant="outline" :ui="{ rounded: 'rounded-full' }">View Demo
                    </UButton>
                    <UButton to="/docs" color="gray" variant="outline" :ui="{ rounded: 'rounded-full' }">Docs</UButton>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="@/assets/hero.png" alt="hero image">
            </div>
        </div>
    </section>
    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <!-- Row -->
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Work with
                        tools you already use</h2>
                    <p class="font-light lg:text-xl">If you are a developer looking for a Nuxt UI-based admin
                        template, the Uno Admin is the ideal choice. Its flexibility will allow you to create
                        any application you
                        desire, such as:</p>
                    <!-- List -->
                    <ul role="list" class="pt-4 space-y-5 my-7 dark:border-gray-700">
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                SaaS platforms</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                Project management apps</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                eCommerce backends</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                CRM systems</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                Educational apps</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <span class="bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <UIcon name="i-heroicons-check-circle-16-solid" />
                            </span>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                & many more…</span>
                        </li>

                    </ul>
                    <p class="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the
                        complexity of traditional solutions.</p>
                </div>
                <img class="hidden w-full mb-4 rounded-lg shadow-md lg:mb-0 lg:flex" src="@/assets/dashboard.png"
                    alt="dashboard feature image">
            </div>
            <!-- Row -->

        </div>
    </section>
    <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div class="text-center">
                <a href="#"
                    class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src="@/assets/logo.png" class="h-6 mr-3 sm:h-9" alt="Landwind Logo">
                    Uno Admin
                </a>
                <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 UnoAdmin™. All
                    Rights Reserved. Built with <a href="https://nuxt.com"
                        class="text-purple-600 hover:underline dark:text-purple-500">Nuxtjs</a> and <a
                        href="https://ui.nuxt.com" class="text-purple-600 hover:underline dark:text-purple-500">Nuxt
                        UI</a>. Distributed by <a href="https://github.com/jotadevelopers"
                        class="text-purple-600 hover:underline dark:text-purple-500">Jotadevelopers</a>
                </span>
            </div>
        </div>
    </footer>
</template>