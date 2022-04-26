import { Button } from "antd"
import TeacherReviewSubmittedRecord from "@/components/Publish/TeacherReviewSubmittedRecord"
import { useState } from "react"

const TeacherReviewSubmittedRecordButton = ({ componentConfig }: any) => {
	const [tableVisible, setTableVisible] = useState(false)
	return (
		<div>
			<Button
				onClick={() => {
					setTableVisible(!tableVisible)
				}}
			>
				{componentConfig.buttonName.value}
			</Button>
			{tableVisible && <TeacherReviewSubmittedRecord componentConfig={componentConfig} />}
		</div>
	)
}
export default TeacherReviewSubmittedRecordButton
