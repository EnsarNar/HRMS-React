import { ADD_RESUME, DELETE_RESUME } from "../actions/resumeActions";
import { resumes } from "../initialValues/resumes";

const initialState = {
    resumes: resumes,
}

export default function resumeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_RESUME:
            let resumeValue = state.resumes.find(r => r.resume.id === payload.id);
            if (resumeValue) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    resumes: [...state.resumes, { resume: payload }]
                }
            }
        case DELETE_RESUME:

            return {
                ...state,
                resumes: state.resumes.filter(r => r.resume.id !== payload.id)
            }

        default:
            return state;
    }


};
