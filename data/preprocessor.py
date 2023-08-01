import requests
from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim

from difflib import SequenceMatcher
from unidecode import unidecode
import json
import math

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
                most_similar_score = similar(name_unidecoded, other_name_unidecoded)
                most_similar_name = other_name
    if most_similar_score > 0.68:
        name = most_similar_name
    return name

def find_standard_program(program, standard_programs, blacklist_programs):
    if not program in standard_programs.keys():
        for i, name_list in enumerate(standard_programs.values()):
            if program in name_list:
                program = list(standard_programs.keys())[i]

        # found_similar = False
        # if not program in standard_programs.keys():
        #     for other_program in standard_programs.keys():
        #         if found_similar or other_program in blacklist_programs and program in blacklist_programs[other_program]:
        #             continue
        #         for synonym in standard_programs[other_program] + [other_program]:
        #             if(similar(synonym, program) > 0.70):
        #                 print()
        #                 print()
        #                 print(other_program, "\n"+synonym, "\n"+program, similar(synonym, program), "(y/N)")
        #                 # Ask user if they are similar enough. If they are, add program to the standard_programs[other_program] list
        #                 response = input()
        #                 if(response == 'y'):
        #                     standard_programs[other_program] += [program]
        #                     found_similar = True
        #                     break
        #                 else:
        #                     blacklist_programs[other_program] = [program] if not other_program in blacklist else blacklist[other_program] + [program]
        #                     break

        # for i, name_list in enumerate(standard_programs.values()):
        #     if program in name_list:
        #         program = list(standard_programs.keys())[i]
        #         break
    return program, standard_programs, blacklist_programs

def find_standard_university(university_name, standard_university_names, blacklist_universities):
    if not university_name in standard_university_names.keys():
        for i, name_list in enumerate(standard_university_names.values()):
            if university_name in name_list:
                university_name = list(standard_university_names.keys())[i]

        found_similar = False
        if not university_name in standard_university_names.keys():
            for other_university_name in universities.keys():
                if not other_university_name in standard_university_names.keys():
                    continue
                if found_similar or other_university_name in blacklist_university_names and university_name in blacklist_university_names[other_university_name]:
                    continue
                if(universities[other_university_name].city == city):

                    for synonym in standard_university_names[other_university_name] + [other_university_name]:
                        if(similar(synonym, university_name) > 0.50):
                            # print()
                            # print()
                            # print(other_university_name, "\n"+synonym, "\n"+university_name, similar(synonym, university_name), "(y/N)")
                            # # Ask user if they are similar enough. If they are, add university_name to the standard_university_names[other_university_name] list
                            # response = input()
                            # if(response == 'y'):
                            standard_university_names[other_university_name] += [university_name]
                            found_similar = True
                            break
                            # else:
                            #     blacklist_university_names[other_university_name] = [university_name] if not other_university_name in blacklist_university_names else blacklist_university_names[other_university] + [university_name]
                            #     break

        for i, name_list in enumerate(standard_university_names.values()):
            if university_name in name_list:
                university_name = list(standard_university_names.keys())[i]
                break
    is_standard = False
    if university_name in standard_university_names.keys():
        is_standard = True
    if not university_name in standard_university_names.keys():
        for i, name_list in enumerate(standard_university_names.values()):
            if university_name in name_list:
                university_name = list(standard_university_names.keys())[i]
                is_standard = True
    if not is_standard:
        standard_university_names[university_name] = []
    
    return university_name, standard_university_names, blacklist_universities



geocode_cache = {}
geolocator = Nominatim(user_agent='myapplication')
with open("geocode_cache.json", "r") as file:
    geocode_cache = json.load(file)

standard_programs = {}
with open("standard_programs.json", "r") as file:
    standard_programs = json.load(file)

standard_university_names = {}
with open("standard_university_names.json", "r") as file:
    standard_university_names = json.load(file)
