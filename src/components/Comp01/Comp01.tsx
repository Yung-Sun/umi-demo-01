import { useDispatch, useSelector, IndexModelState } from "umi"
import { Button } from "antd"
import React from "react"

export interface IndexState {
	index: IndexModelState
}

const Comp01 = ({ componentConfig }: any) => {
	const indexState = useSelector((state: IndexState) => state.index)
	const dispatch = useDispatch()
	const reduce = () => {
		dispatch({
			type: "index/reduce",
			payload: 1
		})
	}

	// console.log(componentConfig)
	return (
		<div style={{ background: "greenyellow" }}>
			<h1>教师发布-组件1</h1>
			<div>The Number is: {indexState.n}</div>
			<Button onClick={reduce}>-1</Button>
		</div>
	)
}

export default Comp01
