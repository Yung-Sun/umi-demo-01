// src/access.ts
export default function (initialState: any) {
	const { role, routers } = initialState
	console.log(initialState)
	const routeRole = (foo: { access: string }) => routers.includes(foo.access)

	return {
		canReadHome: true,
		canReadIndex: routeRole,
		canReadRecord: routeRole,
		canReadRelease: (foo: { access: string }) => routeRole(foo) && role === "teacher"
	}
}
