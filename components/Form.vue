<template>
  <v-form ref="form" v-model="isFormValid">
    <v-card class="mb-3 py-4 d-flex justify-center">
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model.trim="adventureName"
              label="Adventure Name*"
              placeholder="My cool adventure module"
              hint="The name of your adventure module as seen by end users."
              :rules="[rules.required]"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model.trim="moduleName"
              label="Module Name*"
              placeholder="my-cool-adventure-module"
              hint="All lowercase, no special characters, use hyphons instead of spaces or periods."
              :rules="[rules.required, rules.moduleName]"
              required
            >
              <template #append-outer>
                <v-tooltip
                  top
                >
                  <template #activator="{ on }">
                    <v-icon
                      v-on="on"
                      @click="doSlug"
                    >
                      mdi-format-letter-case-lower
                    </v-icon>
                  </template>
                  Convert to lower case
                </v-tooltip>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model.trim="description"
              label="Module Description*"
              placeholder="A short description of the adventure module. Use this field to give an overview of your adventure, or to describe when or where your module should be used."
              hint="This text can be used to describe the adventure, list contact information, or any other information you feel is important to provide."
              :rules="[rules.required]"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model.trim="author"
              label="Author Name*"
              placeholder="John Smith"
              hint="The name you want people to know you by."
              :rules="[rules.required]"
              required
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model.trim="discord"
              label="Discord ID"
              placeholder="JohnSmith#1234"
              hint="Optional. If you want your Discord ID to be shown in your module details."
              :rules="[rules.discord]"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model.trim="url"
              label="Module URL"
              placeholder="https://example.com/my-cool-adventure-module"
              hint="Optional. A public URL that links to more information about your adventure module."
              :rules="[rules.url]"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex py-0">
            <p>
              Include Compendium Packs:
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-help
                  </v-icon>
                </template>
                <span>Choose the compendium packs that you want your module to contain.</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col cols="12" class="d-flex flex-wrap pt-0">
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Scenes" value="Scene" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Actors" value="Actor" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Journals" value="JournalEntry" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Items" value="Item" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Roll Tables" value="RollTable" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Macros" value="Macro" />
            <v-checkbox v-model="packs" class="px-2 pt-0" label="Playlists" value="Playlist" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model.trim="welcomeJournal"
              label="Welcome Journal"
              placeholder="Introduction"
              hint="Optional. The name (case sensitive) of a Journal entry you want to be automatically shown to the end user when they first import your adventure module."
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex py-0">
            <p>
              Additional Journals to Import:
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-help
                  </v-icon>
                </template>
                <span>The (case sensitive) name of any additional Journal entries you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(input, index) in additionalJournals"
            :key="`additionalJournal-${index}`"
            cols="3"
            class="py-0"
          >
            <v-text-field
              v-model.trim="input.value"
              label="Journal name"
              placeholder="Credits"
              hint="Optional. The (case sensitive) name of a Journal entry you want to automatically be imported."
              class="py-0"
            />
          </v-col>
          <v-col cols="1">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-icon
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="addField(additionalJournals)"
                >
                  mdi-plus
                </v-icon>
              </template>
              <span>Add another Journal to automatically import.</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex py-0">
            <p>
              Additional Macros to Import:
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-help
                  </v-icon>
                </template>
                <span>The (case sensitive) name of any additional Macros you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(input, index) in additionalMacros"
            :key="`additionalMacros-${index}`"
            cols="3"
            class="py-0"
          >
            <v-text-field
              v-model.trim="input.value"
              label="Macro name"
              placeholder="My Macro"
              hint="Optional. The (case sensitive) name of a Macro you want to automatically be imported."
              class="py-0"
            />
          </v-col>
          <v-col cols="1">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-icon
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="addField(additionalMacros)"
                >
                  mdi-plus
                </v-icon>
              </template>
              <span>Add another Macro to automatically import.</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex py-0">
            <p>
              Additional Actor packs to search within:
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-help
                  </v-icon>
                </template>
                <span>List any additional compendium actor pack names to search within when importing and linking an actor. The list is searched progressively, with your actor pack being checked first. Empty the field if you aren't wanting D&amp;D 5e.</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(input, index) in creaturePacks"
            :key="`creaturePacks-${index}`"
            cols="3"
            class="py-0"
          >
            <v-text-field
              v-model.trim="input.value"
              label="Pack name"
              placeholder="pf2e.pathfinder-bestiary"
              hint="The compendium pack name."
              class="py-0"
            />
          </v-col>
          <v-col cols="1">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-icon
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="addField(creaturePacks)"
                >
                  mdi-plus
                </v-icon>
              </template>
              <span>Add another actor compendium to automatically search within.</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-3 py-4 d-flex justify-center">
      <v-card-actions>
        <v-btn
          color="primary"
          :disabled="!isFormValid || processing"
          :loading="processing"
          @click="generate"
        >
          Download Module
          <v-icon
            right
            dark
          >
            mdi-cloud-download
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-progress-linear
        :active="processing"
        indeterminate
        absolute
        top
      />
    </v-card>
  </v-form>
</template>

