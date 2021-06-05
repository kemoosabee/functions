exports.handler = async (event) => {
    
    const Answer = {
        "error" : "",
        "string" : "",
        "answer" : ""
    };
    
    if(event.queryStringParameters){
        var x = event.queryStringParameters.x;
        var y = event.queryStringParameters.y;
        
        if((parseInt(x)) != x || (parseInt(y)) != y) {
            Answer.error = true,
            Answer.string = "Please provide a numeric value",
            Answer.answer = 0
        } else {
            Answer.error = false,
            Answer.string = x + "/" + y + "=" + ((parseInt(x)) / (parseInt(y))),
            Answer.answer = (parseInt(x)) / (parseInt(y))
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(Answer),
        };
        return response;
    } else {
        Answer.error = true,
        Answer.string = "Please provide a numeric value",
        Answer.answer = 0
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(Answer),
        };
        return response;
    }
    
    
};