for key in list(standard_university_names.keys()):
    if len(standard_university_names[key]) == 0:
        del standard_university_names[key]

blacklist_programs = {}
with open("blacklist_programs.json", "r") as file:
    blacklist_programs = json.load(file)

blacklist_university_names = {}
with open("blacklist_university_names.json", "r") as file:
    blacklist_university_names = json.load(file)

with open('full_output.html', 'r') as html_file:
    soup = BeautifulSoup(html_file, 'lxml')

    university_programs = {}
    universities = {}
    n = len(soup.find_all(class_='clickable-row'))
    for i, row in enumerate(soup.find_all(class_='clickable-row')):
        href = row['data-href']
        report_id = href[href.find('report_id=')+10:href.find('&language=')]
        columns = row.find_all('td')

        print(f'{i}/{n}')


        university_name = columns[2].text.strip().lower().replace("'", "")
        slug = unidecode(university_name.replace(',','').replace(' ','-'))
        country = columns[0].text.strip()
        city = columns[1].text.strip()
        program = columns[4].text.strip().lower().replace("'", "")
        homepage = ''
        year = ''.join(filter(str.isdigit,columns[5].text))[:4]
        if(len(year) < 4):
            year = '0'

        if program == '':
            continue

        
        program, standard_programs, blacklist_programs = find_standard_program(program, standard_programs, blacklist_programs)
   
        university_name, standard_university_names, blacklist_university_names = find_standard_university(university_name, standard_university_names, blacklist_university_names)
   
  



        lat = 0
        lon = 0
        geocode_keys = [f'{university_name}, {city}, {country}', f'{city}, {country}']
        for geocode_key in geocode_keys:
            if geocode_key in geocode_cache:
                lat, lon = geocode_cache[geocode_key]
                geocode_cache[geocode_keys[0]] = lat, lon
                break
            else:
                try:
                    location = geolocator.geocode(geocode_key)
                except Exception as e:
                    print(e)                    
                    continue
                if location is not None:
                    lat = location.raw['lat']
                    lon = location.raw['lon']
                    print(geocode_keys[0])
                    geocode_cache[geocode_keys[0]] = lat, lon
                    break


        university_programs[program] = 1 if not program in university_programs else university_programs[program] + 1




        report_dict = {'report_id':report_id, 'year':year}
        if not university_name in universities:
            universities[university_name] = university(city, f'"{university_name}","{slug}","{country}","{city}","{homepage}","{lat}","{lon}"')
        universities[university_name].programs[program] = universities[university_name].programs[program] + [report_dict] if program in universities[university_name].programs else [report_dict]
        
    universities_csv_string = 'name,slug,country,city,homepage,lat,lng,programs\n'
    programs_csv_string = 'program,number\n'
    for university_name in universities:
        universities_csv_string += universities[university_name].description + ','
        universities_csv_string += '"{'
        for program in universities[university_name].programs:
            universities_csv_string += f"'{program}':{universities[university_name].programs[program]},"

        universities_csv_string += '}"\n'

    for program in university_programs:
        if(university_programs[program] > 1):
            # programs_csv_string += f'"{program}"\n'
            programs_csv_string += f'"{program}","{university_programs[program]}"\n'



    with open("universities.csv", "wb") as file:
        file.write(universities_csv_string.encode('utf-8'))
    with open("programs.csv", "wb") as file:
        file.write(programs_csv_string.encode('utf-8'))
    
    with open('geocode_cache.json', 'w') as file:
        json.dump(geocode_cache, file)
    with open("standard_programs.json", "w") as file:
        json.dump(standard_programs, file)
    with open("standard_university_names.json", "w") as file:
        json.dump(standard_university_names, file)
    with open("blacklist_programs.json", "w") as file:
        json.dump(blacklist_programs, file)
    with open("blacklist_university_names.json", "w") as file:
        json.dump(blacklist_university_names, file)


# git subtree push --prefix utveksling_django/static/src/vue/dist origin gh-pages