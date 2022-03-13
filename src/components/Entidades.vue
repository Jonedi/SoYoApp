<template>
  <v-container>
    <h1 class="text-center title mb-5">{{ msg }}</h1>
    
    <v-row justify="center" :class="[tabla ? 'd-none': null]">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, i) in this.entidades"
        :key="i"
      >
        <v-hover
          v-slot="{ hover }"
          open-delay="200"
        >
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            
          >
            <div class="py-5 px-5">
              <input type="checkbox" class="mr-3 text-h4" :value="item.entityId" v-model="selected">
              <label for="">{{ item.name }}</label>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-btn color="success" class="mr-5" @click="listarEntidad()">Enviar</v-btn>
    <v-btn color="primary" @click="refresh()">Refrescar</v-btn>

    <v-row justify="center" class="mt-5" v-if="tabla">
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
                <td><v-btn color="primary" @click="ActivarEdicion(item.entityId)">Editar</v-btn></td>
                <td><v-btn color="error" @click="borrarEntidad(item.entityId)">Eliminar</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div id="modalEdit" class="modal" :class="[isActive ? dBlock : null]">
          <div class="modal-content">
            <div class="close" @click="isActive=false">&times;</div>
              <h3 class="text-center">Editar Entidad</h3>
            <v-form
              @submit.prevent="editarIdentidad(editEntidad)"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="editEntidad.name"
                label="Nombre Cliente"
                required
              ></v-text-field>
              <v-text-field
                v-model="editEntidad.identificationNumber"
                label="Identificación"
                required
              ></v-text-field>
              <v-text-field
                v-model="editEntidad.expirationDate"
                :rules="nameRules"
                label="Fecha Expiración"
              ></v-text-field>
              <v-text-field
                v-model="editEntidad.contactName"
                label="Contacto"
              ></v-text-field>
              <v-text-field
                v-model="editEntidad.contactMail"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="editEntidad.ipAddress"
                label="Dirección IP"
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                type="submit"
              >Editar</v-btn>
            </v-form>
            <!-- <input type="text" placeholder="Dirección IP" v-model="editEntidad.ipAddress">
              <v-btn color="warning" type="submit">Editar</v-btn>
            </form> -->
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { EntitiesDataMixin } from '@/mixins/EntitiesData.js'
import Entidad from '@/components/Entidad.vue'

export default {
  name: "Entidades",
  mixins: [EntitiesDataMixin],
  data() {
      return {
        selected: [],
      }
  },
  components: {
    Entidad
  },
  props: {
    msg: String,
  },
  created() {
      this.listarEntidades()
  },
};
</script>

<style lang="scss" scoped>
.v-card.on-hover.theme--dark {
  background-color: rgba(#FFF, 0.8);
  & > .v-card__text {
    color: #000;
  }
}
.modal {
  display: none;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
