<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
  status: {
    type: String,
  },
});

const form = useForm({
  email: '',
});

const submit = () => {
  form.post(route('password.email'));
};

const emailRules = [
  value => {
    if (value) return true

    return 'The email field is required.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'The email field must be a valid email address.'
  },
]

</script>

<template>
  <GuestLayout>
    <Head title="Forgot Password" />

    <div v-if="status" class="">
        {{ status }}
    </div>

    <div class="h-screen d-flex justify-center ">
      <v-sheet class="d-flex flex-column justify-center my-auto pa-5" height="500" width="700" rounded>
        <div class="">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset
          link that will allow you to choose a new one.
        </div>
        <v-form @submit.prevent="submit">
          <v-row class="pa-4 mt-3">
            <v-col
              class="mx-auto"
              cols="12"
              md="8"
            >
            <div class="mx-auto">
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                :error-messages="form.errors.email"
                label="Email"
                variant="underlined"
                base-color="" 
                color=""
              />
            </div>

            <div class="mx-auto d-flex mt-8">
              <v-btn
                type="submit"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                class="mx-auto"
                variant="tonal"
                color=""
              >
                Email Password Reset Link
              </v-btn>
            </div>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </div>
  </GuestLayout>
</template>