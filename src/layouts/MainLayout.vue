<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <q-toolbar style="display: flex; justify-content: space-between">
        <div style="text-decoration: none; color: white; left: 5%; display: flex; justify-content: space-between">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <router-link :to="{ name: 'main' }">
            <q-toolbar-title > Game</q-toolbar-title>
          </router-link>
        </div>

        <div style="display: flex">
          <div>
            <keep-alive>
            <router-link :to="{ name: 'enter' }">
              <q-btn class="q-mt-sm" label="game" color="dark" />
            </router-link>
            </keep-alive>
          </div>
          <div>
            <keep-alive>

            <router-link :to="{ name: 'stat' }">
              <q-btn class="q-mt-sm" label="stat" color="info" />
            </router-link>
            </keep-alive>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Quiz game </q-item-label>
        <q-item-label header> </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Game",
    caption: "main page",
    icon: "school",
  },
  {
    title: "Statistic",
    caption: "see your stats",
    icon: "code",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
