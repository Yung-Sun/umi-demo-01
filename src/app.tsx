import { request as request2, RequestConfig } from "umi"
import { requestConfig } from "../config/request"
import { postJSON } from "../utils/request"

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
		const params = { courseRole: "TEACHER", trainingResourceId: 204 }
		postJSON("training/v1/flow/training/part", params)
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

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = {
	apps: [
		{
			name: "voucher1", // 唯一 id
			entry: "http://192.168.2.154:7104", // html entry
			props: {
				msg: "Hello Qiankun",
				fn1: () => {
					console.log("fuck")
				}
			}
		}
	]
}
