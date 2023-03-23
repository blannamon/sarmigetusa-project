let level_endpoint = "https://apipoc.bubbleapps.io/version-test/api/1.1/wf/sd_bid_from_file";

// Element example with price
let elJson = {
    "unitPrice": 6,
    "quantity": 240,
    "unitTag": "m²",
    "labourComponents": {
        "label": "Stunden",
        "price": 0,
        "hourlyWage": 0,
        "values": [],
        "useOwnHourlyWage": false,
        "totalTime": 0
    },
    "priceComponents": [
        {
            "price": 0,
            "label": "Material",
            "values": []
        },
        {
            "price": 0,
            "label": "Geräte",
            "values": []
        },
        {
            "price": 6,
            "label": "",
            "values": [
                {
                    "formula": "6.000",
                    "result": 6,
                    "valid": true,
                    "errorPositionInLine": -1
                }
            ]
        }
    ],
    "quantityComponents": [
        {
            "formula": "240",
            "result": 240,
            "valid": true,
            "errorPositionInLine": -1
        }
    ],
    "subDescriptions": [],
    "comissionStatus": "Undefined",
    "complementedBy": [],
    "complemented": false,
    "amountToBeEnteredByBidder": false,
    "priceCompositionRequired": false,
    "useDifferentTaxRate": false,
    "taxRate": 0.19,
    "itemNumber": {
        "id": "6f725ecf-cf07-49ca-91fa-6d853e973dc2",
        "stringRepresentation": "02.02.005",
        "isSchemaCompliant": true,
        "itemNumberSchema": {
            "totalLength": 7,
            "tiers": [
                {
                    "length": 2,
                    "type": "Numeric",
                    "tierType": "Group",
                    "isLot": false
                },
                {
                    "length": 2,
                    "type": "Numeric",
                    "tierType": "Group",
                    "isLot": false
                },
                {
                    "length": 3,
                    "type": "Numeric",
                    "tierType": "Position",
                    "isLot": false
                }
            ]
        },
        "identifiers": [
            "02",
            "02",
            "005"
        ],
        "isLot": false
    },
    "deductionFactor": 0,
    "totalPrice": 1440,
    "totalPriceGross": 1713.6,
    "totalPriceGrossDeducted": 1713.6,
    "deductedPrice": 1440,
    "positionType": "Regular",
    "priceType": "WithTotal",
    "serviceType": "Regular",
    "shortText": "Wand, 20cm, Stahlbeton",
    "additionType": "None",
    "elementType": "PositionDto",
    "quantityAssignments": [],
    "isLumpSum": false,
    "projectCatalogues": [],
    "catalogueReferences": [],
    "complementedByQuantities": [],
    "id": "8da6ed22-cd6a-4098-bd4c-115e483d5b56",
    "gaebXmlId": "ID_56c02f0d-8c1b-46b7-bb55-64e9b8145fb0",
    "elementTypeDiscriminator": "PositionDto"
} 

let foo = (elJson) => {
    fetch()
}