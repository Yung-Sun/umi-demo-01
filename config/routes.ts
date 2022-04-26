const defaultRoutesConfig = {
	headerRender: false,
	footerRender: false,
	menuRender: false,
	menuHeaderRender: false,
	hideChildrenInMenu: true,
	hideInMenu: true,
	hideInBreadcrumb: true
}

export const routes = [
	{
		path: "/publish",
		component: "@/pages/Publish/Publish",
		access: "PUBLISH",
		...defaultRoutesConfig
	},
	{
		path: "/teacherComment",
		component: "@/pages/TeacherComment/TeacherComment",
		access: "TCOMMENT",
		...defaultRoutesConfig
	},
	{
		path: "/answer",
		component: "@/pages/Answer/Answer",
		access: "ANSWER",
		...defaultRoutesConfig
	},
	{
		path: "/studentComment",
		component: "@/pages/StudentComment/StudentComment",
		access: "SCOMMENT",
		...defaultRoutesConfig
	},
	{
		path: "/",
		component: "@/pages/auth",
		...defaultRoutesConfig
	},
	{ redirect: "/" }
]
