def inputOperation(filename):
	with open(filename) as file:
		data = file.readlines()
		data = data[1:]
		output = []
		for line in data:
			temp_line = line.split()
			temp_line[1] = temp_line[1][1:]
			temp_line[-2] = temp_line[-2][:-1]
			temp_line[-1] = temp_line[-1][1:-1]
			temp_line[1:-1] = [temp_line[1:-1]]
			output.append(temp_line)
	return output

def parseOperation(operation):
	if operation[0] == 'move-pole-forward':
		return [[1, operation[1], operation[-1], 'notchanged']]
	elif operation[0] == 'move-pole-inverse':
		return [[1, operation[1], operation[-2], 'notchanged']]
	elif operation[0] == 'hangup-pole':
		return [[1, operation[1], operation[-2], operation[-1]],[2, operation[-2], 'empty']]
	elif operation[0] == 'hangoff-pole':
		return [[1, operation[1], operation[-2], 'empty'], [2, operation[-2], operation[-1]]]
	else:
		print('error operation')

def updateStatus(status, operation):
	return status

if __name__ == '__main__':
	inputOperation('../resources/output.txt')