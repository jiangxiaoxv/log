import { ElButton, ElDialog } from 'element-plus'
// 引入类型，加上 type

const setupElementPlus = (app) => {
  app.use(ElButton)
  app.use(ElDialog)
}

export default setupElementPlus
