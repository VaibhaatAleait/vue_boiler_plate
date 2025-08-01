<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref({});
const router = useRouter();

function validateForm() {
  errors.value = {};

  if (!name.value.trim()) {
    errors.value.name = 'Full Name is required.';
  }

  if (!email.value.trim()) {
    errors.value.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Email format is invalid.';
  }

  if (!password.value) {
    errors.value.password = 'Password is required.';
  } else if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters.';
  }

  return Object.keys(errors.value).length === 0;
}

function handleSignup() {
  if (validateForm()) {
    console.log('Signing up with', name.value, email.value, password.value);
    router.push('/login');
  }
}
</script>


<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
    <div class="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-md border border-white/30">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Create Account</h2>

      <div class="space-y-4">
        <div>
          <input
            v-model="name"
            type="text"
            placeholder="Full Name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p v-if="errors.name" class="text-red-600 text-xs mt-1">{{ errors.name }}</p>
        </div>

        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p v-if="errors.password" class="text-red-600 text-xs mt-1">{{ errors.password }}</p>
        </div>

        <button
          @click="handleSignup"
          class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
        >
          Sign Up
        </button>
      </div>

      <p class="text-sm text-gray-600 text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-blue-600 font-medium hover:underline ml-1">Login</router-link>
      </p>
    </div>
  </div>
</template>
