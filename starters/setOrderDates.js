const MongoClient = require('../webServer/node_modules/mongodb').MongoClient;

const urlWms = 'mongodb://127.0.0.1:27017/wms';
let wmsDb;

connectToWms().catch((error) => {
  console.error(`Problem connecting to wms. Error: ${error}`);
}).then(() => {
  return readAllOrders();
}).catch((error) => {
  console.error("Couldn't set the dates for one or more records. Correct the problem and re-run 'node setOrderDates'", error)
}).then((allOrders) => {
  console.log(`Updating dates and statuses on ${allOrders.length} orders`);
  return updateOrders(allOrders);
}).then(() => {
  wmsDb.close();
});

function readAllOrders() {
  let errorsExist = false;
  const promise = new Promise((resolve, reject) => {
    const cursor = wmsDb.collection('orders').find().sort({ orderID: -1 });  // Descending order
    const allOrders = cursor.toArray();
    if (errorsExist)
      reject();
    else
      resolve(allOrders);
  });
  return promise;
}

function updateOrders(allOrders) {
  let orderDate = new Date();
  let statusCounter = 0;
  let promise = new Promise((resolve, reject) => {
    for (let order of allOrders) {
      try {
        const status = statusCounter++ > 14 ? 1 : 0;  // Set status to shipped (status=1) for all orders > about two weeks ago. Not shipped is status 0.
        orderDate -= Math.random() * (1000 * 60 * 60 * 24);  // Subtract a random portion of a day
        wmsDb.collection('orders').updateOne({ orderID: order.orderID }, { $set: { orderDate: new Date(orderDate), status: status } });
      } catch (e) {
        reject(e);
      }
    }
    resolve();
  });
  return promise;
}

function connectToWms(url) {
  const promise = new Promise((resolve, reject) => {
    MongoClient.connect(urlWms, function (err, db) {
      if (err != null) {
        console.error("Can't connect to wms. Error is ", err);
        reject();
      } else {
        //console.log("Connected correctly to wms.");
        wmsDb = db;
        resolve();
      }
    });
  });
  return promise;
}