<template>
  <!-- Master --><!-- ถ้าค่าที่อยู่ใน Cookie กับ CusId ไม่ตรงกันแสดงว่าไม่ใช่ผู้ซื้อ ไม่มีสิทธิ์อ่าน -->
  <div v-if="memEmail == cusId">
    <div v-for="(ct, cartId) in cart" :key="cartId" class="mt-5">
      <div class="card bg-light">
        <div class="card-body">
          <h4 class="card-title text-primary opacity-75">
            คำสั่งซื้อเลขที่ {{ ct.cartId }}
          </h4>
          <h5 class="card-subtitle mt-2 text-muted">
            สั่งซื้อวันที่ {{ formattedDate(ct.cartDate) }}
          </h5>
          <div class="text-danger text-end">
            จำนวนสินค้า {{ ct.sqty }} ชิ้น, ยอดเงิน
            {{ (ct.sprice ?? 0).toLocaleString() }} บาท
          </div>
          <hr />
        </div>
      </div>
      <!--card-->
    </div>
    <!---v for  -->

    <!-- Detail -->
    <table class="table mt-3">
      <thead>
        <tr class="bg-secondary bg-opacity-10">
          <td></td>
          <td></td>
          <td>สินค้า</td>
          <td class="text-end">ราคาต่อหน่วย</td>
          <td class="text-center">จำนวน</td>
          <td class="text-end">เป็นเงิน</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ctd, pdId) in cartDtl" :key="pdId">
          <td>{{ ctd.row_number }}</td>
          <td><!-- {{ ctd.pdId }} --></td>
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
  </div>
  <!--v-if-->
  <div v-else>
    <div class="alert alert-danger mt-5">คุณไม่มีสิทธิ์ดูรายการนี้</div>
  </div>
</template>

<script>
import { getCookie } from "@/functions/Cookie/Cookie.js";

export default {
  name: "CartHistoryDetailPage",
  data() {
    return {
      decodetoken: "",
      memEmail: "", // ค่า email จาก token
      cusId: "", // ค่า email ของผู้ซื้อ
      cart: [], // รายการสินค้าในตะกร้า
      cartDtl: [], // รายละเอียดสินค้าในตะกร้า
    };
  },
  async mounted() {
    await this.getToken();
    if (this.decodetoken === null) {
      this.$router.push("/login");
    } else {
      this.memEmail = this.decodetoken.email; // สมมติว่า token มีค่า email
    }
  },
  methods: {
    async getToken() {
      this.decodetoken = await getCookie();
    },
    formattedDate(date) {
      return new Date(date).toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<style>
/* เพิ่มสไตล์ถ้าจำเป็น */
</style>
