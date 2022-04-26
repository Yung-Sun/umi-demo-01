import React from "react"
import styles from "./TeacherComment.less"
import { history } from "umi"
import { Button } from "antd"

const TeacherComment = () => {
	return (
		<div>
			<h1 className={styles.title}>Teacher Comment Page 教师评分</h1>
			<Button
				onClick={() => {
					history.push("/")
				}}
			>
				返回教师发布
			</Button>
		</div>
	)
}

export default TeacherComment
