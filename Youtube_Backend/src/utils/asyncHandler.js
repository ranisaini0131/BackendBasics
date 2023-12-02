const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }








// const asyncHandler = () => { }
// const asyncHandler = (func) => () => { }
// const asyncHandler = (func) => async() => { }

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(Err.code || 500).jso({
//             success: false,
//             message: error.message
//         })
//     }
// }