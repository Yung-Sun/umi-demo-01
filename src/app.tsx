import { request as request2, RequestConfig } from "umi"
import { requestConfig } from "../config/request"

// 请求的相关配置
export const request: RequestConfig = requestConfig

// 初始化全局参数
export async function getInitialState() {
	// 获取用户信息
	const getUserInfo = new Promise((resolve) => {
		// request2("http://rap2api.taobao.org/app/mock/300916/user/info").then((res) => {
		// 	resolve(res)
		// })
		setTimeout(() => {
			resolve({
				name: "Richard",
				id: "373",
				role: "TEACHER",
				token:
					"'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEwMzkwLCJyb2xlIjoiVEVBQ0hFUiIsInVzZXJfbmFtZSI6IuWlvei_kOadpSIsInNjb3BlIjpbInJlYWQiXSwic2Nob29sSWQiOjY3LCJvblRyaWFsIjowLCJleHAiOjE2NTA1Mjc1ODYsImF1dGhvcml0aWVzIjpbIlJPTEVfVEVBQ0hFUiJdLCJqdGkiOiJiMGJjZDM0Yi00ZmNhLTQyNTktYjc0YS0xZGMxMmRjOWNlNjQiLCJjbGllbnRfaWQiOiJ2dWUiLCJ1c2VybmFtZSI6Imdvb2RsdWNrIiwiaGVhZGVySW1nIjoiaHR0cDovL2NvdXJzZS1yLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vMjAyMTA5MDMvMTYzMDYzMjk5NTAxMDEwNjEucG5nIn0.v_xizhrrmll3D5LRSAfhSJQiuqbt-THSrYLXDx58AqI'"
			})
		}, 500)
	})
	// 获取路由信息
	const getRouterInfo = new Promise((resolve) => {
		request2("training/v1/flow/training/part", {
			method: "post",
			data: JSON.stringify({
				trainingResourceId: 204,
				courseRole: "STUDENT"
			}),
			requestType: "json"
		})
			.then((res) => {
				const { data } = res
				resolve({ routers: data })
			})
			.catch((error) => {
				console.log(error)
				resolve({ routers: [] })
			})
	})

	interface InitialStateResult {
		role?: string
		routers: string[]
	}

	let InitialStateResult: InitialStateResult = { routers: [] }

	await Promise.all([getUserInfo, getRouterInfo]).then((res) => {
		res.forEach((item) => {
			InitialStateResult = Object.assign(InitialStateResult, item)
		})
	})
	return InitialStateResult
}
