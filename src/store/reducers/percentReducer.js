
import { INCRESE_PERCENT } from "../actions/percentActions";
import { progressPercent } from "../initialValues/progressPercentValue";

const initialValues = {
    progressPercent: progressPercent
};


export default function percentReducer(state = initialValues, { type, payload }) {

    switch (type) {
        case INCRESE_PERCENT:
            if (state.progressPercent.percent >= 100) {
                return {
                    ...state,
                    progressPercent: { percent: 0 }
                }
            } else {
                return {
                    ...state,
                    progressPercent: { percent: state.progressPercent.percent + payload }
                }
            }

        default:
            return state;
    }
};