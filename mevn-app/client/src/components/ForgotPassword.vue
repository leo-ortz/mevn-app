<template>
  <!--ORIGINAL JXR HTML/CSS TO GO HERE!-->
  <v-layout column>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Forgot Password</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb2">
          <form name="jxr-app-form" autocomplete="off">
            <p>
              <span>Please enter your email address. We will send you an email to reset your password.</span>
            </p>
            <v-text-field label="Email" v-model="email" placeholder="yours@example.com"></v-text-field>
          </form>
          <br/>
          <div class="error" v-html="error" />
          <br/>
          <v-btn class="cyan" @click="submit">Send Email</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>
