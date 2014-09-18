import random
import itertools

def change (cents):
	if cents < 0:
		raise ValueError, "amount cannot be negative"
	quarters, left_over = divmod (cents, 25)
	dimes, left_over = divmod (left_over, 10)
	nickels, pennies = divmod(left_over, 5)
	return (quarters, dimes, nickels, pennies)


def strip_quotes(s):
	return s.translate(None, "\"\'")

def scramble(s): 
	return "".join(random.sample(s, len(s)))

def powers_of_two(n):
	i = 1
	while i <= n:
		yield i
		i = i*2

def prefixes(s):
	i = 0
	while i <= len(s):
		yield s[:i]
		i += 1

def interleave(x,y):
	zipped = list(itertools.chain(*zip(x,y)))
	return zipped + x[len(y):] +y[len(x):]

def stutter(x):
	return interleave(x,x)
	
