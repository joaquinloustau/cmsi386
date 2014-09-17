import sys
import re
from collections import Counter
text = sys.stdin.read().lower()
words = re.sub("[^a-z\'']"," ", text).split()

word_count = sorted(Counter(words).items())

for key,value in word_count:
	sys.stdout.write(key + " "+ str(value) + "\n")
