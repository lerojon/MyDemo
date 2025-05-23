let time = 14
let loader = document.getElementsByClassName('loader')
let answer = document.getElementsByClassName('answer_text')[0]
let answer_type = document.getElementsByClassName('answer_type')[0]
let nextAnswer = document.getElementsByClassName('nextAnswer')[0]
let question_answer = document.getElementsByClassName('question_answer')[0]
let result = [] // 记录随机数
// let answerArrays = [
//    "如何用Python实现快速排序算法？",
//   "请解释JavaScript中的闭包概念",
//   "什么是RESTful API？它的设计原则有哪些？",
//   "MySQL和MongoDB的主要区别是什么？",
//   "如何优化网页加载速度？请提供具体方案",
//   "解释一下HTTP和HTTPS协议的区别",
//   "机器学习中的过拟合现象该如何解决？",
//   "Vue和React框架各有什么优缺点？",
//   "如何在Linux系统中查看进程占用的端口？",
//   "设计一个用户登录系统需要考虑哪些安全因素？"
// ]
let answerArrays =[
  {
    question: "第一次世界大战的导火索是什么事件？",
    type: "咨询类（历史事件因果）",
    answer: "1914年萨拉热窝事件，奥匈帝国皇储斐迪南大公遇刺。"
  },
  {
    question: "如何评价秦始皇统一六国的历史意义？",
    type: "求助类（分析评价）",
    answer: "奠定中国统一多民族国家基础，推行书同文/车同轨，建立中央集权制度。"
  },
  {
    question: "工业革命对欧洲社会结构的影响",
    type: "模糊需求类（开放性问题）",
    answer: "资产阶级崛起、无产阶级形成、城市化加速、传统农业社会解体。"
  },
  {
    question: "郑和下西洋最远到达哪里？",
    type: "咨询类（史实求证）",
    answer: "非洲东海岸（今索马里、肯尼亚一带），最远可能至莫桑比克。"
  },
  {
    question: "《独立宣言》的核心思想是什么？",
    type: "咨询类（文献解读）",
    answer: "人人生而平等，政府权力来自被统治者同意，人民有革命权。"
  },
  {
    question: "如何理解‘丝绸之路’的双向交流特性？",
    type: "求助类（概念解析）",
    answer: "中国输出丝绸/瓷器，传入佛教；西方输入玻璃/胡乐，传播景教/伊斯兰教。"
  },
  {
    question: "关于商鞅变法的争议焦点",
    type: "模糊需求类（观点讨论）",
    answer: "严刑峻法vs富国强兵、个人权利牺牲vs国家效率提升。"
  },
  {
    question: "第二次世界大战的转折点战役有哪些？",
    type: "咨询类（史实列举）",
    answer: "斯大林格勒战役（欧洲）、中途岛海战（太平洋）、阿拉曼战役（北非）。"
  },
  {
    question: "为什么说《大宪章》是英国宪政的基石？",
    type: "求助类（因果分析）",
    answer: "首次以法律限制王权，确立‘王在法下’原则，影响后世议会制度。"
  },
  {
    question: "北宋‘重文轻武’政策的利弊",
    type: "模糊需求类（辩证分析）",
    answer: "利：文化繁荣/社会稳定；弊：军备废弛/对外战争屡败。"
  }
]
let inter=null
let showAnswerInter=null
let showAnswerTime = 10
let contentAnswer = null
console.log(loader)
setInter()
function setInter(showAnswerInter){
  clearInterval(showAnswerInter)
  if(time<=0){
    showAnswer(inter)
    inter = null
    loader[0].style.animation = ''
    time = initTime(14)
    loader[0].textContent = time
    console.log(time)
  }
 inter = setInterval(()=>{
  if(time == initTime(14)){
    contentAnswer = getUniqueRandomNumbers(answerArrays)
    console.log('content:',contentAnswer)
    if(contentAnswer){
      answer.textContent = contentAnswer['question']
      answer_type.textContent = contentAnswer['type']
      
    }else{
      time = initTime(14)
      setInter()
    }
  } 
  time--
  loader[0].textContent = time
  console.log(time,Math.floor(Math.random()*10))
  if(time<=10 && time > 0){
    loader[0].style.animation = 'l9 1s infinite'
  }
  if(time<=0){
    showAnswer(inter)
    
    inter = null
    loader[0].style.animation = ''
    time = initTime(14)
    loader[0].textContent = time
    console.log(time)
  } 
},1000)

}

function showAnswer(inter){
  clearInterval(inter)
if(contentAnswer['answer']) question_answer.textContent ='答案：'+ contentAnswer['answer']
showAnswerInter = setInterval(()=>{
 showAnswerTime--
 if(showAnswerTime==1) {
  answer.textContent = '下一题'
  answer_type.textContent = '下一题'
  question_answer.textContent =''
  contentAnswer=null
 }
 if(showAnswerTime<=0){
  clearInterval(showAnswerInter)
  showAnswerInter=null
  showAnswerTime = initTime(10)
  setInter(showAnswerInter)
 }
},1000)
}

function getUniqueRandomNumbers(answerArray=[],max=10){
      let count = Math.floor(Math.random()*10)-1
      if(!result.includes(count)&&result.length<=10){
        result.push(count)

       return answerArray[count]
      }else{
        result = []
      }
}
function initTime(count = 60){
  return count
}
nextAnswer.addEventListener('click',()=>{
  time = initTime(14)
})
