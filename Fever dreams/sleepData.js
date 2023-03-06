autowatch = 1;

inlets = 3;  //inlets and outlets

outlets = 6;

//Asleep
var S2 = 2.0;
var S3 = 3.0;
var S4 = 4.0;

//Semi Conscious
var A1 = 0.2;
var A2 = 0.5;
var A3 = 0.1;

//Rem sleep
var REM = 5.0;


//Disorder switch
var sleepMode;


//Bruxism
//Time values
var bruxData = [17.00,17.46,17.47,18.26,18.47,19.17,19.28,19.47,20.17,20.28,20.47,21.05,21.17
				,21.47,22.17,22.27,22.37,22.47,23.12,23.17,23.24,23.47,24.17,24.47,25.17,25.47,26.17,26.47]; //28
				
//sleep levels
var bruxSleepType = [S2,S2,A3,A3,S2,S2,A2,S2,S2,A1,S2,S2,S2,A1,A1,S2,A1,S2,A1,
					REM,REM,REM,REM,REM,REM,REM,REM,REM];
//time been asleep
var bruxismTimeAsleep = 2.5;

//event duration
var bruxEventDuration = [30,30,13,15,30,30,11,30,30,11,30,7,30,30,30,30,6,5,30,5,30,4,30,30,30,30,30,30];


//Insomnia
var insomData = [17.00,17.12,17.42,17.44,17.56,18.12,18.42,18.52,19.12,19.42,20.00,20.12,20.42,20.50,
				21.12,21.42,22.12,22.42,23.12,23.42,24.12,24.42,25.12,25.42,26.12,26.42,27.12,27.42];

