import { RequestConfig } from "@@/plugin-request/request"

// TODO 可改为环境变量
const baseUrl = "http://192.168.2.105:8765/api/"
const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEwMzkwLCJyb2xlIjoiVEVBQ0hFUiIsInVzZXJfbmFtZSI6IuWlvei_kOadpSIsInNjb3BlIjpbInJlYWQiXSwic2Nob29sSWQiOjY3LCJvblRyaWFsIjowLCJleHAiOjE2NTE2MzMxNTgsImF1dGhvcml0aWVzIjpbIlJPTEVfVEVBQ0hFUiJdLCJqdGkiOiJkZDA0OWYyOS1jZDIyLTQ1NzQtOTBkZS05ZDY0YzNlNDIyMTIiLCJjbGllbnRfaWQiOiJ2dWUiLCJ1c2VybmFtZSI6Imdvb2RsdWNrIiwiaGVhZGVySW1nIjoiaHR0cDovL2NvdXJzZS1yLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vMjAyMTA5MDMvMTYzMDYzMjk5NTAxMDEwNjEucG5nIn0.Y13iKbIUDxSUv2PPDR8gmE8n4eXJjNPiH5XA8gTEklc"
const sign = "1bc4d5b124f224f882d784c259b8e3a6"

export const requestConfig: RequestConfig = {
	prefix: baseUrl,
	errorConfig: {
		adaptor: (resData) => {
			return {
				...resData,
				success: resData.ok,
				errorMessage: resData.msg || `未知错误，请联系管理员，错误代码：${resData.code}`
			}
		}
	},
	headers: {
		"Content-Type": "application/json",

		Authorization: "bearer " + token,
		sign,
		format: "query",
		timestamp: Math.ceil(new Date().getTime() / 1000).toString(),
		signMethod: "MD5",
		appKey: "ranye",
		version: "1.0"
	}
}
