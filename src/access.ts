export default function (initialState: any) {
	const { role, routers = [] } = initialState
	const routeRole = (foo: { access: string }) => routers.includes(foo.access)

	return {
		PUBLISH: true || ((foo: { access: string }) => routeRole(foo) && role === "TEACHER"),
		TCOMMENT: routeRole,
		ANSWER: (foo: { access: string }) => routeRole(foo) && role === "STUDENT",
		SCOMMENT: routeRole
	}
}
