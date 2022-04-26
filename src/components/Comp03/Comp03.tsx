import { useDispatch, useSelector, IndexModelState } from "umi"
import { Button } from "antd"
import React from "react"

export interface IndexState {
	index: IndexModelState
}

const Comp03 = ({ componentConfig }: any) => {
	const indexState = useSelector((state: IndexState) => state.index)
	const dispatch = useDispatch()
	const reduce = () => {
		dispatch({
			type: "index/add",
			payload: 2
		})
	}
	console.log(componentConfig)
	return (
		<div style={{ background: "salmon" }}>
			<h1>教师发布-组件3</h1>
			<div>The Number is: {indexState.n}</div>
			<Button onClick={reduce}>+2</Button>
		</div>
	)
}

export default Comp03
