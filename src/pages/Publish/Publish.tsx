import React, { useEffect, useState } from "react"
import { history, request, useModel } from "umi"
import { Button } from "antd"
import styles from "./Publish.less"

import ReviewAnswerButton from "@/components/Publish/ReviewAnswerButton"
import TeacherReviewSubmittedRecordButton from "@/components/Publish/TeacherReviewSubmittedRecordButton"
import PreviewTraining from "@/components/Publish/PreviewTraining"

interface ComponentsList {
	[key: string]: ComponentsListItem
}

interface ComponentsListItem {
	code: string
	name: string
	attributes: ComponentsItemAttribute[]
}

interface ComponentsItemAttribute {
	[key: string]: {
		code: string
		type: string
		value: string
	}
}

interface DynamicComponentMap {
	[key: string]: any
}

const Publish = () => {
	const routersMap = [
		{ name: "TCOMMENT", route: "/teacherComment", description: "教师评分" },
		{ name: "SCOMMENT", route: "/studentComment", description: "学生评分" }
	]
	const { initialState } = useModel("@@initialState")
	const [componentsList, setComponentsList] = useState<ComponentsList>({})
	const dynamicComponentMap: DynamicComponentMap = {
		reviewAnswer: ReviewAnswerButton,
		previewTraining: PreviewTraining,
		teacherReviewSubmittedRecord: TeacherReviewSubmittedRecordButton
	}
	const jumpTo = (url: string) => history.push(url)

	useEffect(() => {
		request("training/v1/flow/training/part/info", {
			method: "post",
			data: JSON.stringify({
				trainingResourceId: 204,
				part: "PUBLISH"
			}),
			requestType: "json"
		}).then((res) => {
			setComponentsList({ ...res.data.flowComponents })
		})
	}, [])

	return (
		<main>
			<h1 className={styles.title}>Publish Page 教师发布</h1>
			{Object.keys(componentsList).map((name, index) => {
				const DynamicComponent = dynamicComponentMap[name]
				if (componentsList[name]) {
					return (
						<div key={index}>
							<br />
							<br />
							<DynamicComponent componentConfig={componentsList[name].attributes} />
						</div>
					)
				}
			})}
			<footer>
				{routersMap.map((item) => {
					if (initialState?.routers.includes(item.name)) {
						return (
							<Button key={item.name} onClick={() => jumpTo(item.route)}>
								{item.description}
							</Button>
						)
					}
				})}
			</footer>
		</main>
	)
}

export default Publish
