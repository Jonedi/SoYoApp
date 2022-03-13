export const EntitiesDataMixin = {
  data() {
    return {
      entidades: [],
      entidad: [],
      editEntidad: [],
      url: "https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/",
      num: new Array(10),
      tabla: false,
      isActive: false,
      dBlock: 'd-block',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    // Genera el listado de clientes
    async listarEntidades() {
      let url = this.num;
      let urls = [];
      for (let i = 1; i <= url.length; i++) {
        urls.push(this.url + i);
      }
      try {
        for (let i of urls) {
          let res = await this.axios.get(i);
          this.entidades.push(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async listarEntidad() {
      // Genera el listado de clientes seleccionados para modificar
      this.tabla = true
      let url = this.selected;
      let urls = [];
      url.forEach((e) => urls.push(this.url + e));
      try {
        for (let i of urls) {
          let res = await this.axios.get(i);
          this.entidad.push(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    borrarEntidad(id) {
      // Elimina cliente seleccionado
      let check = confirm(`Está seguro que quiere eliminar la entrada ${id}`)
      try {
        if (check === true) {
          console.log(id)
          let index = this.entidad.findIndex(i => i.id === this.entidad.entityId)
          this.entidad.splice(index,1)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async ActivarEdicion(id) {
      // Activa la edición
      this.isActive = true
      let url = this.url + id
      try {
        let res = await this.axios.get(url);
        this.editEntidad = res.data.data
      } catch (e) {
        console.log(e)
      }
    },
    editarIdentidad(item){
      // Realiza la edición del cliente
      const find = this.entidad.findIndex(i => i.entityId === item.entityId)
      this.entidad.splice(find,1,item)

      this.isActive = false
    },
    refresh() {
      // Borra la selección que se encontraba en la tabla
      this.$router.go(0)
    },
  },
};
