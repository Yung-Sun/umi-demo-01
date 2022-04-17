import React from "react"
import styles from "./home.less"
import { history } from "umi"
import { Button, Spin } from "antd"
import initialState from "@@/plugin-initial-state/models/initialState"

const Home = () => {
	const { loading } = initialState()
	if (loading) {
		return <Spin size="large" />
	}
	return (
		<div>
			<h1 className={styles.title}>Page home2</h1>
			<Button
				onClick={() => {
					history.push("/index")
				}}
			>
				Jump Index
			</Button>
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

export default Home
