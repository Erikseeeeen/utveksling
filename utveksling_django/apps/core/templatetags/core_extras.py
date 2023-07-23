from django import template

register = template.Library()

@register.filter()
def number_of_students(dict_string, program):
    if dict_string == "":
        return 0
    dict = eval(dict_string)
    return dict[program] if program in dict else 0
