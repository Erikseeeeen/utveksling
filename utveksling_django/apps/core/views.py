from django.shortcuts import render
# from templatetags import core_extras??

from apps.universities.models import University
from django.http import JsonResponse

# Create your views here.

selected_program = ''

def frontpage(request):
    universities = University.objects.all()
    sorted_universities = sorted(universities, key= lambda t: number_of_students(t.programs_serialized, selected_program))[::-1]

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

def input_program(request):
    if request.method == "POST":
        selected_program = request.POST.get("text")
        # Do something with the received_text, e.g., save it to the database or perform any other operation
        return JsonResponse({"message": "Text received successfully"})
