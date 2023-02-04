import { MethodFactory } from "@/api/api_helper"
const method = MethodFactory()
method.GET(async (req, res) => {
  const { id } = req.query

  res.json({
    status: "success",
  })
})

export default method.init()
