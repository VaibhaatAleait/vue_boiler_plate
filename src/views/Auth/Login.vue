<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const router = useRouter();

function validateEmailFormat(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
}

function handleLogin() {
  emailError.value = '';
  passwordError.value = '';

  if (!email.value) {
    emailError.value = 'Email is required.';
  } else if (!validateEmailFormat(email.value)) {
    emailError.value = 'Enter a valid email address.';
  }

  if (!password.value) {
    passwordError.value = 'Password is required.';
  }

  if (!emailError.value && !passwordError.value) {
    console.log('Logging in with', email.value, password.value);
    router.push('/home');
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
    <div class="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-md border border-white/30">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
        Welcome Back <span class="inline-block animate-wave">👋</span>
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Email address"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            :class="{ 'border-red-500': emailError }"
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            :class="{ 'border-red-500': passwordError }"
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</p>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign In
        </button>
      </form>

      <p class="text-sm text-gray-600 text-center mt-4">
        Don’t have an account?
        <router-link to="/signup" class="text-blue-600 font-medium hover:underline ml-1">Create one</router-link>
      </p>
    </div>
  </div>
</template>

