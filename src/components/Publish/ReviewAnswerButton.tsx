import { Button, Spin } from "antd"
import React, { useState } from "react"
import { MicroApp } from "umi"

const ReviewAnswerButton = () => {
	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(true)
	const toggleVisible = () => {
		setVisible(!visible)
	}
	const [answer, setAnswer] = useState("我是答案")
	setTimeout(() => {
		setAnswer("setTimeout 模拟请求回来的答案")
		setLoading(false)
	}, 500)
	const doSomething = () => {
		console.log("我是引擎的方法噢")
	}
	return (
		<div>
			<Button onClick={toggleVisible}>查看实训答案</Button>
			{visible && (
				<Spin spinning={loading}>
					<MicroApp name="voucher1" answer={answer} mode={"ANSWER"} xxx={doSomething} />
				</Spin>
			)}
		</div>
	)
}

export default ReviewAnswerButton
