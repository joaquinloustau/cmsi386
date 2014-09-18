import sys
num_lines = 0
for line in open(sys.argv[1]):
	line = line.strip()
	if line and not line.startswith("#"):
		num_lines += 1
print num_lines

#http://stackoverflow.com/questions/7896495/python-how-to-check-if-a-line-is-an-empty-line
