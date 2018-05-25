# AMACOIN WALLET API

This application aims to expose Amacoin Wallet Informations

## API Documentation

### All addresses availables, GET -> /addresses

    [
	    {
	        "address": "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts"
	    },
	    {
	        "address": "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj"
	    }
	]

### GET -> /balance

#### Request

##### Header

     Authorization : 13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts

##### Body

     {

     }

#### Response

    {
        "balance": 10.0
    }

### GET -> /stats

#### Request

##### Header

     

##### Body

     {

     }

#### Response

    [
        {
            "key": "Connected peers",
            "value": "7"
        },
        {
            "key": "Blockchain height",
            "value": "#213"
        }
    ]


### GET -> /transactions

#### Request

##### Header

     Authorization : 13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts

##### Body

     {

     }

#### Response

     [
	    {
            "date": 1526978053,
            "from": "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            "to": "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            amount: 10.0
        },
	    {
            "date": 1526978053,
            "from": "13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts",
            "to": "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
            amount: 1.0
        }
	]
    
### POST -> /transactions

#### Request


##### Header

     Authorization : 13nNUaNU1XHKbBvPNQXtFnbVbgbD3vfhf6LTts$VC5EZzNY2cojos4jZx1VjVvWTE5xotjEN76ScX8F5FsTgymBoV3o1xmV

##### Body

    {
    	"to": "1ZESFph9SyhaxLrL1va4Qjq7cKVbuTh3BXozVj",
    	"amount": 1.4
    }

#### Response

    {

    }

   
