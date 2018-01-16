let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("Successfully Triggered");
	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:publisher_topic'
	}).promise()
		.then(data => {
			// your code goes here

			console.log("success");
		})
		.catch(err => {
			// error handling goes here
			console.log("failed" ,err);
		});



}