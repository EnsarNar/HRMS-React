
export const ADD_RESUME = "ADD_RESUME";
export const DELETE_RESUME = "DELETE_RESUME";


export const addResume = (resume) => {
    return {
        type: ADD_RESUME,
        payload: resume
    }
};

export const deleteResume = (resume) => {
    return {
        type: DELETE_RESUME,
        payoad: resume
    }
};



