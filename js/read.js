var str2 = str.replace(/\n|\r/g, "");
var obj = JSON.parse(str2);

console.log(obj.users[0]['id']);
console.log(obj.users.length);
console.log(obj.result);

var table = document.createElement('table');
table.id = "mainTable";
table.className = 'table table-striped table-bordered table-sm';
table.cellSpacing =  '0'
table.style.width = "100%"

var thead = document.createElement('thead');
var trow1 = document.createElement('tr');
var th1 = document.createElement('th');
th1.className = 'th-sm';
th1.innerHTML = 'User ID';
var th2 = document.createElement('th');
th2.className = 'th-sm';
th2.innerHTML = 'User Name';
var th3 = document.createElement('th');
th3.className = 'th-sm';
th3.innerHTML = 'Created at';
var th4 = document.createElement('th');
th4.className = 'th-sm';
th4.innerHTML = 'Average Score';

var tbody = document.createElement('tbody');

trow1.appendChild(th1);
trow1.appendChild(th2);
trow1.appendChild(th3);
trow1.appendChild(th4);
thead.appendChild(trow1);
table.appendChild(thead);
var sum;
var ccount;
var res;
var i;
var j;
for (i = 0; i < obj.users.length ; i++) { 
	if(obj.users[i]['active']=="true")
	{
		sum = 0;
		ccount = 0;
		res = 0 ;
		for(j=0;j<obj.scores.length;j++)
		{
			if(obj.scores[j]['user_id']==obj.users[i]['id'])
			{
				sum = sum + obj.scores[j]['score'];
				ccount++;
			}
		}
		var res = sum / ccount;
		var n = res.toFixed(2);
		var trow = document.createElement('tr');
		trow.innerHTML = '<tr><td>'+obj.users[i]['id']+'</td><td>'+obj.users[i]['name']+'</td><td>'+obj.users[i]['created_at']+'</td><td>'+n+'</td></tr>';
		tbody.appendChild(trow);
	}
}
table.appendChild(tbody);
document.getElementById('tableDiv').appendChild(table);