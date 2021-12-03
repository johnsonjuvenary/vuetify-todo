<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on"> Add New Project </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add New Project
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="due"
                v-bind="attrs"
                v-on="on"
                label="Due Date"
                prepend-icon="mdi-calendar-range"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mx-0 mt-3" @click="submit"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import app from "@/fb";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: "",
      inputRules: [(v) => v.length > 3 || "Minimum lenght is 3 characters"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: "Johnson Juvenary",
          status: "ongoing",
        };
        app.add(project).then(() => {
          console.log("added to db");
        });
      }
    },
  },
  computed: {
    formattedDate() {
      console.log(this.due);
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    },
  },
};
</script>

