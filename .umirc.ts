import { defineConfig } from "umi"
import { routes } from "./config/routes"
import { dva } from "./config/dva"
import { qiankun } from "./config/qiankun"
import { config } from "./config/config"

export default defineConfig({
	nodeModulesTransform: {
		type: "none"
	},
	layout: {},
	fastRefresh: {},
	mfsu: {},
	routes,
	dva,
	qiankun,
	...config
})
