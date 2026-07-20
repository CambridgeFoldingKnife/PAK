export interface Therapist {
  id: string
  name: string
  city: string
  unit: string
  business: string
  phone: string
  email: string
}

const therapists: Therapist[] = [
  { id: "t01", name: "王锦飞", city: "厦门", unit: "福建省厦门市君正康复", business: "治疗师", phone: "15606924576", email: "786942159@qq.com" },
  { id: "t02", name: "崔艳", city: "安阳", unit: "河南安阳", business: "医生", phone: "18790888213", email: "849421145@qq.com" },
  { id: "t03", name: "张淳", city: "北京", unit: "北京顺欣阳光医院", business: "医生", phone: "13601366071", email: "zhchmed@qq.com" },
  { id: "t04", name: "周钇全", city: "温州", unit: "浙江温州", business: "治疗师", phone: "15988775767", email: "349912583@qq.com" },
  { id: "t05", name: "梁丽芳", city: "深圳", unit: "深圳市盈润私密健康有限公司", business: "性治疗师", phone: "15158231678", email: "2678504763@qq.com" },
  { id: "t06", name: "凌家欢", city: "广州", unit: "威蒂斯体育文化有限公司", business: "康复师", phone: "13202962267", email: "1474182609@qq.com" },
  { id: "t07", name: "朱梦", city: "武汉", unit: "松沐运动矫形中心", business: "普拉提教练", phone: "15220146043", email: "1024741365@qq.com" },
  { id: "t08", name: "赵嘉", city: "深圳", unit: "ES瑜伽&普拉提", business: "瑜伽老师", phone: "13632933036", email: "" },
  { id: "t09", name: "李喆", city: "宝鸡", unit: "宝鸡市体育运动学校", business: "教练员", phone: "18109172123", email: "67624133@qq.com" },
  { id: "t10", name: "冯志鸿", city: "广州", unit: "深圳鹏安运动康复门诊部", business: "康复治疗师", phone: "18875959194", email: "3226882121@qq.com" },
  { id: "t11", name: "晨露", city: "", unit: "Here&Now整体健康工作室", business: "治疗师", phone: "18562761080", email: "170305274@qq.com" },
  { id: "t12", name: "胡琼", city: "广州", unit: "广州融意健康管理有限公司", business: "身心形同调师", phone: "18666026185", email: "793927062@qq.com" },
  { id: "t13", name: "汪彬彬", city: "滁州", unit: "汪彬彬运动康复工作室", business: "运动康复", phone: "17705505910", email: "" },
  { id: "t14", name: "顾梓馨", city: "常州", unit: "OnlyOne佳木孕产美学", business: "老板", phone: "18112872228", email: "444168889@qq.com" },
  { id: "t15", name: "张志静", city: "广州", unit: "导乐公司", business: "分娩导乐", phone: "13928811484", email: "2775148@qq.com" },
  { id: "t16", name: "徐韩", city: "济南", unit: "", business: "治疗师", phone: "15689703728", email: "claurier@qq.com" },
  { id: "t17", name: "蓝青", city: "广州", unit: "广州", business: "全职妈妈", phone: "13826090063", email: "25735200@qq.com" },
  { id: "t18", name: "王秦", city: "北京", unit: "童书妈妈（北京三川滔滔文化传播有限公司）", business: "老师", phone: "18618486765", email: "wangqin567@qq.com" },
  { id: "t19", name: "黄冠英", city: "广州", unit: "米兔孕育", business: "课程总监", phone: "13249624456", email: "229863394@qq.com" },
  { id: "t20", name: "马勤", city: "广州", unit: "安儒月子中心", business: "治疗师", phone: "13903050234", email: "" },
  { id: "t21", name: "毕雨晴", city: "上海", unit: "徐汇区中心医院", business: "治疗师", phone: "17684715238", email: "" },
  { id: "t22", name: "郑倩芸", city: "上海", unit: "徐汇区中心医院", business: "治疗师", phone: "13636534759", email: "" },
  { id: "t23", name: "张小敏", city: "东莞", unit: "广东省东莞市", business: "教育培训", phone: "13925592660", email: "" },
  { id: "t24", name: "丁清", city: "扬州", unit: "F+运动康复中心", business: "全科医生", phone: "13952329009", email: "ariellah@qq.com" },
  { id: "t25", name: "张超楠", city: "开封", unit: "开封市中心医院", business: "康复治疗师", phone: "15837870682", email: "" },
  { id: "t26", name: "陈珩", city: "深圳", unit: "AIGA4M整合医学功能医学抗衰", business: "整合医学营养师", phone: "13600159257", email: "" },
  { id: "t27", name: "田淼", city: "重庆", unit: "重庆市秀山县", business: "治疗师", phone: "13810622454", email: "" },
  { id: "t28", name: "刘莫曦", city: "常德", unit: "湖南常德市", business: "治疗师", phone: "", email: "" },
  { id: "t29", name: "孙洋", city: "", unit: "", business: "健身教练", phone: "18036856357", email: "" },
  { id: "t30", name: "王春艳", city: "常州", unit: "江苏-常州", business: "运动康复", phone: "13806127490", email: "" },
  { id: "t31", name: "高晨珉", city: "佛山", unit: "脊刻好", business: "", phone: "18666371444", email: "519913792@qq.com" },
  { id: "t32", name: "陈珊", city: "福州", unit: "福建省福州市社区医院", business: "治疗师", phone: "17720736689", email: "359560162@qq.com" },
  { id: "t33", name: "代琴纯", city: "深圳", unit: "深圳曼姿碧姿健康咨询公司", business: "健康管理", phone: "13544236833", email: "360390365@qq.com" },
  { id: "t34", name: "李长江", city: "乌鲁木齐", unit: "新疆医科大学第五附属医院康复科", business: "", phone: "13999229586", email: "" },
  { id: "t35", name: "李倩君", city: "江门", unit: "白沙兴盛社区卫生服务中心", business: "中医师", phone: "13823491990", email: "979299408@qq.com" },
  { id: "t36", name: "丁晶晶", city: "西安", unit: "西安立脊康脊柱医学研究院", business: "院长", phone: "15011386694", email: "1461693284@qq.com" },
  { id: "t37", name: "姚俊名", city: "深圳", unit: "广东省深圳市", business: "康复治疗师", phone: "17666052990", email: "916047811@qq.com" },
  { id: "t38", name: "陈彬武", city: "金华", unit: "金华联济医院", business: "康复治疗师", phone: "13486697334", email: "401009456@qq.com" },
  { id: "t39", name: "吕洁", city: "上海", unit: "上海运动康复", business: "康复治疗师", phone: "18602160055", email: "lvdayong145@163.com" },
  { id: "t40", name: "王妙维", city: "成都", unit: "四川大学华西医院", business: "物理治疗师", phone: "15208263260", email: "373595777@qq.com" },
  { id: "t41", name: "宋军哲", city: "海口", unit: "宋军哲中医综合诊所", business: "医生", phone: "13943210525", email: "sjz9905@139.com" },
  { id: "t42", name: "陈素环", city: "漯河", unit: "河南省漯河市第六人民医院", business: "康复医师/主任", phone: "18739550309", email: "1343971780@qq.com" },
  { id: "t43", name: "马春燕", city: "瑞安", unit: "", business: "康复训练师", phone: "13967754601", email: "654425620@qq.com" },
  { id: "t44", name: "朱智杰", city: "常州", unit: "晨·普拉提康复体能中心", business: "普拉提教练", phone: "13961256899", email: "zhuzhijie17@126.com" },
  { id: "t45", name: "黄茂康", city: "佛山", unit: "", business: "自由职业者", phone: "13326735486", email: "" },
  { id: "t46", name: "王健", city: "", unit: "", business: "验光师", phone: "18691639506", email: "916085356@qq.com" },
  { id: "t47", name: "张家琪", city: "深圳", unit: "广东深圳诺亚第", business: "", phone: "15889775964", email: "15889775964@163.com" },
  { id: "t48", name: "贾青青", city: "石家庄", unit: "河北省石家庄市", business: "瑜伽老师", phone: "18231138999", email: "259153237@qq.com" },
  { id: "t49", name: "薄皓天", city: "临沂", unit: "庆华健身", business: "教练", phone: "18253939636", email: "bht18253939636@163.com" },
  { id: "t50", name: "孙晓波", city: "上海", unit: "个体", business: "体能教练", phone: "13805781380", email: "290802643@qq.com" },
  { id: "t51", name: "任海林", city: "上海", unit: "上海", business: "康复治疗师", phone: "", email: "1196076972@qq.com" },
  { id: "t52", name: "陆金花", city: "常州", unit: "常州熙纳全宇健康科技有限公司", business: "视觉训练师", phone: "15061932938", email: "" },
  { id: "t53", name: "赵鹏", city: "", unit: "贝斯特数字艺术网校", business: "工程师", phone: "15800049525", email: "" },
  { id: "t54", name: "张颖", city: "上海", unit: "上海凯谋教育科技", business: "心理咨询师", phone: "13918830994", email: "1151527245@qq.com" },
]

export default therapists
