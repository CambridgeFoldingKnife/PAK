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
  { id: "t01", name: "赵正天", city: "海口", unit: "", business: "康复师", phone: "", email: "" },
  { id: "t02", name: "代琴纯", city: "惠州", unit: "深圳曼姿碧姿健康咨询公司", business: "健康管理", phone: "", email: "" },
  { id: "t03", name: "郑慧娟", city: "上海", unit: "上海优蓓健康中心", business: "物理治疗师", phone: "", email: "" },
  { id: "t04", name: "张弘驰", city: "天津", unit: "天津凯旋健身", business: "Acsm培训师", phone: "", email: "" },
  { id: "t05", name: "蔡盛", city: "成都", unit: "LCAO康复中心", business: "", phone: "", email: "" },
  { id: "t06", name: "周俊杰", city: "鹤壁", unit: "鹤壁市人民医院", business: "康复治疗师", phone: "", email: "" },
  { id: "t07", name: "林仲岘", city: "香港", unit: "自然疗法医师", business: "自然疗法医师", phone: "", email: "" },
  { id: "t08", name: "倪茂祖", city: "常州", unit: "倪茂祖运动康复工作室", business: "", phone: "", email: "" },
  { id: "t09", name: "李鼎", city: "杭州", unit: "浙江省杭州市 本原运动康复", business: "康复治疗师", phone: "", email: "" },
  { id: "t10", name: "李俊", city: "武汉", unit: "武汉市普仁医院疼痛科", business: "康复治疗师", phone: "", email: "" },
  { id: "t11", name: "彭磊", city: "武汉", unit: "武汉总医院", business: "医生", phone: "", email: "" },
  { id: "t12", name: "王振宇", city: "上海", unit: "上海复康特健康管理有限公司", business: "", phone: "", email: "" },
  { id: "t13", name: "于梅君", city: "北京", unit: "脊挚运动康复", business: "康复治疗师", phone: "", email: "" },
  { id: "t14", name: "商存海", city: "广州", unit: "广州娇莉芙个人护理用品有限公司", business: "健康管理", phone: "", email: "" },
  { id: "t15", name: "钟灿波", city: "", unit: "Fu运动康复健康管理有限公司", business: "治疗师", phone: "", email: "" },
  { id: "t16", name: "王世峰", city: "阜阳", unit: "安徽智能科技有限公司", business: "理疗师", phone: "", email: "" },
]

export default therapists
