
while True:
	try:
		tot = int(input("Enter the total number of voters:"))
		break
	except:
		print "Enter a valid integer."
c1=raw_input("Input the name of Candidate 1:")
c2=raw_input("Input the name of Candidate 2:")
c3=raw_input("Input the name of Candidate 3:")
c4=raw_input("Input the name of Candidate 4:")
sum1=0;sum2=0;sum3=0;sum4=0;sum5=0
for i in range(0,tot):
	while True:
		try:
			vote = int(input("Enter the number of the candidate:"))
			if vote ==1:
				sum1=sum1+1
			elif vote==2:
				sum2=sum2+1
			elif vote==3:
				sum3=sum3+1
			elif vote==4:
				sum4=sum4+1
			else:
				print "Invalid Choice"
				tot=tot+1
				continue
			break
		except:
			print "Enter a valid integer between 1-4, inclusive."
print  c1, "got ",sum1, " votes."
print  c2, "got ",sum2, " votes."
print  c3, "got ",sum3, " votes."
print  c4, "got ",sum4, " votes."
print"==========================";print "-------------RESULTS-------------";print"============================";
array=[];array.append(c1);array.append(c2);array.append(c3);array.append(c4);
arrayVotes=[];arrayVotes.append(sum1);arrayVotes.append(sum2);arrayVotes.append(sum3);arrayVotes.append(sum4);
ogVotes=[];ogVotes.append(sum1);ogVotes.append(sum2);ogVotes.append(sum3);ogVotes.append(sum4);
for i in range(0,3):
	for count in range(0,3):
		if arrayVotes[count]<arrayVotes[count+1]:
			temp = arrayVotes[count]
			arrayVotes[count] = arrayVotes[count+1]
			arrayVotes[count+1]=temp
fVotes=arrayVotes[0];sVotes=arrayVotes[1];tVotes=arrayVotes[2];foVotes=arrayVotes[3]
for i in range(0,4):
	if arrayVotes[i]==ogVotes[0]:
		fIndex=i
for i in range(0,4):
	if arrayVotes[i]==ogVotes[1]:
		sIndex=i
for i in range(0,4):
	if arrayVotes[i]==ogVotes[2]:
		tIndex=i
for i in range(0,4):
	if arrayVotes[i]==ogVotes[3]:
		foIndex=i
fName=array[fIndex]
sName=array[sIndex]
tName=array[tIndex]
foName=array[foIndex]
if arrayVotes[0]==arrayVotes[1]:
	ncw=True
else:
	ncw=False
if ncw==True:
	print "No overall winner."
	if fVotes==sVotes and sVotes==tVotes and tVotes==foVotes:
		print "ALL CANDIDATES HAD THE SAME SCORE.Votes: ",fVotes
	elif fVotes==sVotes and sVotes==tVotes:
		print "Three candidates had the same score: ",fVotes
		print foName," stood fourth with: ",foVotes
	elif fVotes==sVotes:
		print "2 candidates had the same score: ",fVotes
		print tName, " stood third with:",tVotes
		print foName," stood fourth with:",foVotes
else:
	print fName, " is the new school captain with: ",fVotes
	if sVotes==tVotes:
		print "Two candidates had the same amount of votes: ",sVotes
		print foName, " stood fourth with: ",fVotes
	elif tVotes==fVotes: 
		print sName, " stood second with:",sVotes
		print "Two candidates had the same amount of votes: ",tVotes
	else:
		print sName, " stood second with:",sVotes
		print tName, " stood third with: ",tVotes
		print foName, " stood fourth with: ",fVotes
