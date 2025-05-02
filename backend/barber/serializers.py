from rest_framework import serializers
from .models import *

# Serializers define the API representation

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'name', 'duration', 'price')


class BarberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barber
        fields = ('id', 'name')


class OrderSerializer(serializers.ModelSerializer):
    # Treamos los campos como solo lectura
    service = ServiceSerializer(read_only=True)
    barber = BarberSerializer(read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'barber', 'service', 'date', 'time', 'client_name', 'client_lastname', 'email', 'phone')
