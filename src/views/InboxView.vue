<template>
    <v-list flat subheader>
        <v-subheader>
            <v-btn color="green" dark fab small>
                <v-icon>mdi-inbox</v-icon>
            </v-btn>
            <span class="ml-2 text-h5">Inbox</span>
        </v-subheader>

        <v-divider></v-divider>

        <v-list-item v-for="task in get_tasks()" :key="task.id" link>
            <v-list-item-action>
                <v-checkbox color="primary" hide-details></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title>{{ task.description }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
  
<script lang="ts">
import Vue from 'vue'
import store from '../store'

export default Vue.extend({
    name: 'InboxView',

    methods: {
        get_tasks() {
            let item_array: any = []
            store.tasks.forEach(item => {
                if (item.project == 'inbox') {
                    item_array.push(item)
                }
            })
            return item_array
        },
    }
})
</script>
  