<script>
import * as fflate from 'fflate'
import * as slugify from 'slugify'
const discordPattern = /^[^#@:]{2,32}#[0-9]{4}$/

export default {
  data () {
    return {
      adventureName: '',
      moduleName: '',
      description: '',
      author: '',
      discord: '',
      patreon: '',
      url: '',
      packs: ['Scene', 'Actor', 'JournalEntry', 'Item', 'RollTable', 'Macro', 'Playlist'],
      welcomeJournal: '',
      additionalJournals: [{ value: '' }],
      additionalMacros: [{ value: '' }],
      creaturePacks: [{ value: 'dnd5e.monsters' }],
      isFormValid: false,
      processing: false,
      loader: null,
      rules: {
        required: value => !!value || 'Required.',
        moduleName: value => value === slugify(value).toLowerCase() || 'All lowercase, no special characters, use hyphons instead of spaces.',
        discord: value => !value || discordPattern.test(value) || 'Invalid Discord ID.',
        url: value => !value || this.isURL(value) || 'Invalid Module URL.'
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    async generate () {
      this.processing = true
      try {
        const defaultModuleBuffer = await fetch('https://cors-anywhere.ardittristan.workers.dev/corsproxy/?apiurl=https://github.com/sneat/starter-scene-packer/releases/latest/download/starter-scene-packer.zip')
        const defaultModule = new Uint8Array(await defaultModuleBuffer.arrayBuffer())
        const data = fflate.unzipSync(defaultModule)

        const moduleJSON = JSON.parse(Buffer.prototype.toString.call(data['module.json'], 'utf8'))
        moduleJSON.author = this.author
        const authorDetails = {
          name: this.author
        }
        if (this.patreon) {
          authorDetails.patreon = this.patreon
        }
        if (this.discord) {
          authorDetails.discord = this.discord
        }
        moduleJSON.authors = [authorDetails]
        moduleJSON.title = this.adventureName
        moduleJSON.description = this.description
        moduleJSON.name = this.moduleName
        moduleJSON.version = '1.0.0'
        moduleJSON.url = this.url
        moduleJSON.download = ''
        moduleJSON.manifest = ''
        delete moduleJSON.media
        moduleJSON.packs = moduleJSON.packs.filter(pack => this.packs.includes(pack.entity))
        moduleJSON.packs.forEach((pack) => {
          pack.label = this.adventureName
        })
        data['module.json'] = fflate.strToU8(JSON.stringify(moduleJSON, null, 2))

        const creaturePacks = this.packs.includes('Actor') ? [`${this.moduleName}.actors`, ...this.creaturePacks.map(a => a.value)] : []
        const journalPacks = this.packs.includes('JournalEntry') ? [`${this.moduleName}.journals`] : []
        const macroPacks = this.packs.includes('Macro') ? [`${this.moduleName}.macros`] : []
        const playlistPacks = this.packs.includes('Playlist') ? [`${this.moduleName}.playlists`] : []

        const scriptJS = Buffer.prototype.toString.call(data['scripts/init.js'], 'utf8')
          .replace(/const adventureName = '.+';/, `const adventureName = '${this.escapeSingleQuotes(this.adventureName)}';`)
          .replace(/const moduleName = '.+';/, `const moduleName = '${this.moduleName}';`)
          .replace(/const welcomeJournal = '.+';/, `const welcomeJournal = '${this.escapeSingleQuotes(this.welcomeJournal)}';`)
          .replace(/const additionalJournals = \[.+\];/, `const additionalJournals = ${JSON.stringify(this.additionalJournals.filter(j => j.value).map(j => j.value))};`)
          .replace(/const additionalMacros = \[.+\];/, `const additionalMacros = ${JSON.stringify(this.additionalMacros.filter(j => j.value).map(j => j.value))};`)
          .replace(/const creaturePacks = \[.+\];/, `const creaturePacks = ${JSON.stringify(creaturePacks)};`)
          .replace(/const journalPacks = \[.+\];/, `const journalPacks = ${JSON.stringify(journalPacks)};`)
          .replace(/const macroPacks = \[.+\];/, `const macroPacks = ${JSON.stringify(macroPacks)};`)
          .replace(/const playlistPacks = \[.+\];/, `const playlistPacks = ${JSON.stringify(playlistPacks)};`)
        data['scripts/init.js'] = fflate.strToU8(scriptJS)

        const zipped = fflate.zipSync(data)
        const blob = await new Response(zipped).blob()
        this.download(blob)

        this.processing = false
      } catch (e) {
        this.processing = false
        throw e
      }
    },
    download (blob) {
      const filename = `${this.moduleName}.zip`

      if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // IE doesn't allow using a blob object directly as link href.
      // Workaround for "HTML7007: One or more blob URLs were
      // revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing
      // the URL has been freed."
        window.navigator.msSaveBlob(blob, filename)
        return
      }

      // Create a link pointing to the ObjectURL containing the blob
      const blobURL = URL.createObjectURL(blob)
      const tempLink = document.createElement('a')
      tempLink.style.display = 'none'
      tempLink.setAttribute('href', blobURL)
      tempLink.setAttribute('download', filename)
      // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows you to download files in desktop safari if pop up blocking
      // is enabled.
      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
      }
      tempLink.click()

      setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
        URL.revokeObjectURL(blobURL)
      }, 200)
    },
    doSlug () {
      const moduleName = this.moduleName || this.adventureName
      this.moduleName = slugify(moduleName).toLowerCase()
    },
    escapeSingleQuotes (str) {
      return str.replace("'", "\\'").replace('\\', '\\\\')
    },
    isURL (str) {
      let url

      try {
        url = new URL(str)
      } catch (_) {
        return false
      }

      return url.protocol === 'http:' || url.protocol === 'https:'
    },
    addField (fieldType) {
      fieldType.push({ value: '' })
    }
  }
}
</script>
