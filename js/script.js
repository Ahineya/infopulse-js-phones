var phones = [
    {
        name: 'HTC',
        quantity: 2,
        isGood: true,
        image: 'http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-desire-626G/explorer/htc-desire-626-global-phone-listing-blue-lagoon.jpg'
    },
    {
        name: 'Asus',
        quantity: 3,
        isGood: true,
        image: 'https://www.asus.com/websites/global/products/paJ6GdiFh3rgCrfL/img/kv/zenfone.png'
    },
    {
        name: 'LG',
        quantity: 1,
        isGood: false,
        image: 'http://cashforcellphonesusa.com/wp-content/uploads/2012/11/lg-c2600.jpeg'
    }
];

function PhoneModule(containerName) {
    var phonesContainer = document.querySelector(containerName);
    var errorContainer = phonesContainer.querySelector('#error');

    function show(phoneName) {
        var phone = findPhone(phoneName);

        if(phone) {
            hideError();
            render(phone);
        } else {
            showError('Can not find phone: ', phoneName);
        }
    }

    function findPhone(phoneName) {
        for (var i = 0; i < phones.length; i++) {
            if (phones[i].name === phoneName) {
                return phones[i];
            }
        }

        return false;
    }

    function render(phone) {
        phonesContainer.querySelector('#phoneImage').setAttribute('src', phone.image);
        phonesContainer.querySelector('#phoneName').innerText = phone.name;
        phonesContainer.querySelector('#phoneQuantity').innerText = 'Quantity: ' + phone.quantity;
    }

    function showError(errorMessage, errorObject) {
        errorContainer.innerText = errorMessage + errorObject;
        errorContainer.style.display = 'block';

        console.error(errorMessage, errorObject);
    }

    function hideError() {
        errorContainer.style.display = 'none';
    }

    return {
        show: show
    };
}

window.onload = function() {
    var phoneModule = new PhoneModule('#phone');
    phoneModule.show('Asus');
};


