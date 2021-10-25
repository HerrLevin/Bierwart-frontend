<template>
  <div class="home">
    <div class="row g-2">
      <div class="col-3 mx-auto" v-for="user in users" :key="user.id">
        <UserCard :credit="user.credit" :name="user.name" :comment="user.comment"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "../components/UserCard";

export default {
  name: 'Home',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [{
        "id": 1,
        "name": "Ronald Guinnane",
        "credit": 1991,
        "comment": null,
        "pin": true
      }, {
        "id": 2,
        "name": "Brigham Filde",
        "credit": 575,
        "comment": null,
        "pin": true
      }, {
        "id": 3,
        "name": "Vere Beddon",
        "credit": 1128,
        "comment": null,
        "pin": true
      }, {
        "id": 4,
        "name": "Candi Nend",
        "credit": 1950,
        "comment": null,
        "pin": false
      }, {
        "id": 5,
        "name": "Balduin Corpe",
        "credit": -1626,
        "comment": null,
        "pin": true
      }, {
        "id": 6,
        "name": "Tanner Candish",
        "credit": 769,
        "comment": null,
        "pin": false
      }, {
        "id": 7,
        "name": "Marissa Yallowley",
        "credit": 1352,
        "comment": null,
        "pin": true
      }, {
        "id": 8,
        "name": "Carlita Cawood",
        "credit": -703,
        "comment": null,
        "pin": false
      }, {
        "id": 9,
        "name": "Onida Station",
        "credit": 1454,
        "comment": null,
        "pin": true
      }, {
        "id": 10,
        "name": "Morrie Lober",
        "credit": 2709,
        "comment": null,
        "pin": true
      }, {
        "id": 11,
        "name": "Trevor McNeely",
        "credit": 840,
        "comment": "Alt Herren",
        "pin": false
      }, {
        "id": 12,
        "name": "Lauraine Puddifer",
        "credit": -137,
        "comment": null,
        "pin": true
      }, {
        "id": 13,
        "name": "Jarred Gavrielli",
        "credit": 2816,
        "comment": null,
        "pin": false
      }, {
        "id": 14,
        "name": "Rosalie Pear",
        "credit": 181,
        "comment": null,
        "pin": false
      }, {
        "id": 15,
        "name": "Emory Dankersley",
        "credit": 2931,
        "comment": null,
        "pin": true
      }, {
        "id": 16,
        "name": "Myriam Houlridge",
        "credit": 479,
        "comment": "Alt Herren",
        "pin": true
      }, {
        "id": 17,
        "name": "Stephie Gornal",
        "credit": 1556,
        "comment": null,
        "pin": false
      }, {
        "id": 18,
        "name": "Curr Westgarth",
        "credit": 1712,
        "comment": "Gast",
        "pin": true
      }, {
        "id": 19,
        "name": "Charity Crawley",
        "credit": 2446,
        "comment": "Gast",
        "pin": false
      }, {
        "id": 20,
        "name": "Bernetta MacCahey",
        "credit": 782,
        "comment": "Gast",
        "pin": false
      }, {
        "id": 21,
        "name": "Virgina Jaksic",
        "credit": 234,
        "comment": "Gast",
        "pin": true
      }, {
        "id": 22,
        "name": "Rowland Habgood",
        "credit": 2244,
        "comment": null,
        "pin": true
      }, {
        "id": 23,
        "name": "Elisha Petegrew",
        "credit": 866,
        "comment": null,
        "pin": true
      }, {
        "id": 24,
        "name": "Feliza Boyson",
        "credit": 593,
        "comment": null,
        "pin": true
      }, {
        "id": 25,
        "name": "Maryann Lawson",
        "credit": 2819,
        "comment": "Alt Herren",
        "pin": true
      }, {
        "id": 26,
        "name": "Dore Grishakov",
        "credit": 175,
        "comment": "Gast",
        "pin": false
      }, {
        "id": 27,
        "name": "Daune Ioselev",
        "credit": 204,
        "comment": null,
        "pin": true
      }, {
        "id": 28,
        "name": "Corabelle Duncanson",
        "credit": 124,
        "comment": null,
        "pin": false
      }, {
        "id": 29,
        "name": "Axel Kaman",
        "credit": 2504,
        "comment": "Gast",
        "pin": false
      }, {
        "id": 30,
        "name": "Tammie Upcott",
        "credit": 2769,
        "comment": null,
        "pin": false
      }]
    };
  }
};
</script>
