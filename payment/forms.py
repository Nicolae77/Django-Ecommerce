from django import forms

from . models import ShippingAddress

class ShippingForm(forms.ModelForm):
    
    class Meta:

        mode = ShippingAddress

        fields = ['full_name', 'email', 'address1', 'address2', 'city', 'country', 'postcode']

        exclude = ['user',]











