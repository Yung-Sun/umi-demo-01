import React from "react"
import { history } from "umi"
import { Button } from "antd"

const Record = () => {
	return (
		<div>
			<h1>Page Record</h1>
			<Button
				onClick={() => {
					history.push("/home")
				}}
			>
				Jump Home
			</Button>
		</div>
	)
}

export default Record
