<template>
  <v-container>
    <!-- <v-btn color="success" @click="listarEntidad()">Enviar</v-btn> -->
    <h1 class="text-center title mb-15">{{ msg }}</h1>
    <!-- <v-row justify="center">
      <v-col>
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">id</th>
                <th class="text-left">Nombre</th>
                <th class="text-left">Identidad</th>
                <th class="text-left">Expiración</th>
                <th class="text-left">Contacto</th>
                <th class="text-left">Email</th>
                <th class="text-left">Dirección IP</th>
                <th class="text-left">Logo</th>
                <th class="text-left">Editar</th>
                <th class="text-left">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in entidad" :key="i">
                <td>{{ item.entityId }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.identificationNumber }}</td>
                <td>{{ item.expirationDate }}</td>
                <td>{{ item.contactName }}</td>
                <td>{{ item.contactMail }}</td>
                <td>{{ item.ipAddress }}</td>
                <td>
                  <v-img :src="item.logo" width="50" />
                </td>
                <td><v-btn color="primary">Editar</v-btn></td>
                <td><v-btn color="error">Eliminar</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import { EntitiesDataMixin } from '@/mixins/EntitiesData.js'

export default {
  name:'Entidad',
  mixins: [EntitiesDataMixin],
  props: {
    msg: String,
    getData: Array
  },
  data() {
      return {
        selected: this.getData
      }
  },
  methods: {
    /* async listarEntidad() {
      let url = this.selected;
      let urls = [];
      url.forEach((e) => urls.push(this.url + e));
      try {
        for (let i of urls) {
          let res = await this.axios.get(i);
          this.entidad.push(res.data.data);
        }
        console.log(this.entidad);
      } catch (e) {
        console.log(e);
      }
    }, */
  }
};
</script>

<style></style>
