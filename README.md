# Jekyllionic Boilerplate

JekyllIonic Boilerplate is a lightweight and cleaned up version of the initial [Jekyll](https://jekyllrb.com/) with [ionic](https://ionicframework.com/docs/components) setup. The motivation behind this project was for me to avoid doing the same things over and over every time I build yet another site with Jekyll.

## Features

* ionic 8
* Single Page Application (SPA)
* PWA
* firestore (firebase)
* Admin Dashboard
* simpleCart Customized
* Midtrans Payment integration
* Redeem Coins

## Rules firestore

```shell

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    match /users/{userId} {
      
      allow read: if request.auth != null && request.auth.uid == userId;

      allow update: if request.auth != null &&
                    request.auth.uid == userId &&
                    isSafeUpdate(request.resource.data, resource.data);

      allow create: if request.auth != null && request.auth.uid == userId;

      allow delete: if false;
    }

function isSafeUpdate(newData, oldData) {
  // Hanya izinkan field-field berikut yang bisa diubah
  return newData.keys().hasOnly([
    'coins', 
    'email', 
    'updatedAt',
    'name',
    'phone',
    'address',
    'photoURL'
  ]) &&
  (!newData.keys().hasAny(['email']) || newData.email == oldData.email) &&
  (newData.name != null && newData.name != "");
}

    function isValidWhatsapp(phone) {
      return phone is string &&
             phone.size() >= 13 &&
             phone.matches('^08[0-9]+$');
    }

    function isValidURL(photoURL) {
      return photoURL is string && photoURL.matches('^https?://');
    }

    function isValidNama(name) {
      return name is string && name.size() > 0;
    }

    // Validasi perubahan coins: perubahan tidak ekstrem (misalnya max ±10.000)
    function isValidCoinsChange(newCoins, oldCoins) {
      return newCoins is number &&
             oldCoins is number &&
             newCoins >= 0 &&
             (newCoins - oldCoins).abs() <= 10000;
    }
  }
}

```

## Credits

* [Jekyll](https://jekyllrb.com/)
* [ionic](https://ionicframework.com/docs/components)
* [Daffa Mia](https://github.com/daffadev-mia)
* [DEMO](https://plus62webstore.pages.dev)
