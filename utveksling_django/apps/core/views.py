from django.shortcuts import render, redirect

from apps.universities.models import University
from django.http import JsonResponse
import json

# Create your views here.

selected_program = ''

def frontpage(request):
    universities = University.objects.all()
    sorted_universities = sorted(universities, key= lambda t: number_of_students(t.programs_serialized, selected_program))[::-1]
    context = {
        'universities': sorted_universities,
        'selected_program': selected_program,
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
        # Set selected_program to the 'text' field of the POST request
        global selected_program
        # selected_program = request.POST.get('text')
        data = json.loads(request.body)
        selected_program = data["text"]
        print(selected_program)


        print(selected_program)
        request.session['selected_program'] = selected_program  # Save selected_program in session
        # Refresh html
        universities = University.objects.all()
        sorted_universities = sorted(universities, key= lambda t: number_of_students(t.programs_serialized, selected_program))[::-1]
        context = {
            'universities': sorted_universities,
            'selected_program': selected_program,
        }
        render(request, 'frontpage.html', context)

        return JsonResponse({"message": "Text received successfully"})

