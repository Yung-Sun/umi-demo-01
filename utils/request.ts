import { request } from "umi"
// 基于 umi 的 request 的二次封装
// umi 的 @umijs/plugin-request 插件，不知为何把 umi-request 的快捷请求砍了
// 于是乎重新给封装一下
type RequestInEngine = <T>(url: string, params: T | {}) => Promise<any>

// get 请求
export const get = (url: string, params: any = {}) => {
	return request(url, {
		params,
		headers: {
			format: "query"
		}
	})
}

// 数据类型为 Form的 post 请求
export const post: RequestInEngine = (url: string, params: any) => {
	return request(url, {
		method: "post",
		params,
		requestType: "form",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			format: "query"
		}
	})
}

// 数据类型为 JSON 的 post 请求
export const postJSON: RequestInEngine = (url, data = {}) => {
	return request(url, {
		method: "post",
		data,
		requestType: "json",
		headers: {
			"Content-Type": "application/json",
			format: "json"
		}
	})
}

//TODO 上传文件的 post 请求
// export const postFile = (url: string, params: any) => {
// 	return request(url, { method: "post", params })
// }
