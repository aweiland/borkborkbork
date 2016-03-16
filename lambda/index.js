var child_process = require('child_process');
var path = require('path');

exports.handler = function(event, context) {
	var taskRoot = process.env['LAMBDA_TASK_ROOT'] || __dirname;
	var strToReturn = "";
	process.env.PATH += ':' + taskRoot;
	
	var child = child_process.spawn("chef");


	child.stdout.on('data', function (data) {
                    	console.log('stdout: ' + data);
                    	var dataString = data.toString();
                    	strToReturn += dataString;
                    });

	child.on('close', function (code) {
             console.log('child process exited with code ' + code);
             context.succeed(strToReturn);
     		});

	setTimeout(function(){
		child.stdin.write(event.text + "\n");
		// child.stdin.write("This was a great evening- I would like to thank everyone for their wonderful support.\n");
		child.stdin.end();
	}, 100);

	
}
