<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="v-card mb-3 py-4">
        <v-card-title class="headline">
          <h3>I need <em>Help!</em></h3>
        </v-card-title>
      </v-card>
      <v-card class="v-card mb-3 py-4">
        <v-card-text>
          <p>This generator tool is meant to help content creators kick start their adventure module. Be sure to have a look at the zip file generated and adjust further as you want. You should still have a read over the <a href="https://foundryvtt.com/article/module-development/">official documentation</a> on how to create a module as it will give you a lot of helpful background knowledge.</p>
          <h4>How does this work?</h4>
          <p>The details that you fill in within the form are used to replace values within the <a href="https://github.com/sneat/starter-scene-packer">Starter Scene Packer</a> module. The release zip of that module is downloaded within your browser, extracted, edited and then re-zipped before being downloaded to your computer.</p>
          <p>None of your information is sent to the server, all processing is done client-side within your browser. View your <code>network tab</code> in your browser console (<code>F12</code>) if you wish to verify.</p>
        </v-card-text>
      </v-card>
      <v-card class="v-card mb-3 py-4 text-center">
        <v-card-text>
          <ScenePackerLogo />
          <p>You can contact me on Discord <code>blair#9056</code> in the <a href="https://discord.com/invite/HY3xhBEf2A">Scene Packer server</a> or the <code>Foundry VTT server</code> if you have questions, comments, queries, suggestions etc.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
