from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

urlpatterns = [
    # path('services/', ServicesView),
    # path('services/<int:pk>/', ServiceDetailView),
    # path('barbers/', BarbersView),
    # path('orders/', OrdersView),
    # path('available_times/', available_times)
]

router = DefaultRouter()
router.register('orders', OrderViewSet)
router.register('barbers', BarberViewSet)
router.register('services', ServiceViewSet)
urlpatterns += router.urls
