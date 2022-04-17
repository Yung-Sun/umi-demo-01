import React from "react"
import styles from "./index.less"
import { Button } from "antd"
import { PoweroffOutlined } from "@ant-design/icons"
import { history } from "umi"

export default function Page() {
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<Button
				type="primary"
				icon={<PoweroffOutlined />}
				onClick={() => {
					history.push("/home")
				}}
			>
				返回首页
			</Button>
		</div>
	)
}
