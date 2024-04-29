import axios from "axios";
import Country from "../models/country.mjs";

const all = async (req, res) => {
  const countries = await Country.find({}).sort({title: 'asc'}).populate("movies");
  res.json(countries);
};

const create = async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    res.json(country);
  } catch (error) {
    res.status(400).json(error);
  }
};

const fillCountries = async (req, res) => {
  try {
    const responce = await axios.get("https://restcountries.com/v3.1/all");
    const countries = responce.data;
    countries.map(async (country) => {
      try {const NewCountry = new Country({ title: country.name.common });
            await NewCountry.save();
        }
      catch (error) {
          console.log(error);
        }
    });
    res.send("Countries filled");
  } catch (error) {
    console.log(error);
  }
};

const clearCountries = async (req, res) => {
  await Country.deleteMany({});
  res.send("Clear");
};

const getCountry = async (req, res) => {
  const country = await Country.findById(req.params.id)
  res.send(country)
}


export default { all, create, fillCountries, clearCountries, getCountry };
