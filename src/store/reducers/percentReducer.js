
import { INCRESE_PERCENT } from "../actions/percentActions";
import { progressPercent } from "../initialValues/progressPercentValue";

const initialValues = {
    progressPercent: progressPercent
};


export default function percentReducer(state = initialValues, { type, payload }) {

    switch (type) {
        case INCRESE_PERCENT:
            // let advertisement = state.favoriteItems.find(f => f.jobAdvertisement.id === payload.id);
            let percentValue = state.progressPercent.find(p => p.percent !== 25)
            if (percentValue) {
                return {
                    ...state,
                    progressPercent: [{ percent: 25 }]
                }
            } else {
                return {
                    ...state,
                    progressPercent: [{ percent: state.progressPercent.percent + payload }]
                }
            }
        default:
            return state;
    }
};