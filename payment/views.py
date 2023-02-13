from django.shortcuts import render

from . models import ShippingAddress

# Create your views here.

def checkout(request):

    # Users with accounts -- Pre-fill the form

    if request.user.is_authenticated:

        try:

            # Authenticated with shipping information

            shipping_address = ShippingAddress.objects.get(user=request.user.id)

            context = {'shipping': shipping_address}

            return render(request, 'payment/checkout.html', context=context)
        
        except:

            #Authenticated users with no shipping address

            return render(request, 'payment/checkoyt.html')
    
    else:

        # Guest users

        return render(request, 'payment/checkout.html')


def payment_success(request):

    return render(request, 'payment/payment-success.html')


def payment_failed(request):

    return render(request, 'payment/payment-failed.html')