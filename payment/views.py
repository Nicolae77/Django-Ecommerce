from django.shortcuts import render

from . models import ShippingAddress, Order, OrderItem

from cart.cart import Cart

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

            return render(request, 'payment/checkout.html')
    
    else:

        # Guest users

        return render(request, 'payment/checkout.html')


def complete_order(request):

    if request.POST.get('action') == 'post':

        name = request.POST.get('name')

        email = request.POST.get('email')

        address1 = request.POST.get('address1')

        address2 = request.POST.get('address2')

        city = request.POST.get('city')

        country = request.POST.get('country')

        postcode = request.POST.get('postcode')

        shipping_address = (address1 + "\n" + address2 + 
        "\n" + city + "\n" + country + "\n" + postcode)

        # Shopping cart information

        cart = Cart(request)

        total_cost = cart.get_total()

        
        '''
        Order variation

        1) Create order -> Account users with + without shipping information

        2) Create order -> Guest users without an account
        
        '''




def payment_success(request):

    return render(request, 'payment/payment-success.html')


def payment_failed(request):

    return render(request, 'payment/payment-failed.html')