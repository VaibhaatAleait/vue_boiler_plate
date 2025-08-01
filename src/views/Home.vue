<template>
  <div class="p-8 bg-gray-50 min-h-full">
    <div class="bg-white rounded-2xl shadow p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">🏠 Home Dashboard</h1>
      <p class="text-gray-600 text-lg mb-6">
        Welcome to your Vue 3 Boilerplate! Everything you need to get started is ready.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-5 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200">
          <h2 class="text-xl font-semibold text-blue-800">💡 Quick Tips</h2>
          <ul class="mt-2 text-sm text-blue-700 list-disc list-inside space-y-1">
            <li>Edit this component at <code>src/views/Home.vue</code></li>
            <li>Update your layout in <code>Layout.vue</code></li>
            <li>Manage state using Pinia</li>
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200">
          <h2 class="text-xl font-semibold text-green-800">🧩 Features</h2>
          <ul class="mt-2 text-sm text-green-700 list-disc list-inside space-y-1">
            <li>Vue 3 Composition API</li>
            <li>Vite for lightning-fast dev</li>
            <li>Tailwind CSS ready</li>
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200">
          <h2 class="text-xl font-semibold text-purple-800">📚 Next Steps</h2>
          <ul class="mt-2 text-sm text-purple-700 list-disc list-inside space-y-1">
            <li>Set up authentication</li>
            <li>Build a dashboard</li>
            <li>Integrate backend API</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
