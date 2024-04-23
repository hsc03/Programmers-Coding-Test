import math

def solution(n):
    answer = 0
    num = math.sqrt(n)
    if num % 1 == 0:
        answer = 1
    else: answer = 2
        
    return answer