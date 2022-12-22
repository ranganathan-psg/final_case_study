export const GETALLJOBS = "GET_ALL_JOBS";
export const APPYJOB = "APPY_JOB";
export const CONTACTUS = "CONTACT_US"

export const getAllJobs = () => {
    return async function (dispatch, getstate, serviceapi) {
        await serviceapi.get("/jobs").then((data) => {
            // console.log(data)
            dispatch(
                {
                    type: GETALLJOBS,
                    data: data.data
                }
            )
        })
    }
}

export const applyJob = (appdata) => {
    return async function (dispatch, getState, serviceapi) {
        await serviceapi.post("applications",appdata).then((data) => {
            console.log("action", data)
            dispatch(
                {
                    type: APPYJOB,
                    data: "Applied Successfuly"
                }
            )
            return Promise.resolve(getState());
        }).catch((error) => {
            dispatch(
                {
                    type: APPYJOB,
                    data: "Application Failed"
                }
            )
        })
    }
}


export const contactUs = (appdata) => {
    return async function (dispatch, getState, serviceapi) {
        await serviceapi.post("messages",appdata).then((data) => {
            console.log("action", data)
            dispatch(
                {
                    type: CONTACTUS,
                    data: "Thanks for Contacting will get back to you soon! ☺️"
                }
            )
            return Promise.resolve(getState());
        }).catch((error) => {
            dispatch(
                {
                    type: CONTACTUS,
                    data: "Something went wrong!.. Please try again later!"
                }
            )
        })
    }
}