import { Table, Space } from "antd"
import React, { useEffect, useState } from "react"

// import { request, useModel } from "umi"

interface TableDataSourceItem {
	key: string
	name: string
	id: number
	correctRate: string
	submitNumber: number
	lastSubmitDate: string
}

const TeacherReviewSubmittedRecord = ({ componentConfig }: any) => {
	const dataSource = [
		{
			key: "1",
			name: "靓仔",
			id: 16,
			correctRate: "5.3%",
			submitNumber: 18,
			lastSubmitDate: "2021-04-09 18:06"
		},
		{
			key: "2",
			name: "哈哈哈",
			id: 17,
			correctRate: "99.8%",
			submitNumber: 685,
			lastSubmitDate: "2022-04-20 18:06"
		}
	]
	const columns = [
		{
			title: "学生姓名",
			dataIndex: "name",
			key: "key"
		},
		{
			title: "学号",
			dataIndex: "id",
			key: "key"
		},
		{
			title: "正确率",
			dataIndex: "correctRate",
			key: "key"
		},
		{
			title: "提交次数",
			dataIndex: "submitNumber",
			key: "key"
		},
		{
			title: "最后一次提交时间",
			dataIndex: "lastSubmitDate",
			key: "key"
		},
		{
			title: "操作",
			key: "key",
			render: () => (
				<Space size="middle">
					<a href={"https://www.bilibili.com/"} target={"_blank"}>
						{componentConfig.detailButtonName.value}
					</a>
				</Space>
			)
		}
	]

	const [tableDataSource, setTableDataSource] = useState<TableDataSourceItem[]>([])
	const [tableLoading, setTableLoading] = useState(true)

	const getData = setTimeout(() => {
		setTableDataSource(dataSource)
		setTableLoading(false)
	}, 1000)

	useEffect(() => {
		return () => {
			clearTimeout(getData)
		}
	})

	return (
		<div>
			<h1>{componentConfig.dialogName.value || "默认标题"}</h1>
			<Table dataSource={tableDataSource} columns={columns} loading={tableLoading} />
		</div>
	)
}

export default TeacherReviewSubmittedRecord
