<template class="q-pa-md q-gutter-md">
	<q-card-section>Message: {{ msg }}</q-card-section>
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
	<q-separator />
  <q-card-section>
    {{ number + 1 }}
  </q-card-section>
  <q-separator />
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
  <q-card-section>
    {{ message.split("").reverse().join("") }}
  </q-card-section>
  <q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-card-section class="text-h6">
    {{ calculateDate() }}
  </q-card-section>
  <q-separator />
  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator />
  <div class="q-pa-md row items-start">
  <q-btn @click="increment" label="카운트" color="primary"></q-btn>
  <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
  </div>
  <q-separator />
  <q-card-section>
    <q-input v-model="inputData"
      outlined
      bottom-slots
      label="DebounceEx"
      counter
      :dense="true"
    />
  </q-card-section>
  <q-separator/>
  <q-card-section>책을 가지고 있다: {{ publishedBooksMessage }}</q-card-section>
	<q-separator />
  <q-card-section>책을 가지고 있다: {{ calculateBooksMessage() }}</q-card-section>
	<q-separator />
  <q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate() }}
  </q-card-section>
	<q-separator />
  <q-card-section class="text-h6">
    {{ fullName }}
  </q-card-section>
	<q-separator />
  <q-card-section :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
  <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
  <div class="static active"></div>
  <q-card-section :class="classObject"> change color</q-card-section>
  <q-card-section :class="classObj"> change color</q-card-section>
  <q-card-section :class="[activeClass, errorClass]"> change color</q-card-section>
  <div class="active text-danger"></div>
  <q-card-section :class="[isActive ? activeClass :'', errorClass]"> change color</q-card-section>
  <q-card-section :class="[{active:isActive}, errorClass]"> change color</q-card-section>
  <q-card-section :class="{foo:true, bar:true}">안녕!</q-card-section>
  <!-- 컴포넌트가 사용될 때  -->
  <class-child></class-child>
  <!-- 컴포넌트가 사용시 클래스 추가 -->
  <class-child :class="[baz, boo]"></class-child>
  <!-- 컴포넌트가 사용시 active 클래스 추가 -->
  <class-child :class="{ active: isActive }"></class-child>
  <div class="foo bar"></div>
  <div class="foo bar baz boo"></div>
  <div class="foo bar active"></div>
  <q-card-section :class="{foo:true, bar:true}" :id="$attrs.id">안녕!</q-card-section>
  <class-child id="hi"></class-child>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  <q-card-section :style="styleObject"> change color</q-card-section>
  <q-card-section :style="[baseStyles, overridingStyles]"> change color</q-card-section>
  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-show="ok"
      dark
      bordered
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)" >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md">
    <q-list v-for="(item,idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list v-for="(item, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
            {{ parentMessage }} - {{ index + 1 }} - {{ item.message }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
    <q-list v-for="({message}, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index + 1 }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
  <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section v-for="(childItem, index) in item.children" :key="index">
        <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
      </q-item-section>
    </q-item>
  </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
  <q-list v-for="({message}, index) of listItems" :key="index" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>{{ message }} - {{ index }}</q-item-section>
    </q-item>
  </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md">
  <q-list
    v-for="(value, key, index) in myObject"
    :key="index"
    bordered
    separator
   >
    <q-item clickable v-ripple>
      <q-item-section
        >{{ index + 1 }}. {{ key }} : {{ value }}</q-item-section
      >
    </q-item>
    </q-list>
    </div>
  <q-separator />
  <div class="q-pa-md row items-start">
  <q-list v-for="n in 10" :key="n" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>{{ n }}</q-item-section>
    </q-item>
  </q-list>
  </div>
  <q-separator />
  <div class="q-pa-md items-start">
  <my-component
    v-for="(item, index) in listItems"
    :key="index"
    :item="item"
    :index="index"
  ></my-component>
  </div>
  <q-separator />
  <q-card-section>{{ filterItems }}</q-card-section>
  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
  <q-item clickable v-ripple>
    <q-item-section>{{ n }}</q-item-section>
  </q-item>
  </q-list>
  <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
  <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
    <q-item-section><q-item-label class="text-h6 text-weight-bolder text-center">{{ n }}</q-item-label></q-item-section>
  </q-item>
  </q-list>
  <q-card-section>{{ reverseNumbers }}</q-card-section>

</template>

<script>


import { nextTick } from 'vue'
import { date } from 'quasar'
import { debounce } from 'lodash'




const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
const parentMessage = 'Parent'
const listItems = [
  /* ... */
]

listItems.forEach((item, index) => {
  // forEach의 콜백 함수 외부에 있는 `parentMessage`에 대한 접근 가능.
  // 반면 `item`과 `index`는 콜백함수 내부에서만 접근 가능.
  console.log(parentMessage, item.message, index)
})

export default {
  name:'VueEx',
  title:"Vue Basic",
  components:{},
  data(){
    return{
      msg: "hello Vue",
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      linkId: "vue",
      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
	      },
      isButtonDisabled: true,
      ok: true,
				number: 1000,
	      message:
	        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	      id: "genie",
      seen: true,
	    awesome: true,
	    type: "B",
      methodCount: 1,
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      },
      inputData:'',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      str:'',
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      hasError: false,
      classObject: {
      active: true,
      'text-h3': false
      },
      isActive: true,
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 50,
      styleObject: {
      color: 'red',
      fontSize: '23px'
      },
      awesome: true,
      type: "B",
      ok: true,
      listItems: [{ message: "Foo" }, { message: "Bar" }],
      parentMessage: 'Parent',
		  listItems: [{ message: "Foo" }, { message: "Bar" }],
      tupleListItems: [{ message: "Foo", children:["baby"] }, { message: "Bar",children:['child'] }],
      myObject: {
      title: 'Vue에서 목록을 작성하는 방법',
      author: '홍길동',
      publishedAt: '2016-04-10'
      },
      items: [{ message: "Foo" }, { message: "Bar" }],
      numbers: [1, 2, 3, 4, 5],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],



    }
  },
  baseStyles:{
    textDecorationLine:'underline',
    textDecorationThickness: '5px',
    textDecorationColor: 'red',
  },
  overridingStyles:{
    color:'blue',
    fontSize:'35px',
  },
  computed:{
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    toTitleDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    },
    classObj() {
    return {
      active: this.isActive && !this.error,
      'text-h3': this.error && this.error.type === 'fatal'
      }
    },
    filterItems() {
      return (this.items = this.items.filter((item) =>
        item.message.match(/Foo/)
      ));
    },
    evenNumbers() {
    return this.numbers.filter(n => n % 2 === 0)
    },


  },
  watch:{
    inputData: debounce(function(newVal,oldVal){
	      // 처리로직 작성
	      console.log(newVal,oldVal);
	    },500)
  },
  mounted(){
    this.increment()
    this.error = {};
    this.error.type = 'fatal';
  },
  methods:{
    calculateDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
		},

    increment() {
      this.count++
      nextTick(() => {
        // 업데이트된 DOM에 접근 가능
      })
    },
    mutateDeeply() {
      // 변경 사항이 감지됩니다.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    },

    click() {
      // ... 클릭에 응답 ...
    },
    calculateBooksMessage() {
	    return this.author.books.length > 0 ? 'Yes' : 'No'
	  },
    calculateDate() {
	    setInterval(()=>{
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
        this.str = formattedString;
      }, 1000);
      return this.str; // binding 되는 변수 필요
	  },
    even(numbers) {
    return numbers.filter(number => number % 2 === 0)
    },
    reverseNumbers() {
    const numbers = this.numbers;
    return [...numbers].reverse();
    },


  },
  created() {
    // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 컴포넌트가 제거된 후
    // 타이머를 취소하는 것은 좋은 방법입니다.
    this.debouncedClick.cancel()
  },


}
</script>

<style scoped>
	.active{
	  color:red;
	}
  .foo {
	  background-color: red;
	  color:white;
	}
	.bar{
	  color:white;
	}
  .my-card {
	  width: 100%;
	  max-width: 250px;
	}

</style>
