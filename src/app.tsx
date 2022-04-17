import { request } from "umi"

export async function getInitialState() {
	// 获取用户信息
	const getUserInfo = new Promise((resolve) => {
		request("http://rap2api.taobao.org/app/mock/300916/user/info").then((res) => {
			resolve(res)
		})
	})
	// 获取路由信息
	const getRouterInfo = new Promise((resolve) => {
		request("http://rap2api.taobao.org/app/mock/300916/user/router").then((res) => {
			resolve(res)
		})
	})
	let result = {}
	await Promise.all([getUserInfo, getRouterInfo]).then((res) => {
		res.forEach((item) => {
			result = Object.assign(result, item)
		})
	})
	return result
}