var insomSleepType = [S2,S2,S2,A2,A2,S2,S3,A2,S3,S3,A3,S2,S2,A3,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var insomTimeAsleep = 2.5;

var insomEventDuration = [30,30,30,6,8,30,30,17,30,30,21,30,30,22,30,30,30,30,30,30,30,30,30,30,30,30,30,30];


//Narcoplepsy
var narcData = [17.00,17.05,17.13,17.43,17.46,18.13,18.43,19.12,19.13,19.43,19.46,20.00,20.13,20.43,21.13,
				21.36,21.43,22.03,22.13,22.23,22.43,22.55,23.13,23.43,24.09,24.13,24.39,24.43,25.03,25.13,
				25.27,25.43,26.13,26.27,26.43,26.45];

var narcSleepType = [S2,A3,S2,S2,A2,S2,S2,A1,S2,S3,A1,A1,S3,S3,S3,A1,S2,A1,S3,A1,S2,A1,
					 S3,A1,S4,S3,A2,S4,A3,S2,A3,S2,A2,S2,S2,A3,S2,A3];

var narcTimeAsleep = 6.15;

var narcEventDuration = [30,20,30,30,13,30,30,8,30,30,5,10,30,30,30,11,30,3,30,8,30,12,30,30,13,30,21,30,10,
						30,27,30,30,12,30,11];


							
//REM behaviour disorder
var rbdData =[17.00,17.09,17.39,18.09,18.39,19.09,19.39,20.09,20.39,21.09,21.25,21.39,22.09,22.32,22.39,22.53,
						23.09,23.39,24.09,24.39,25.09,25.39,26.09,26.39];

var rbdSleepType = [REM,REM,REM,REM,REM,REM,REM,S2,REM,S2,A1,S2,S2,A1,S2,A1,REM,REM,REM,REM,REM,REM,REM,REM];

var rbdTimeAsleep = 1.56

var rbdEventDuration = [30,30,30,30,30,30,30,30,30,30,6,30,30,6,30,6,30,30,30,30,30,30,30];




//Average Person
var controlData = [17.00,17.12,17.23,17.42,18.12,18.42,19.12,19.36,19.42,19.54,20.12,20.19,20.42,21.05,21.12,
					21.17,21.42,21.46,22.12,22.21,22.38,22.42,22.49,22.56,23.02,23.12,23.18,23.27,23.42,23.45,
					24.07,24.12,24.20,24.29,24.38,24.42,25.12,25.42,25.48,26.02,26.12,26.13,26.33,26.42,26.51,
					26.59];

var controlSleepType = [A1,S4,A1,S4,S4,S4,S4,A1,S4,A1,S4,A1,S4,A1,S4,A2,S4,A2,A2,S3,A2,A2,S3,S3,A1,A1,S3,A2,A1,
						S3,A2,A1,A3,S3,S3,S3,A1,A2,A2,S3,A1,S3,A1,A2];
var controlTimeAsleep = 1.1;
var controlEventDuration = [6,30,11,30,30,30,30,8,30,9,30,4,309,30,7,30,33,30,13,7,30,5,4,5,30,4,4,30,10,4,30,5,
							3,23,30,30,30,4,4,4,30,3,30];



function sleepType(mode)
	{
		sleepMode = mode;		
	}
	
function run(sleepTime)
{
	if(sleepMode == 1)
	{
		bruxism(sleepTime);
	}
	if(sleepMode == 2);
	{
		insomnia(sleepTime);
	}
	if(sleepMode == 3)
	{
		narcolepsy(sleepTime);
	}
	if(sleepMode == 4)
	{
		rbd(sleepTime);	
	}
	if(sleepMode == 5)
	{
	    averagePerson(sleepTime);	
	}
		
}


function bruxism(sleepTime)
{	
	
	sleepTime += 17.00; //clock is mapped to the 17 past midnight values
	
	
	outlet(3,bruxismTimeAsleep * 10);

	for(var i = 0; i < bruxData.length; i++) //runs through the time values array
	{
		if(bruxData[i] == sleepTime)
		{
			outlet(0,1);
			outlet(2,bruxSleepType[i]); //returns current sleeping stage
			outlet(1,bruxEventDuration[i]); //returns current duration
			
			if(bruxSleepType[i] >= S4)
			{
				outlet(4,1); //if is in deep sleep will start the REM function outside the js file
			}else
			{
				outlet(4,0);
			}
			
		}
		
	}
};
function insomnia(sleepTime)
{	
	
	sleepTime += 17.00;
	
	//post(bruxDaa.length);
	outlet(3,insomTimeAsleep * 10);

	for(var i = 0; i < insomData.length; i++)
	{
		if(insomData[i] == sleepTime)
		{
			outlet(0,1);
			outlet(2,insomSleepType[i]); //returns current sleeping stage
			outlet(1,insomEventDuration[i]);
			
			if(insomSleepType[i] >= S4)
			{
				outlet(4,1);
			}else
			{
				outlet(4,0);
			}
			
		}
		
	}
	
};


function narcolepsy(sleepTime)
{	
	
	sleepTime += 17.00;
	
	//post(bruxDaa.length);
	outlet(3,narcTimeAsleep * 10);

	for(var i = 0; i < narcData.length; i++)
	{
		if(narcData[i] == sleepTime)
		{
			outlet(0,1);
			outlet(2,narcSleepType[i]); //returns current sleeping stage
			outlet(1,narcEventDuration[i]);
			
			if(narcSleepType[i] >= S4)
			{
				outlet(4,1);
			}else
			{
				outlet(4,0);
			}
		}
		
	}
	
};

function rbd(sleepTime)
{	
	
	sleepTime += 17.00;
	
	//post(bruxDaa.length);
	outlet(3,rbdTimeAsleep * 10);

	for(var i = 0; i < rbdData.length; i++)
	{
		if(rbdData[i] == sleepTime)
		{
			outlet(0,1);
			outlet(2,rbdSleepType[i]); //returns current sleeping stage
			outlet(1,rbdEventDuration[i]);
			
			if(rbdSleepType[i] >= S4)
			{
				outlet(4,1);
			}else
			{
				outlet(4,0);
			}
		}
		
	}
	
};


function averagePerson(sleepTime)
{	
	
	sleepTime += 17.00;
	
	//post(bruxDaa.length);
	outlet(3,controlTimeAsleep * 10);

	for(var i = 0; i < controlData.length; i++)
	{
		if(controlData[i] == sleepTime)
		{
			outlet(0,1);
			outlet(2,controlSleepType[i]); //returns current sleeping stage
			outlet(1,controlEventDuration[i]);
			
			if(controlSleepType[i] >= S4)
			{
				outlet(4,1);
			}else
			{
				outlet(4,0);
			}
		}
		
	}
	
};

