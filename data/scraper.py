import requests
from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim


with open('full_output.html', 'r') as html_file:
    soup = BeautifulSoup(html_file, 'lxml')

    csv_string = 'name,slug,country,city,homepage,lat,lng,programs\n'
    university_programs = {}
    universities = {}
    n = len(soup.find_all(class_='clickable-row'))
    for i, row in enumerate(soup.find_all(class_='clickable-row')):
        print(f'{i}/{n}')
        columns = row.find_all('td')

        name = columns[2].text.strip().lower().replace("'", "")
        slug = name.replace(' ','-')
        country = columns[0].text.strip()
        city = columns[1].text.strip()
        program = columns[4].text.strip().lower().replace("'", "")
        homepage = ''
        
        geolocator = Nominatim(user_agent='myapplication')
        # location = geolocator.geocode(f'{city}, {name}')
        location = geolocator.geocode(city)
        lat = 0
        lon = 0
        if location is not None:
            # print(name)
            # print(location.address)
            lat = location.raw['lat']
            lon = location.raw['lon']

        if not name in universities:
            universities[name] = {'description': f'"{name}","{slug}","{country}","{city}","{homepage}","{lat}","{lon}"'}
        universities[name][program] = universities[name][program] + 1 if program in universities[name] else 1
        # standard_name = standard_names[name] if name in standard_names else name


        # if not standard_name in university_programs:
        #     university_programs[standard_name] = {}
        # university_programs[standard_name][program] = university_programs[standard_name][program] + 1 if program in university_programs[name] else 1
        
    for university in universities:
        csv_string += universities[university]['description'] + ','
        csv_string += '"{'
        for key in universities[university]:
            if key == 'description':
                continue
            csv_string += f"'{key}':{universities[university][key]},"
        csv_string += '}"\n'
    with open("reports.csv", "wb") as file:
        file.write(csv_string.encode('utf-8'))
    # for line in csv_string.split('\n'):
    #     print(line)
    # print(university_programs)
    # print(universities)