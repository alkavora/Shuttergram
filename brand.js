console.log("Shuttegram = Instgram");

function test(p){
	p ??= 90;
	
	console.log(p,(p ?? 90));

}

test()

console.log(null ?? 0);
