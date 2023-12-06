from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

itemList = [{
        "itemName" : "Rice",
       "unitPrice" : 24,
        "quantity" : 5,
        "isPurchased" : False
    },
    {
        "itemName" : "Potato",
        "unitPrice" : 30,
        "quantity" : 4,
        "isPurchased" : False
    },
    {
        "itemName" : "Soap",
        "unitPrice" : 60,
        "quantity" : 2,
        "isPurchased" : False
    },
    {
        "itemName" : "Maggie",
        "unitPrice" : 15,
        "quantity" : 4,
        "isPurchased" : False
    },
    {
        "itemName" : "Apple",
        "unitPrice" : 200,
        "quantity" : 1,
        "isPurchased" : False
    }]

@app.route("/")
def helloWorld():
  try:
   return jsonify(success='y',data=itemList)
  except:
   return jsonify(success='n')

if  __name__ == "__main__":
    app.run(debug = True,host='127.0.0.1') 
     
