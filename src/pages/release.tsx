import React from "react"
import { history } from "umi"
import { Button } from "antd"

const Release = () => {
	return (
		<div>
			<h1>Page Release</h1>
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

export default Release
