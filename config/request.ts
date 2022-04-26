import { RequestConfig } from "@@/plugin-request/request"

// TODO 可改为环境变量
const baseUrl = "http://192.168.2.105:8765/api/"

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
		Authorization:
			"bearer " +
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEwMzkwLCJyb2xlIjoiVEVBQ0hFUiIsInVzZXJfbmFtZSI6IuWlvei_kOadpSIsInNjb3BlIjpbInJlYWQiXSwic2Nob29sSWQiOjY3LCJvblRyaWFsIjowLCJleHAiOjE2NTA5NTE2NDAsImF1dGhvcml0aWVzIjpbIlJPTEVfVEVBQ0hFUiJdLCJqdGkiOiIwYWM1ZDEzMy0zZDRlLTQ3MDAtYmMzZi02ZmJmN2RiNjEzZDUiLCJjbGllbnRfaWQiOiJ2dWUiLCJ1c2VybmFtZSI6Imdvb2RsdWNrIiwiaGVhZGVySW1nIjoiaHR0cDovL2NvdXJzZS1yLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vMjAyMTA5MDMvMTYzMDYzMjk5NTAxMDEwNjEucG5nIn0.BiySMcLf_DDOXYubdNrXSdeueGWKKOarExS1xRvL064",
		sign: "1bc4d5b124f224f882d784c259b8e3a6",
		format: "query",
		"Content-Type": "application/json"
	}
}
