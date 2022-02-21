// One-time run to create the JSON files. No need to run as part of setup. Can be deleted once the JSON files are well-established as working properly.
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const urlNorthwind = 'mongodb://127.0.0.1:27017/northwind';
const urlWms = 'mongodb://127.0.0.1:27017/wms';
let northwindDb;
let wmsDb;

let connectToNorthwindPromise = connectToNorthwind();
let connectToWmsPromise = connectToWms();

Promise.all([connectToNorthwindPromise, connectToWmsPromise]).then(() => {
  console.log("Successfully connected to both");
}).catch((error) => {
  console.error(`Problem with one of the connections. Error: ${error}`);
}).then(() => {
  console.log("Populating locations");
  return populateLocations();
}).catch((error) => {
  console.error("Couldn't create the location records", error)
}).then(() => {
  console.log("Closing connections.");
  northwindDb.close();
  wmsDb.close();
});

function populateLocations() {
  const aisles = [];
  const slots = "ABCDEFGH".split("");
  const bins = "ABCDE".split("");
  for (let i = 0; i < 100; i++) {
    const productID = Math.floor(Math.random() * 77);
    const aisleNoPadding = Math.floor(Math.random() * 22);
    const aisle = aisleNoPadding < 10 ? "0" + aisleNoPadding : aisleNoPadding;
    const slot = slots[Math.floor(Math.random() * slots.length)];
    const shelf = Math.floor(Math.random() * 9);
    const bin = bins[Math.floor(Math.random() * bins.length)];
    const locationID = `${aisle}${slot}${shelf}${bin}`;
    const quantity = Math.floor(Math.random() * 30);
    const record = `{"locationID":"${locationID}","productID":${productID},"description":"","quantity":${quantity}}`;
    console.log(record);
    const recordObject = JSON.parse(record);
    wmsDb.collection("locations").insertOne(recordObject);
  }
  const promise = new Promise((resolve, reject) => {
    resolve();
  });
  return promise;
}


function getOrderFromWms(orderDetail) {
  let promise = new Promise((resolve, reject) => {
    console.log("ORDER DETAIL", orderDetail);
    const order = wmsDb.collection('orders').updateOne({ orderID: orderDetail.orderID }, { $push: { lines: orderDetail } });
    //const order = wmsDb.collection("orders").findOne({orderID:orderDetail.orderID});
    //console.log("order is ", order);
    resolve(order);
  });
  return promise;
}

function AddOrderDetailToOrder(theOrder) {
  console.log("Not implemented yet", theOrder)
}

function readAllOrderDetails() {
  let errorsExist = false;
  let kount = 0;
  let allOrderDetails = [];
  const promise = new Promise((resolve, reject) => {
    const cursor = northwindDb.collection('orderDetails').find();
    //cursor.count((err, count) => {
    //  console.log("Tots", count);
    //});
    console.log("before is it async")
    allOrderDetails = cursor.toArray();
    console.log("after is it async?")

    console.log("Len", allOrderDetails.length);
    if (errorsExist)
      reject();
    else
      resolve(allOrderDetails);
  });
  return promise;
}

function connectToNorthwind() {
  const promise = new Promise((resolve, reject) => {
    MongoClient.connect(urlNorthwind, function (err, db) {
      if (err != null) {
        console.error("Can't connect to northwind. Error is ", err);
        reject();
      } else {
        //console.log("Connected correctly to northWind.");
        northwindDb = db;
        resolve();
      };
    });
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