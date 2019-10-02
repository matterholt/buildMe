from django.db import models

# Create your models here.


class Groups(models.Model):
    name = models.CharField()
    _id = models.CharField()
    members = models.ForeignKey(Members)
    tools = models.ForeignKey(tools)


class Members(models.Model):
    pass


class ToolList(models.Models):
    pass
