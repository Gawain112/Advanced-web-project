const fetch = require("node-fetch");
const fs = require("fs");

let cardiomyopathyData = {};

const baseUrl = "https://hpo.jax.org/api";
const termUrl = baseUrl + "/hpo/term";

const cardiomyopathyDetails = termUrl + "/HP:0001638";
const genesUrl = termUrl + "/HP:0001638/genes";
const diseasesUrl = termUrl + "/HP:0001638/diseases";

let params = "?max=-1";

let _init = async () => {
  // @ts-ignore
  await fetch(cardiomyopathyDetails)
    .then(res => {
      return res.json();
    })
    .then(json => {
      cardiomyopathyData.details = json.details;
    });

  // @ts-ignore
  await fetch(diseasesUrl + params)
    .then(res => {
      return res.json();
    })
    .then(json => {
      cardiomyopathyData.diseases = json.diseases;
    });

  // @ts-ignore
  await fetch(genesUrl + params)
    .then(res => {
      return res.json();
    })
    .then(json => {
      cardiomyopathyData.genes = json.genes;
    });
};

_init().then(() => {
  fs.writeFile(
    "src/assets/cardiomyopathyData.json",
    JSON.stringify(cardiomyopathyData),
    err => {
      console.log(err);
    }
  );
});
