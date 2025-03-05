from django.urls import path
from .views import BookingListCreateAPIView, BookingRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('bookings/', BookingListCreateAPIView.as_view(), name='list-create-booking'),
    path('bookings/<int:pk>/', BookingRetrieveUpdateDestroyAPIView.as_view(), name='retrieve-update-destroy-booking'),
]
