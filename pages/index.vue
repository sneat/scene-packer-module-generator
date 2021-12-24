<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo mb-3 py-4 d-flex justify-center">
        <FVTTLogo />
        <Logo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Scene Packer module generator
        </v-card-title>
        <v-card-text>
          <p>This generator will help you create a <a href="https://foundryvtt.com/">Foundry VTT</a> module that is initialised with <a href="https://foundryvtt.com/packages/scene-packer">Scene Packer</a>.</p>
          <p>Select below to create a <code>New Module</code> with Scene Packer initialised, or a <code>Standalone Module</code> that has no integrations.</p>
          <p>
            The generator works entirely
            <NuxtLink to="/help">client-side</NuxtLink>, nothing is transferred to the server. Your secrets are safe with you! <NuxtLink to="/help">Need help?</NuxtLink>
          </p>
          <p>If you are looking to create a <code>Shared Compendium Module</code> to share actors/items/journals between your worlds, select the <code>New Module</code> option below.</p>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn
            color="secondary"
            nuxt
            to="/existing-module"
          >
            Existing module
          </v-btn> -->
          <v-btn
            color="secondary"
            nuxt
            to="/standalone-module"
          >
            Standalone module
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/new-module"
          >
            New module
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
