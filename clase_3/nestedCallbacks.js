// // callbacks anidados o callback hell sincrono

// const someThing = (callback) => {
//   console.log("Do Something!");
//   callback();
// };

// const someThingElse = (callback) => {
//   console.log("Do Something Else!");
//   callback();
// };

// const doThirdThing = (callback) => {
//   console.log("Do Third thing!");
//   callback();
// };

// someThing(() => {
//   console.log("First anonymous callback!");
//   someThingElse(() => {
//     console.log("Second anonymous callback!");
//     doThirdThing(() => {
//       console.log("Third anonymous callback!");
//     });
//   });
// });

// callback anidado asincrono

const places = [];

// irDePaseo = () => {
//   setTimeout(() => {
//     places.push("Paris");
//     setTimeout(() => {
//       places.push("Roma");
//       setTimeout(() => {
//         places.push("Venecia");
//         setTimeout(() => {
//           places.push("Atenas");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// irDePaseo();
// console.log(places);

// solución

const lugaresVisitados2 = [];

const irDePaseo2 = () => {
  setTimeout(() => {
    lugaresVisitados2.push("Paris");

    setTimeout(() => {
      lugaresVisitados2.push("Venecia");

      setTimeout(() => {
        lugaresVisitados2.push("Roma");

        setTimeout(() => {
          lugaresVisitados2.push("Atenas");
          console.log(lugaresVisitados2.toString());
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

irDePaseo2();
