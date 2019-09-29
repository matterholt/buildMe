from django.contrib import admin
# register models
from .models import Question, Choice


admin.site.register(Question)
admin.site.register(Choice)
