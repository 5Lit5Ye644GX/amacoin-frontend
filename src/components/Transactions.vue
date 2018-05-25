<template>
  <div class="col-12 my-3">
    <div class="card">

      <div class="card-body">
        <h6 class="text-uppercase">Recent transactions !</h6>
        <hr>
        <div class="content">

          <div v-if="!transactions">
            <i class="fas fa-exchange-alt my-1"></i>
            <br>
            <span>You have no transactions yet</span>
          </div>
          



          <table class="table text-left" v-if="transactions">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Transactions</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in transactions">
                <td>{{ transaction.date }}</td>
                <td>
                  <span class="badge badge-warning"><i class="fas fa-link"></i></span>
                  {{ transaction.from }}
                  <span class="badge badge-warning"><i class="fas fa-arrow-right"></i></span>
                  {{ transaction.from }}
                </td>
                <td>+{{ transaction.amount }}<span class="badge badge-warning">AMA</span></td>
              </tr>
            </tbody>
          </table>




        </div>
        <hr>
        <div class="text-center">
          <a href="#" class="card-link btn btn-dark">Refresh <i class="fas fa-sync-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Transactions',
  props: [
    "transactions"
  ]
}
</script>
<style media="screen" scoped>

i{
  font-size: 15px !important;
}

</style>
