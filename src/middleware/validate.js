export const validate = schema => (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    // if(error){
    //     return res.status(400).json({ message: error.details[0].message })
    // }
    
    // user centralized error handler
    if(error){
        next(error);
    }
    
    next();
}