<template>
  <!-- <pre>{{ this.cart }}</pre> -->
  <!-- Master --><!-- ถ้าค่าที่อยู่ใน Cookie กับ CusId ไม่ตรงกันแสดงว่าไม่ใช้ผู้ซื้อไม่มีสิทธิอ่าน -->

  <!-- Detail -->
  <table class="table mt-3">
    <thead>
      <tr class="bg-secondary bg-opacity-10">
        <td></td>
        <td>สินค้า</td>
        <td></td>
        <td class="text-end">ราคาต่อหน่วย</td>
        <td class="text-center">จำนวน</td>
        <td class="text-end">เป็นเงิน</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ctd, pdId) in cartDtl" :key="pdId">
        <td>{{ ctd.row_number }}</td>
        <td>{{ ctd.pdId }}</td>
        <td>{{ ctd.pdName }}</td>
        <td class="text-end">{{ ctd.price }}</td>
        <td class="text-center">{{ ctd.qty }}</td>
        <td class="text-end">
          {{ (ctd.price * ctd.qty ?? 0).toLocaleString() }}
        </td>
        <td class="text-center">
          <i class="bi-x-lg text-danger"></i>
        </td>
      </tr>
    </tbody>
  </table>
  <!--v-if-->
</template>


<script>
import axios from "axios";
axios.defaults.withCredentials = true;

import { getCartDtl } from "@/functions/Cart/Cart";
import { getCookie } from "@/functions/Cookie/Cookie";
export default {
  name: "CartPage",
  data() {
    return {
      cart: [], //รับข้อมูล Master
      cartDtl: [], //รับข้อมูล Detail
      cartId: null,
      memEmail: null,
      decodedToken: null,
      cusId: null,
    };
  },
  async mounted() {
    // ตรวจสอบว่าเป็นเจ้าของตะกร้าหรือไม่
    this.decodedToken = getCookie();
    // this.cartId = this.$route.params.cartId;
    const result = await getCartDtl();
    this.cart = result.data;

    // Map cartList to cartDtl
    const cartList = this.cart.cartList;
    this.cartDtl = Object.entries(cartList).flatMap(([cartId, cartData]) =>
      Object.values(cartData.productList).map((product, index) => ({
        row_number: index + 1,
        pdId: product.product_id,
        pdName: product.product_name,
        price: product.price,
        qty: product.qty,
        total: product.Total,
      }))
    );
  },
  methods: {
    // แปลงรูปแบบวันที่
    formattedDate(dateStr) {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // เดือนเริ่มต้นที่ 0, จึงต้อง +1
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
  <style></style>