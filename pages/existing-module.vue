<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="v-card mb-3 py-4">
        <v-card-title class="headline">
          <h3>Update your existing module and add Scene Packer integration</h3>
        </v-card-title>
      </v-card>
      <v-card>
        <v-card-text>
          <v-form ref="form" class="mx-2" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-file-input v-model="file" label="Existing module.json file" />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="adventureName" label="Adventure Name" disabled />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="moduleName" label="Module Name" disabled />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
