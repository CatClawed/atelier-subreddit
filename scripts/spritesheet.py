import os

s1 = "body > div.side > div:nth-child("
s2 = ") > div > div.tagline > div > div > ul> li > .flair-"
s3 = " { background-position: 0 "
s4 = ".flair-"
s5 = ":after { background-position: 0 "

c1 = ""
c2 = ""
c3 = ""
c4 = ""
c5 = ""

num = 0

# Windows / Imagemagick commands
os.system("ls ../flairs | sort > names.txt")
os.system("convert ../flairs/*.png -append ../spritesheet.png")

with open('names.txt') as f:
	for line in f:
		if line:
			c1 += s1 + "3" + s2 + line.rstrip()[:-4] + s3 + str(num) + "px; }\n"
			c2 += s1 + "5" + s2 + line.rstrip()[:-4] + s3 + str(num) + "px; }\n"
			c3 += s1 + "6" + s2 + line.rstrip()[:-4] + s3 + str(num) + "px; }\n"
			c4 += s4 +            line.rstrip()[:-4] + s5 + str(num) + "px; }\n"
			c5 += "    '" +       line.rstrip()[:-4] + "',\n"
			num -= 45
output = open("CSS.txt", "w")
output.write(c1+c2+c3+c4)
output.close

output = open("jsnames.txt", "w")
output.write(c5)
output.close