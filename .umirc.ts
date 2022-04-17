import { defineConfig } from "umi"

const defaultRoutesConfig = {
	headerRender: false,
	footerRender: false,
	menuRender: false,
	menuHeaderRender: false,
	hideChildrenInMenu: true,
	hideInMenu: true,
	hideInBreadcrumb: true
}

export default defineConfig({
	nodeModulesTransform: {
		type: "none"
	},
	layout: {},
	routes: [
		{
			path: "/home",
			component: "@/pages/home",
			access: "canReadHome",
			...defaultRoutesConfig
		},
		{
			path: "/index",
			component: "@/pages/index",
			access: "canReadIndex",
			...defaultRoutesConfig
		},
		{
			path: "/record",
			component: "@/pages/record",
			access: "canReadRecord",
			...defaultRoutesConfig
		},
		{
			path: "/release",
			component: "@/pages/release",
			access: "canReadRelease",
			...defaultRoutesConfig
		},
		{
			path: "/",
			redirect: "/home"
		}
	],
	fastRefresh: {}
})
