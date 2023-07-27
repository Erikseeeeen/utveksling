import requests
from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim

from difflib import SequenceMatcher
from unidecode import unidecode

class university:
    def __init__(self, city, description) -> None:
        self.city = city
        self.description = description
        self.programs = {}

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

def merge_name(name, universities):
    name_unidecoded = unidecode(name)
    most_similar_name = ''
    most_similar_score = 0
    for other_name in universities:
        other_name_unidecoded = unidecode(other_name)
        if unidecode(city) == unidecode(universities[other_name].city):
            if (name_unidecoded in other_name_unidecoded or other_name_unidecoded in name_unidecoded):
                name = other_name
                most_similar_score = -1
                break
            elif(similar(name_unidecoded, other_name_unidecoded) > 0.68 and similar(name_unidecoded, other_name_unidecoded) > most_similar_score):
                print(f'{name_unidecoded} vs {other_name_unidecoded}')
                most_similar_score = similar(name_unidecoded, other_name_unidecoded)
                most_similar_name = other_name
    if most_similar_score > 0.68:
        name = most_similar_name
    return name

with open('full_output.html', 'r') as html_file:
    soup = BeautifulSoup(html_file, 'lxml')


    university_programs = {}
    universities = {}
    n = len(soup.find_all(class_='clickable-row'))
    for i, row in enumerate(soup.find_all(class_='clickable-row')):
        href = row['data-href']
        report_id = href[href.find('report_id=')+10:href.find('&language=')]
        print(f'{i}/{n}')
        columns = row.find_all('td')

        name = columns[2].text.strip().lower().replace("'", "")
        slug = unidecode(name.replace(',','').replace(' ','-'))
        country = columns[0].text.strip()
        city = columns[1].text.strip()
        program = columns[4].text.strip().lower().replace("'", "")
        homepage = ''
        
        lat = 0
        lon = 0
        # geolocator = Nominatim(user_agent='myapplication')
        # # location = geolocator.geocode(f'{city}, {name}')
        # location = geolocator.geocode(city)
        # if location is not None:
        #     # print(name)
        #     # print(location.address)
        #     lat = location.raw['lat']
        #     lon = location.raw['lon']

        university_programs[program] = 1 if not program in university_programs else university_programs[program] + 1



        if not name in universities:
            name = merge_name(name, universities)


            if not name in universities:
                universities[name] = university(city, f'"{name}","{slug}","{country}","{city}","{homepage}","{lat}","{lon}"')
        universities[name].programs[program] = universities[name].programs[program] + [report_id] if program in universities[name].programs else [report_id]
        # standard_name = standard_names[name] if name in standard_names else name


        # if not standard_name in university_programs:
        #     university_programs[standard_name] = {}
        # university_programs[standard_name][program] = university_programs[standard_name][program] + 1 if program in university_programs[name] else 1
        
    universities_csv_string = 'name,slug,country,city,homepage,lat,lng,programs\n'
    programs_csv_string = 'program\n'
    for university in universities:
        universities_csv_string += universities[university].description + ','
        universities_csv_string += '"{'
        for program in universities[university].programs:
            universities_csv_string += f"'{program}':{universities[university].programs[program]},"

        universities_csv_string += '}"\n'
    
    for program in university_programs:
        # programs_csv_string += f'"{program}", "{university_programs[program]}"\n'
        programs_csv_string += f'"{program}"\n'



    with open("universities.csv", "wb") as file:
        file.write(universities_csv_string.encode('utf-8'))
    with open("programs.csv", "wb") as file:
        file.write(programs_csv_string.encode('utf-8'))
    # for line in universities_csv_string.split('\n'):
    #     print(line)
    # print(university_programs)
    # print(universities)