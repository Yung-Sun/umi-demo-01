import React from "react"
import styles from "./Answer.less"
import { history } from "umi"
import { Button } from "antd"

const Answer = () => {
	return (
		<div>
			<h1 className={styles.title}>Page Student Home</h1>
			<Button
				onClick={() => {
					history.push("/record")
				}}
			>
				Jump Record
			</Button>
			<Button
				onClick={() => {
					history.push("/release")
				}}
			>
				Jump Release
			</Button>
		</div>
	)
}

export default Answer
