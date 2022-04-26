import React from "react"
import { Redirect, useModel } from "umi"
import { Spin } from "antd"

export default () => {
	const { initialState, loading } = useModel("@@initialState")
	console.log(loading)
	if (loading) {
		return <Spin size={"large"} />
	}
	const isTeacher = initialState ? initialState.role === "TEACHER" : false
	if (isTeacher) {
		return <Redirect to="/publish" />
	} else {
		return <Redirect to="/answer" />
	}
}
