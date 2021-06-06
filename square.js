exports.handler = async (event) => {
    
    const Answer = {
        "error" : "",
        "string" : "",
        "answer" : ""
    };
    
    if(event.queryStringParameters){
        var x = event.queryStringParameters.x;
        var y = event.queryStringParameters.y;
        
        if((parseInt(x)) != x) {
            Answer.error = true,
            Answer.string = "Please provide a numeric value",
            Answer.answer = 0
        } else {
            Answer.error = false,
            Answer.string = x + "*" + x + "=" + ((parseInt(x)) * (parseInt(x))),
            Answer.answer = (parseInt(x)) * (parseInt(x))
        }

        const response = {
            statusCode: 200,
            headers:{
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods" : "*",
            },
            body: JSON.stringify(Answer),
        };
        return response;
    } else {
        Answer.error = true,
        Answer.string = "Please provide a numeric value",
        Answer.answer = 0
        
        const response = {
            statusCode: 200,
            headers:{
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods" : "*",
            },
            body: JSON.stringify(Answer),
        };
        return response;
    }
    
    
};
