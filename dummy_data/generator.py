import random
import json


def random_selector(filename):
    with open(filename) as f:
        lines = f.readlines()
        return random.choice(lines)[:-1]


def write_json(data, f_path):
    with open(f_path + '/data.json', 'w', encoding='utf-8') as fp:
        json.dump(data, fp)


def count_friend_status(usr: dict):
    vaccinated = 0
    pledegd = 0
    for friend in usr["Friends"]:
        if friend["Status"] == "Vaccinated":
            vaccinated+=1
        elif friend["Status"] == "Pledged":
            pledegd+=1

    return vaccinated, pledegd


def gen_user(f_path_input: str, f_path_output: str):

    user_data = {"Name": None, "Picture": None, "Friends": [], "TotalFriends": 0, "VaccinatedFriends": 0,
                 "PledgedFriends": 0}

    user_data["Name"] = random_selector(f_path_input)

    friend_limit = random.randint(5, 250)

    for _ in range(friend_limit):
        user_data["Friends"].append({"Name": random_selector(f_path_input),
                                     "Picture": None,
                                     "Status": random.choice(["Pledged", "Vaccinated"])})

    vacc, pledegd = count_friend_status(user_data)

    user_data["TotalFriends"] = len(user_data["Friends"])
    user_data["VaccinatedFriends"] = vacc
    user_data["PledgedFriends"] = pledegd

    write_json(user_data, f_path_output)

    return user_data
