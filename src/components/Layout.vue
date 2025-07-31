<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md hidden md:block">
     <div class="p-4 text-lg font-bold bg-gray-50">Sidebar</div>

      <nav class="p-4 space-y-2">
        <RouterLink to="/home" class="block px-2 py-1 hover:bg-gray-200 rounded">Home</RouterLink>
        <RouterLink to="/about" class="block px-2 py-1 hover:bg-gray-200 rounded">About</RouterLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">My App</h1>

        <!-- Desktop links -->
        <div class="hidden md:flex space-x-4">
          <RouterLink to="/home" class="hover:text-blue-600">Profile</RouterLink>
          <RouterLink to="/login" class="hover:text-blue-600">Logout</RouterLink>
        </div>

        <!-- Mobile dropdown -->
        <div class="md:hidden">
          <details class="relative">
            <summary class="cursor-pointer text-blue-600 list-none appearance-none outline-none">☰</summary>
            <div class="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <RouterLink to="/home" class="block px-4 py-2 hover:bg-gray-100">Home</RouterLink>
              <RouterLink to="/about" class="block px-4 py-2 hover:bg-gray-100">about</RouterLink>
              <RouterLink to="/home" class="block px-4 py-2 hover:bg-gray-100">Profile</RouterLink>
              <RouterLink to="/login" class="block px-4 py-2 hover:bg-gray-100">Logout</RouterLink>
            </div>
          </details>
        </div>
      </header>

      <!-- Slot for child page -->
     <main class="flex-1 h-full p-6 bg-gray-100 overflow-y-auto overflow-x-hidden">

        <router-view />
      </main>
    </div>
  </div>
</template>

