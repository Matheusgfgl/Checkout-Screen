<template>
  <div class="products">
    <div class="products__content">
      <h1 class="products__title">
        My Cart
      </h1>
      <div class="products__header">
        <h2 class="column">
          Desciptrion
        </h2>
        <div class="left">
          <h2 class="column">
            Price
          </h2>
          <h2 class="column">
            Total
          </h2>
        </div>
      </div>
      <div class="products__list">
        <div
          v-for="(product, index) in chart"
          :key="product.id"
          class="item"
        >
          <img
            class="item__img"
            :src="product.thumbnail"
          >
          <p class="item__title">
            {{ product.title }}
          </p>
          <div class="item__buttons">
            <button
              class="button"
              @click.prevent="addProduct(index)"
            >
              +
            </button>
            <p class="amount">
              {{ product.amount }}
            </p>
            <button
              class="button"
              @click.prevent="removeProduct(index)"
            >
              -
            </button>
          </div>
          <div class="item__info">
            <p class="price">
              $ {{ product.price }}
            </p>
            <p class="total">
              $ {{ product.total }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {

  name: 'Products',

  data(){
    return {
      chart: [],
    };
  },

  computed: {
    ...mapGetters([
      'getProducts'
    ])
  },


  created(){
   this.fetchAllProducts();

  },

  methods: {
    ...mapActions([
      'fetchProducs',
    ]),

    async fetchAllProducts(){

      try {
        const response = await this.fetchProducs();

        this.chart = response.map((product) => ({
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
          amount: 0,
          total: 0,
        }));

      } catch (error) {
        console.log(error);
      }
    },

    removeProduct(index){
      if(this.chart[index].amount === 0 )
        return ;

      this.chart[index].amount = this.chart[index].amount - 1;
      this.chart[index].total = this.chart[index].amount * this.chart[index].price;
    },

    addProduct(index){
      this.chart[index].amount = this.chart[index].amount + 1;
      this.chart[index].total = this.chart[index].amount * this.chart[index].price;
    }
  }

  };
</script>

<style lang="scss" scoped>
  .products {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      max-width: 40rem;
    }

    &__title {
      font-size: $text-2xl;
      font-weight: bold;
    }

    &__header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
      padding: 2rem 0 1rem;
      border-top: solid 2px $black;
      border-bottom: solid 2px $black;

      .left {
        display: flex;
        justify-content: space-around;
        width: 12rem;
      }

      .column {
        color: $black;
        font-size: $text-xl;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &__list {
      border-top: solid 1px var(gray-500);

      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.4rem 1rem;
        border-bottom: solid 2px $black;
        justify-content: space-between;

        &__img {
          width: 3rem;
          height: 100%;
        }

        &__buttons {
          width: 10rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .amount {
            font-size: $text-base;
            margin: 0 1rem;
          }

          .button {
            border-radius: $radius-full;
            padding: 0.3rem 0.3rem;
            width: 2rem;
            font-size: $text-base;
            color: $white;
            background-color: gray;
          }
        }

        &__info {
          display: flex;
          flex-direction: row;
          width: 10rem;

          .price {
            font-size: $text-base;
            margin-right: 2rem;
          }

          .total {
            font-size: $text-base;
          }
        }
      }
    }
  }
</style>

