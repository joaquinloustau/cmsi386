import sys
import requests

group_name=sys.argv[1]
if (group_name > "H" or group_name < "A"):
	print ('Need just one commandline argument, A...H')
else:
	teams = requests.get("http://worldcup.kimonolabs.com/api/teams?sort=groupRank&apikey=MvtW5flSePbaulwoJCbeExYvIpvnQexL")
	teams = teams.json()
	print "{0:<18} {1:^2} {2:^2} {3:^2}".format("Name","W", "D", "L")
	for item in teams:
		if item['group'] == group_name:
			name = item['name'].encode("utf-8")
			print "{0:<18} {1:^2} {2:^2} {3:^2}".format(name, item['wins'], item['draws'], item['losses'])
