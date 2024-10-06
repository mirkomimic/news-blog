<template>
  <GuestLayout>

    <Head title="Register" />

    <div class="h-screen d-flex justify-center ">
      <v-sheet class="d-flex flex-column justify-center my-auto pa-5" height="500" width="700" rounded>
        <div class="text-h4 text-center text-uppercase mt-5">Register</div>
        <v-form @submit.prevent="submit">
          <v-row class="pa-4 mt-3">
            <v-col
              class="mx-auto"
              cols="12"
              md="8"
            >
              <div class="mx-auto">
                <v-text-field
                  v-model="form.name"
                  :rules="passwordRules"
                  :error-messages="form.errors.name"
                  label="Name"
                  variant="underlined"
                  base-color="" 
                  color=""
                />
              </div>

              <div class="mx-auto">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  :error-messages="form.errors.email"
                  label="Email"
                  variant="underlined"
                  base-color="" color=""
                />
              </div>

              <div class="mx-auto">
                <v-text-field
                  v-model="form.password"
                  :rules="passwordRules"
                  :error-messages="form.errors.password"
                  label="Password"
                  variant="underlined"
                  base-color="" color=""
                  :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append-inner="show1 = !show1"
                />
              </div>

              <div class="mx-auto">
                <v-text-field
                  v-model="form.password_confirmation"
                  :rules="[passwordConfirationRule]"
                  :error-messages="form.errors.password_confirmation"
                  label="Password confirmation"
                  variant="underlined"
                  base-color="" color=""
                  :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  @click:append-inner="show2 = !show2"
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
                  Register
                </v-btn>
              </div>

              <div class="mx-auto mt-5 text-center">
                <Link
                  :href="route('login')"
                >
                  Already have an account? Log in.
                </Link>
              </div>

            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </div>
  </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};

const passwordRules = [
  value => {
    if (value) return true

    return 'The password field is required.'
  },
  // value => {
  //   if (value?.length <= 10) return true

  //   return 'Name must be less than 10 characters.'
  // },
];

const passwordConfirationRule = computed(() => {
  return form.password_confirmation === form.password || 'Password must match'
})

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