import { ImmerReducer } from "umi"

export interface IndexModelState {
	n: number
}

export interface IndexModelType {
	namespace: "index"
	state: IndexModelState
	reducers: {
		add: ImmerReducer<IndexModelState>
		reduce: ImmerReducer<IndexModelState>
	}
}

const Index: IndexModelType = {
	namespace: "index", // 定义model名，如果没声明，会以文件作为namespace
	state: {
		n: 0
	},
	reducers: {
		add(state, { payload }) {
			state.n += payload
		},
		reduce(state, { payload }) {
			state.n -= payload
		}
	}
}

export default Index
