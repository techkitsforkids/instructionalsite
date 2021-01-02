
if(localStorage.getItem('textValuest1') == null){
	var table1Names =[];
}else{
	table1Names =  JSON.parse(localStorage.getItem('textValuest1'));
}

if(localStorage.getItem("textValuest2") == null){
		var table2Names =[];
}
else {
		table2Names =  JSON.parse(localStorage.getItem('textValuest2'));
}

if(localStorage.getItem("textValuest3") == null){
		var table3Names =[];
}
else {
		table3Names =  JSON.parse(localStorage.getItem('textValuest3'));
}


function testJS() {
    var b = document.getElementById('name').value,
        url = 'C:/Users/torvi/OneDrive/Desktop/TTLeaderBoard/TTLeaderBoard.html?name=' + encodeURIComponent(b);

    document.location.href = url;
	return false;
}

function saveObjectT1(){
	
		var i, x, empty = "";
		
	  namet1value = document.getElementById('namet1').value;
	  gramst1value = document.getElementById('gramst1').value;
	  emailt1value = document.getElementById('emailt1').value;
	  // if empty do not submit into array
	  
	  if (namet1value === "" || gramst1value == ""){
		  
		  if(gramst1value == "" && namet1value != ""){
			   empty = "Please enter a value for grams";
			   document.getElementById("empty").innerHTML = empty;
		  }
		  else if(namet1value === "" && gramst1value != "") {
			  empty = "Please enter your name so we know who is in the lead";
			  document.getElementById("empty").innerHTML = empty;
		  }
		  
		  else{
		   empty = "Please submit Name and Grams before submitting";
		  document.getElementById("empty").innerHTML = empty;
		  }
	  }
	 
	 else{
		 
		 
		document.getElementById("empty").innerHTML = empty;
	  var guest = {name:namet1value, grams:gramst1value, email: emailt1value };
	  
	  table1Names.push(guest); 
	  
	  table1Names.sort(function(a, b){return b.grams-a.grams});
	  	localStorage.setItem('textValuest1', JSON.stringify(table1Names));
	  x=1;
		for(i=0; i <table1Names.length; ++i){
		
			if(x<6){	
				  document.getElementById("t1nameL"+(i+1)).innerHTML = table1Names[i].name;
				  document.getElementById("t1gramsL"+(i+1)).innerHTML = table1Names[i].grams;
				  console.log("t1nameL"+(i+1));
				  console.log(table1Names[i].name);
			}
			console.log(x);
			++x;
		}
		
	  var frm = document.getElementById('results1');
			frm.reset();
  
	  }
	  
		console.log(table1Names);
  
  return false;
}

function saveObjectT2(){
	
		var i, x, empty = "";
		
	  namet2value = document.getElementById('namet2').value;
	  gramst2value = document.getElementById('gramst2').value;
	  emailt2value = document.getElementById('emailt2').value;
	  // if empty do not submit into array
	  
	  if (namet2value === "" || gramst2value == ""){
		  
		  if(gramst2value == "" && namet2value != ""){
			   empty = "Please enter a value for grams";
			   document.getElementById("empty2").innerHTML = empty;
		  }
		  else if(namet2value === "" && gramst2value != "") {
			  empty = "Please enter your name so we know who is in the lead";
			  document.getElementById("empty2").innerHTML = empty;
		  }
		  
		  else{
		   empty = "Please submit Name and Grams before submitting";
		  document.getElementById("empty2").innerHTML = empty;
		  }
	  }
	 
	 else{
		 
		 
		document.getElementById("empty2").innerHTML = empty;
	  var guest = {name:namet2value, grams:gramst2value, email: emailt2value };
	  
	  table2Names.push(guest); 
	  
	  table2Names.sort(function(a, b){return b.grams-a.grams});
	  localStorage.setItem('textValuest2', JSON.stringify(table2Names));
	  x=1;
		for(i=0; i <table2Names.length; ++i){
		
			if(x<6){	
				  document.getElementById("t2nameL"+(i+1)).innerHTML = table2Names[i].name;
				  document.getElementById("t2gramsL"+(i+1)).innerHTML = table2Names[i].grams;
				  console.log("t2nameL"+(i+1));
				  console.log(table2Names[i].name);
			}
			console.log(x);
			++x;
		}
		
	  var frm = document.getElementById('results2');
			frm.reset();
  
	  }
	  
		console.log(table2Names);
  
  return false;
}

function saveObjectT3(){
	
		var i, x, empty = "";
		
	  namet3value = document.getElementById('namet3').value;
	  gramst3value = document.getElementById('gramst3').value;
	  emailt3value = document.getElementById('emailt3').value;
	  // if empty do not submit into array
	  
	  if (namet3value === "" || gramst3value == ""){
		  
		  if(gramst3value == "" && namet3value != ""){
			   empty = "Please enter a value for grams";
			   document.getElementById("empty3").innerHTML = empty;
		  }
		  else if(namet3value === "" && gramst3value != "") {
			  empty = "Please enter your name so we know who is in the lead";
			  document.getElementById("empty3").innerHTML = empty;
		  }
		  
		  else{
		   empty = "Please submit Name and Grams before submitting";
		  document.getElementById("empty3").innerHTML = empty;
		  }
	  }
	 
	 else{
		 
		 
		document.getElementById("empty3").innerHTML = empty;
	  var guest = {name:namet3value, grams:gramst3value, email: emailt3value };
	  
	  table3Names.push(guest); 
	  
	  table3Names.sort(function(a, b){return b.grams-a.grams});
	  localStorage.setItem('textValuest3', JSON.stringify(table3Names));
	  x=1;
		for(i=0; i <table3Names.length; ++i){
		
			if(x<6){	
				  document.getElementById("t3nameL"+(i+1)).innerHTML = table3Names[i].name;
				  document.getElementById("t3gramsL"+(i+1)).innerHTML = table3Names[i].grams;
				  console.log("t3nameL"+(i+1));
				  console.log(table3Names[i].name);
			}
			console.log(x);
			++x;
		}
		
	  var frm = document.getElementById('results3');
			frm.reset();
  
	  }
	  
		console.log(table3Names);
  
  return false;
}

function table1Results(){
			var parsedT1 = "table 1\n";
		 			console.log(table1Names);
		for (it1 = 0; it1< table1Names.length; it1++) {
			var myobjt1 =  table1Names[it1];

			for (var propertyt1 in myobjt1) {
				parsedT1 += propertyt1 + ": " + myobjt1[propertyt1] + "\n";          
			}
		} 

		$("#display").val(parsedT1); 

	return false;
}

function table2Results(){
			var parsedt2 = "table 2\n";
		
		for (it2 = 0; it2< table2Names.length; it2++) {
			var myobjt2 =  table2Names[it2];
			
			for (var propertyt2 in myobjt2) {
				parsedt2 += propertyt2 + ": " + myobjt2[propertyt2] + "\n";          
			}
		} 
		
		$("#display2").val(parsedt2); 

	return false;
}

function table3Results(){
			var parsedt3 = "table 3\n";
		 
		for (it3 = 0; it3< table3Names.length; it3++) {
			var myobjt3 =  table3Names[it3];
			
			for (var propertyt3 in myobjt3) {
				parsedt3 += propertyt3 + ": " + myobjt3[propertyt3] + "\n";          
			}
		} 
		
		$("#display3").val(parsedt3); 

	return false;
}

function clearall(){
	localStorage.clear();
	table1Names =[];
	table2Names =[];
	table3Names =[];
	
}