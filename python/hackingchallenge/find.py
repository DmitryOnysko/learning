
def find_min(users):
    min_user = users[0]
    minimum = users[0]['age']
    for user in users:
        if user['age'] < minimum:
            minimum = user['age']
            min_user = user

    return min_user
