<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="v-card mb-3 py-4">
        <v-card-title class="headline">
          <h3>Create a standalone module with no integrations</h3>
        </v-card-title>
      </v-card>
      <v-card class="mb-3 py-4 d-flex justify-center">
        <v-card-text>
          Fill in the form below to download a pre-configured module ready for you to enable in Foundry VTT.
          Simply extract the zip file into the <a href="https://foundryvtt.com/article/configuration/#where-user-data" target="_blank">modules</a> directory of your Foundry instance.
          You can use this as a shortcut to creating your own <a href="https://foundryvtt.com/article/module-development/">Foundry VTT module</a>.
        </v-card-text>
      </v-card>
      <ModuleForm />
    </v-col>
  </v-row>
</template>
