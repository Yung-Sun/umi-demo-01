import React from "react"
import styles from "./StudentComment.less"
import { history } from "umi"
import { Button } from "antd"

const StudentComment = () => {
	return (
		<div>
			<h1 className={styles.title}>Student Comment Page 学生评分</h1>
			<Button
				onClick={() => {
					history.push("/")
				}}
			>
				返回学生作答
			</Button>
		</div>
	)
}

export default StudentComment
