<template>
  <div>
    <div class="container-sm overview">
      <div class="nav">
        <RegularNav/>
      </div>
      <div class="product">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="14" class="text">
            <div class="title">烤面筋</div>
            <div class="well">
              <dl class="pair">
                <dt>价格</dt>
                <dd class="cny hot">19</dd>
              </dl>
              <dl class="pair">
                <dt>运费</dt>
                <dd class="cny">10</dd>
              </dl>
            </div>
            <el-row>
              <el-col :span="8">
                月销量
                <span class="hot">6666</span>
              </el-col>
              <el-col :span="8">
                月销量
                <span class="hot">6666</span>
              </el-col>
              <el-col :span="8">
                月销量
                <span class="hot">6666</span>
              </el-col>
            </el-row>
            <dl class="pair">
              <dt>口味</dt>
              <dd>
                <div class="pill">微辣</div>
                <div class="pill">中辣</div>
                <div class="pill selected">重辣</div>
              </dd>
            </dl>
            <dl class="pair">
              <dt>数量</dt>
              <dd>
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </dd>
            </dl>
            <div class>
              <el-button type="danger">立即购买</el-button>
              <el-button type="primary">加入购车</el-button>
            </div>
            <dl class="pair">
              <dt>服务承诺</dt>
              <dd>
                <a class="anchor" href="#">破损包退</a>
                <a class="anchor" href="#">正品保证</a>
                <a class="anchor" href="#">极速退款</a>
                <a class="anchor" href="#">七天无理由退换</a>
              </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="container-sm detai">
      <div class="props">
        <el-row class="de">
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> er：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生证号：</div> <div> 42398473943</div></el-col>
          <el-col :span="8"> <div> 生产许可证号：</div> <div> 42398473943</div></el-col>

       </el-row>
      </div>
      <div class="content">
          <img src="http://dummyimage.com/1000x2000" alt="">
          <img src="http://placekitten.com/1000/1000" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import RegularNav from "../components/RegularNav"

export default {
  data() {
    return {
      num: 1
    };
  },
   components:{
    RegularNav,
  }
};
</script>
<style scoped>
.product {
  margin-top: 17px;
}

.el-carousel--horizontal {
  overflow-y: hidden;
}
.el-col-10 {
  border: 1px solid rgba(200, 0, 0, 0.3);
}
h1 {
  margin: 0;
}
.pair {
  margin: 0.6em 0;
  padding-bottom: 5px;
}
.pair > * {
  display: inline-block;
  margin: 0 2em 0 0;

  /* margin-left: 0; */
}
.pair > *:nth-child(odd) {
  color: #666;
  font-size: 0.96rem;
}
.well {
  background: rgba(0, 0, 0, 0.05);
  padding: 0.3em;
}
.title {
  font-size: 1.8rem;
  font-weight: 600;
}
.text > * {
  margin-bottom: 1rem;
}
.hot {
  font-weight: 900;
  color: #e10;
  font-size: 1.1em;
}
.cny::before {
  display: inline;
  content: "￥";
}
.pill {
  display: inline-block;
  margin-right: 0.5em;
  padding: 0.26em 0.28em;
  border: 2.6px solid rgba(0, 0, 0, 0.1);
  font-size: 86%;
}
.pill.selected {
  border-color: #e10;
}
.de > *{
    margin-bottom: 8px;
    color: rgba(0,0,0,068);
    font-size: .9rem;
}
.de > * > *{
    display:inline-block;
    color: #666;
}
.de > * > *:nth-child(odd){
    width: 30%;
}
.de > * > *:nth-child(even){
    width: 60%;
}
.props{
    border:1px solid rgba(0,0,0,0.3);
    padding: 1em;
    margin-bottom: 20px;
    
}
</style>
