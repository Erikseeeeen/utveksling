from django.shortcuts import render
# from templatetags import core_extras??

from apps.universities.models import University

# Create your views here.

def frontpage(request):
    universities = University.objects.all()
    sorted_universities = sorted(universities, key= lambda t: number_of_students(t.programs_serialized, "kybernetikk og robotikk"))[::-1]

    context = {
        'universities': sorted_universities
    }
    return render(request, 'frontpage.html', context)


# Ultra bruh filter copy
def number_of_students(dict_string, program):
    if dict_string == "":
        return 0
    dict = eval(dict_string)
    return dict[program] if program in dict else 0
