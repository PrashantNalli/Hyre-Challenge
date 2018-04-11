//create a function for the event when the button is clicked
function w()
{
	//initialize a variable to get the value from the text field and multiply it *1000 to convert from milli second to second
	var x = document.getElementById("numberX").value;
	var sec = x*1000;

	//check if the input is given. if the input is not null or 0, then perform function else perform validation
	if(sec!=0)
	{
		//Print the first line then pass the value to the async function
		document.getElementById("targetDiv").innerHTML="Please wait for " +x+" seconds";
		asyncCall(sec);
	}
	else
	{
		asyncCall(sec); //Or document.getElementById("errorDiv").innerHTML="Please enter a value";
	}

}

async function asyncCall(n) 
{
	//check the condition then perform await and print on the targetDiv or the errorDiv
	if(n==0)
	{
		var result = await resolveAfterXSeconds(1000);
		document.getElementById("errorDiv").innerHTML="Please enter a value";
	}
	else
	{
		var result = await resolveAfterXSeconds(n);
		document.getElementById("targetDiv").innerHTML="process completed";
	}
}

function resolveAfterXSeconds(n) 
{
	//set the timeout and return the value
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, n);
  });
}
