<template>
  <div class="home">
    <div class="row g-2">
      <div class="col-3 mx-auto" v-for="user in users" :key="user.id">
        <UserCard :credit="user.ist" :name="user.name" :comment="user.role" :id="user.id"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "../components/UserCard";
import SwaggerClient from 'swagger-client';
import spec from "../../swagger.json";

export default {
  name: 'Home',
  components: {
    UserCard,
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetchDemoDate() {
      this.users = [{
        "id": 1,
        "name": "Ronald Guinnane",
        "ist": 1991,
        "role": null
      }, {
        "id": 2,
        "name": "Brigham Filde",
        "ist": 575,
        "role": null
      }, {
        "id": 3,
        "name": "Vere Beddon",
        "ist": 1128,
        "role": null
      }, {
        "id": 4,
        "name": "Candi Nend",
        "ist": 1950,
        "role": null,
        "pin": false
      }, {
        "id": 5,
        "name": "Balduin Corpe",
        "ist": -1626,
        "role": null
      }, {
        "id": 6,
        "name": "Tanner Candish",
        "ist": 769,
        "role": null,
        "pin": false
      }, {
        "id": 7,
        "name": "Marissa Yallowley",
        "ist": 1352,
        "role": null
      }, {
        "id": 8,
        "name": "Carlita Cawood",
        "ist": -703,
        "role": null,
        "pin": false
      }, {
        "id": 9,
        "name": "Onida Station",
        "ist": 1454,
        "role": null
      }, {
        "id": 10,
        "name": "Morrie Lober",
        "ist": 2709,
        "role": null
      }, {
        "id": 11,
        "name": "Trevor McNeely",
        "ist": 840,
        "role": "Alt Herren",
        "pin": false
      }, {
        "id": 12,
        "name": "Lauraine Puddifer",
        "ist": -137,
        "role": null
      }, {
        "id": 13,
        "name": "Jarred Gavrielli",
        "ist": 2816,
        "role": null,
        "pin": false
      }, {
        "id": 14,
        "name": "Rosalie Pear",
        "ist": 181,
        "role": null,
        "pin": false
      }, {
        "id": 15,
        "name": "Emory Dankersley",
        "ist": 2931,
        "role": null
      }, {
        "id": 16,
        "name": "Myriam Houlridge",
        "ist": 479,
        "role": "Alt Herren"
      }, {
        "id": 17,
        "name": "Stephie Gornal",
        "ist": 1556,
        "role": null,
        "pin": false
      }, {
        "id": 18,
        "name": "Curr Westgarth",
        "ist": 1712,
        "role": "Gast"
      }, {
        "id": 19,
        "name": "Charity Crawley",
        "ist": 2446,
        "role": "Gast",
        "pin": false
      }, {
        "id": 20,
        "name": "Bernetta MacCahey",
        "ist": 782,
        "role": "Gast",
        "pin": false
      }, {
        "id": 21,
        "name": "Virgina Jaksic",
        "ist": 234,
        "role": "Gast"
      }, {
        "id": 22,
        "name": "Rowland Habgood",
        "ist": 2244,
        "role": null
      }, {
        "id": 23,
        "name": "Elisha Petegrew",
        "ist": 866,
        "role": null
      }, {
        "id": 24,
        "name": "Feliza Boyson",
        "ist": 593,
        "role": null
      }, {
        "id": 25,
        "name": "Maryann Lawson",
        "ist": 2819,
        "role": "Alt Herren"
      }, {
        "id": 26,
        "name": "Dore Grishakov",
        "ist": 175,
        "role": "Gast",
        "pin": false
      }, {
        "id": 27,
        "name": "Daune Ioselev",
        "ist": 204,
        "role": null
      }, {
        "id": 28,
        "name": "Corabelle Duncanson",
        "ist": 124,
        "role": null,
        "pin": false
      }, {
        "id": 29,
        "name": "Axel Kaman",
        "ist": 2504,
        "role": "Gast",
        "pin": false
      }, {
        "id": 30,
        "name": "Tammie Upcott",
        "ist": 2769,
        "role": null,
        "pin": false
      }];
    },
    fetchData() {
      new SwaggerClient({ spec })
          .then(client => client.apis.User.getUserOverview()
          .then(data => {
            this.users = data.body.data;
          }));

      new SwaggerClient({ spec })
          .then(client => client.apis.Accounts.getAccountBalances()
          .then(data => {
            let arr2 = data.body.data;

            let merged = [];

            for(let i=0; i<this.users.length; i++) {
              merged.push({
                ...this.users[i],
                ...(arr2.find((itmInner) => itmInner.id_account === this.users[i].id))}
              );
            }

            this.users = merged
          }));
    }
  },
  created() {
    // Demo
    if (process.env.VUE_DEMO) {
      this.fetchDemoDate();
    } else {
      this.fetchData();
    }
  }
};
</script>
