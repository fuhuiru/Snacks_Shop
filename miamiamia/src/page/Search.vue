<template>
  <div>
    <div class="container">
      <RegularNav/>
    </div>
    <div class="container brand">
      <div class="filter">
        <div class="table">
          <el-row>
            <el-col :span="3">品牌</el-col>
            <el-col :span="21">
              <div class="option">三只松鼠</div>
              <div class="option">百草味</div>
              <div class="option">良品铺子</div>
              <div class="option">三只松鼠</div>
              <div class="option">奥利奥</div>
              <div class="option">徐福记</div>
              <div class="option">乐事</div>
              <div class="option">周黑鸭</div>
              <div class="option">三只松鼠</div>
              <div class="option">三只松鼠</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">品牌</el-col>
            <el-col :span="21">
              <div class="option">三只松鼠</div>
              <div class="option">百草味</div>
              <div class="option">良品铺子</div>
              <div class="option">三只松鼠</div>
              <div class="option">奥利奥</div>
              <div class="option">徐福记</div>
              <div class="option">乐事</div>
              <div class="option">周黑鸭</div>
              <div class="option">三只松鼠</div>
              <div class="option">三只松鼠</div>
            </el-col>
          </el-row>
          <el-row class="type">
            <el-col :span="3">分类</el-col>
            <el-col :span="21" class="cats">
              <div class="option">糕点/点心</div>
              <div class="option">膨化食品</div>
              <div class="option">肉类即食</div>
              <div class="option">饼干</div>
              <div class="option">豆干零食</div>
              <div class="option">糖果</div>
              <div class="option">海味即食</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">包装方式</el-col>
            <el-col :span="21">
              <div class="option">包装</div>
              <div class="option">散装</div>
            </el-col>
          </el-row>
        </div>
        <div class="bar">
          <div class="group">
            <el-button-group size="small">
              <el-button size="small">综合</el-button>
              <el-button size="small">销量</el-button>
              <el-button size="small">人气</el-button>
              <el-button size="small">新品</el-button>
            </el-button-group>
          </div>
          <div class="group price">
            <el-col :span="12">
              <el-input placeholder="最低价格" size="small"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input placeholder="最高价格" size="small"></el-input>
            </el-col>
          </div>
          <div class="group box">
            <el-checkbox-group v-model="checkList" size="mini">
              <el-checkbox label="包邮"></el-checkbox>
              <el-checkbox label="折扣"></el-checkbox>
              <el-checkbox label="货到付款"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <el-row class="card-list vertical-gutter" :gutter="20">
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="card-list vertical-gutter" :gutter="20">
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
import RegularNav from "../components/RegularNav"

export default {
  data() {
    return {
      checkList: []
    };
  },
  components:{
    RegularNav,
  }
  
};
</script>
<style scoped>
.search {
  margin-top: 1em;
}
.filter {
  font-size: 0.91em;
  margin-top: 1em;
  color: #666;
}
.filter .table .option {
  display: inline-block;
  cursor: pointer;
  padding: 0.3em 1em;
}
.filter .table > * {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em 1em;
  border-bottom-width: 0;
}
.filter .table > *:last-child {
  border-bottom-width: 1px;
}
.type .cats .option {
  /* background-color: aqua; */
  /* padding-left: 2em; */
  /* padding-right: 2em; */
  margin-right: 46px;
}
.bar > * {
  display: inline-block;
  vertical-align: middle;
}
.bar .group {
  margin-top: 10px;
}
.bar .price {
  width: 170px;
}
.box {
  margin-left: 10px;
}
.el-checkbox {
  margin-right: 0.5em;
}
.brand {
  margin-bottom: 15px;
}
.el-pagination{
  text-align: center;
}
</style>
