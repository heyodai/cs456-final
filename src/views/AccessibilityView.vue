<template>
    <!-- create a form with accessibility options -->
    <v-form>
        <!-- add a title to the form -->
        <!-- <v-icon>mdi-wheelchair-accessibility</v-icon> -->
        <v-card-title>Accessibility Options</v-card-title>
       <!-- add a contrast slider -->
       <v-slider
            v-model="accessibility_options.contrast"
            :max="100"
            :min="0"
            :step="1"
            label="Brightness"
            color="primary"
        ></v-slider>
        <v-slider
            v-model="accessibility_options.contrast"
            :max="100"
            :min="0"
            :step="1"
            label="Contrast"
            color="primary"
        ></v-slider>
        <!-- add a large text checkbox -->
        <v-checkbox
            v-model="accessibility_options.large_text"
            label="Large Text"
            color="primary"
        ></v-checkbox>
        <!-- add a high contrast checkbox -->
        <v-checkbox
            v-model="accessibility_options.high_contrast"
            label="High Contrast"
            color="primary"
        ></v-checkbox>
        <!-- add a dark mode checkbox -->
        <v-checkbox
            v-model="accessibility_options.dark_mode"
            label="Dark Mode"
            color="primary"
        ></v-checkbox>
    </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'AccessibilityView',
    data: () => ({
        accessibility_options: {
            accessible: false,
            contrast: false,
            large_text: false,
            high_contrast: false,
            dark_mode: false,
        },
    }),
})
</script>