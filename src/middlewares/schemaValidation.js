const schemaValidation = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, {abortEarly: false});
      if (error) {
        if(error.details[0].type === "string.uri"){
          return res.status(422).send(error.details.map((detail) => detail.message));
        }
        return res.status(400).send(error.details.map((detail) => detail.message));
      }
      next();
    };
  };
  
  export default schemaValidation;
  