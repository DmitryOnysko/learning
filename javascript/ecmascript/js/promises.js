// // console.log('Request data...');
// //
// // setTimeout(() => {
// //     console.log('Preparing data...');
// //
// //     const backendData = {
// //         server: 'aws',
// //         port: 2000,
// //         status: 'working',
// //     };
// //
// //     setTimeout(() => {
// //         backendData.modified = true;
// //         console.log('Data received', backendData);
// //     }, 2000);
// // }, 2000);
// //
// // equal
// //
// // console.log('Request data...');
// //
// // const p = new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         console.log('Preparing data...');
// //         const backendData = {
// //             server: 'aws',
// //             port: 2000,
// //             status: 'working',
// //         };
// //         resolve(backendData);
// //     }, 2000);
// // });
// //
// // p.then(data => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.modified = true;
// //             resolve(data);
// //             // reject(data); // => err
// //         }, 2000);
// //     });
// // }).then(clientData => {
// //     console.log('Data received', clientData);
// //     clientData.fromPromise = true;
// //     return clientData;
// // }).then(data => {
// //     console.log('Modified', data);
// // }).catch(err => {
// //     console.error('Error: ', err);
// // }).finally(() => console.log('Finally'));
//
// const sleep = ms => {
//     return new Promise(resolve => {setTimeout(() => resolve(), ms);
//     });
// };
// // sleep(2000).then(() => console.log('after 2sec'));
// // sleep(3000).then(() => console.log('after 3sec'));
//
// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log('All promises');
// });
//
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log('Race promises');
// });
