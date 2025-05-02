from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework import viewsets
from .models import *
from .serializers import *
from datetime import timedelta, datetime, time



class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]



class BarberViewSet(viewsets.ModelViewSet):
    queryset = Barber.objects.all()
    serializer_class = BarberSerializer
    permission_classes = [AllowAny]
    


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]
    


# # Endpoint de horarios disponibles
# @api_view(['GET'])
# def available_times(request):
#     date = request.GET.get('date')
#     barber_id = request.GET.get('barber_id')
#     service_id = request.GET.get('service_id')

#     if not (date and barber_id and service_id):
#         return Response({'error': 'Faltan parametros'}, status=400)

#     service = Service.objects.get(id=service_id)
#     exists_orders = Order.objects.filter(date=date, barber_id=barber_id)
#     duration = service.duration
#     start = time(16, 0)
#     end = time(20, 30)

#     available_orders = []
#     time_actual = datetime.combine(datetime.strptime(date, '%Y-%m-%d'), start)

#     while time_actual() <= end:
#         unavailable = any(t.time_start == time_actual.time()
#                           for t in exists_orders)
#         if not unavailable:
#             available_orders.append(time_actual.time().strftime('%H:%M'))
#         time_actual += timedelta(minutes=duration.total_seconds() // 60)

#     return Response(available_orders)
