from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=100)
    duration = models.DurationField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Barber(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Order(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    barber = models.ForeignKey(Barber, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    client_name = models.CharField(max_length=20)
    client_lastname = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    class Meta:
        unique_together = ['barber', 'date', 'time'] # Un barbero no puede tener dos citas en la misma fecha y hora

    def __str__(self):
        return f"{self.client_name} {self.client_lastname} - {self.date} {self.time}"
