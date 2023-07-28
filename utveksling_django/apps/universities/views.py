from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework import viewsets, status
import pandas as pd
import io
from .models import *
from .serializers import *

class UniversityViewSet(viewsets.ModelViewSet):
    serializer_class = UniversitySerializer
    queryset = University.objects.all()

class ProgramViewSet(viewsets.ModelViewSet):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()

class CsvUploaderUniversity(TemplateView):
    template_name = 'csv_uploader_university.html'

    # def get(self, request, *args, **kwargs):
    #     universities = University.objects.filter()
    #     serializer = UniversitySerializer(universities, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        University.objects.all().delete()
        context = {
            'messages':[]
        }

        csv = request.FILES['csv']
        csv_data = pd.read_csv(
            io.StringIO(
                csv.read().decode("utf-8")
            )
        )

        for i, record in enumerate(csv_data.to_dict(orient="records")):
            try:
                print(record)
                University.objects.create(
                    name = record['name'],
                    slug = record['slug'],
                    country = record['country'],
                    city = record['city'],
                    homepage = record['homepage'],
                    lat = record['lat'],
                    lng = record['lng'],
                    programs_serialized = record['programs'],
                    number_id = i,
                )
            except Exception as e:
                context['exceptions_raised'] = e
                
        return render(request, self.template_name, context)
    

class CsvUploaderProgram(TemplateView):
    template_name = 'csv_uploader_program.html'

    # def get(self, request, *args, **kwargs):
    #     universities = University.objects.filter()
    #     serializer = UniversitySerializer(universities, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        context = {
            'messages':[]
        }

        csv = request.FILES['csv']
        csv_data = pd.read_csv(
            io.StringIO(
                csv.read().decode("utf-8")
            )
        )

        for record in csv_data.to_dict(orient="records"):
            try:
                print(record)
                Program.objects.create(
                    name = record['program']
                )
            except Exception as e:
                context['exceptions_raised'] = e
                
        return render(request, self.template_name, context)