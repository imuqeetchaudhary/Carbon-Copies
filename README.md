# Carbon Copies Rest Api

## Admin Credentials

```
email: admin@gmail.com
password: 12345
```

## User Credentials

```
email: user1@gmail.com
password: 12345
```

## Routes for User

### to register a new user

- user/register : post

```
{
    name:
    email:
    password:
}
```

### to login an existing user

- user/login :post

```
{
    email:
    password:
}
```

### to view the profile of an authenticated user

- user/profile :post

## Routes for Products

### to add a new product

- product/add :post

```
{
    productName:
    productDescription:
    productPrice:
}
```

### to get all products

- product/get-all :get

### to get single product

- product/get-single :post

```
{
    productId:
}
```

## Routes for Rental Histories

### to add a rental history

- rental-history/add :post

```
{
    fistName:
    middleName:
    lastName:
    street:
    city:
    zipCode:
    dobMonth:
    dobDate:
    dobYear:
    heightFeet:
    heightInches:
    weight:
    hairColor:
    eyeColor:
    gender:
    image: (2 images needs to be uploaded i.e. 1 for idPicture and 1 for idSignature)
}
```

### to get all rental histories

- rental-history/get-all :get

### to get single history

- rental-history/get-single :post

```
{
    rentalHistoryId
}
```
