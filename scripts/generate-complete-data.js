#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Données complètes des villes d'Île-de-France
const completeCitiesData = {
  "departments": {
    "75": {
      "name": "Paris",
      "cities": [
        {
          "name": "Paris",
          "slug": "paris",
          "population": "2165423",
          "priority": "critique",
          "zones": [
            "1er arrondissement", "2e arrondissement", "3e arrondissement", "4e arrondissement",
            "5e arrondissement", "6e arrondissement", "7e arrondissement", "8e arrondissement",
            "9e arrondissement", "10e arrondissement", "11e arrondissement", "12e arrondissement",
            "13e arrondissement", "14e arrondissement", "15e arrondissement", "16e arrondissement",
            "17e arrondissement", "18e arrondissement", "19e arrondissement", "20e arrondissement"
          ]
        }
      ]
    },
    "92": {
      "name": "Hauts-de-Seine",
      "cities": [
        {
          "name": "Boulogne-Billancourt",
          "slug": "boulogne-billancourt",
          "population": "120071",
          "priority": "critique",
          "zones": ["Centre-ville", "Quartier des Princes", "Quartier du Point du Jour", "Quartier de la République"]
        },
        {
          "name": "Neuilly-sur-Seine",
          "slug": "neuilly-sur-seine",
          "population": "59940",
          "priority": "critique",
          "zones": ["Centre-ville", "Quartier de la Folie", "Quartier de la Défense", "Quartier de la Porte Maillot"]
        },
        {
          "name": "Issy-les-Moulineaux",
          "slug": "issy-les-moulineaux",
          "population": "68000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier des Épinettes", "Quartier de la Ferme", "Quartier de l'Île Saint-Germain"]
        },
        {
          "name": "Levallois-Perret",
          "slug": "levallois-perret",
          "population": "68000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Défense", "Quartier de la Gare"]
        },
        {
          "name": "Clichy",
          "slug": "clichy",
          "population": "62000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier des Batignolles"]
        },
        {
          "name": "Asnières-sur-Seine",
          "slug": "asnieres-sur-seine",
          "population": "87000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la Gare", "Quartier de la République", "Quartier des Grésillons"]
        },
        {
          "name": "Colombes",
          "slug": "colombes",
          "population": "85000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la Gare", "Quartier de la République", "Quartier des Vallées"]
        },
        {
          "name": "Nanterre",
          "slug": "nanterre",
          "population": "97000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la Défense", "Quartier de la Gare", "Quartier de la République"]
        },
        {
          "name": "Rueil-Malmaison",
          "slug": "rueil-malmaison",
          "population": "78000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier de la Défense"]
        },
        {
          "name": "Suresnes",
          "slug": "suresnes",
          "population": "48000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier de la Défense"]
        },
        {
          "name": "Puteaux",
          "slug": "puteaux",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la Défense", "Quartier de la République", "Quartier de la Gare"]
        },
        {
          "name": "Courbevoie",
          "slug": "courbevoie",
          "population": "85000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la Défense", "Quartier de la République", "Quartier de la Gare"]
        },
        {
          "name": "La Défense",
          "slug": "la-defense",
          "population": "25000",
          "priority": "haute",
          "zones": ["Centre d'affaires", "Quartier des affaires", "Quartier commercial", "Quartier des bureaux"]
        },
        {
          "name": "Saint-Cloud",
          "slug": "saint-cloud",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Sèvres",
          "slug": "sevres",
          "population": "23000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Meudon",
          "slug": "meudon",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Chaville",
          "slug": "chaville",
          "population": "20000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Vélizy-Villacoublay",
          "slug": "velizy-villacoublay",
          "population": "20000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Versailles",
          "slug": "versailles",
          "population": "85000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Saint-Germain-en-Laye",
          "slug": "saint-germain-en-laye",
          "population": "40000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Le Chesnay",
          "slug": "le-chesnay",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Rambouillet",
          "slug": "rambouillet",
          "population": "26000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Montigny-le-Bretonneux",
          "slug": "montigny-le-bretonneux",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Trappes",
          "slug": "trappes",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Élancourt",
          "slug": "elancourt",
          "population": "26000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Plaisir",
          "slug": "plaisir",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Mantes-la-Jolie",
          "slug": "mantes-la-jolie",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Poissy",
          "slug": "poissy",
          "population": "38000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Conflans-Sainte-Honorine",
          "slug": "conflans-sainte-honorine",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Achères",
          "slug": "acheres",
          "population": "20000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "93": {
      "name": "Seine-Saint-Denis",
      "cities": [
        {
          "name": "Saint-Denis",
          "slug": "saint-denis",
          "population": "111000",
          "priority": "critique",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Aubervilliers",
          "slug": "aubervilliers",
          "population": "87000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Drancy",
          "slug": "drancy",
          "population": "72000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Aulnay-sous-Bois",
          "slug": "aulnay-sous-bois",
          "population": "85000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Noisy-le-Grand",
          "slug": "noisy-le-grand",
          "population": "68000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Sevran",
          "slug": "sevran",
          "population": "52000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Livry-Gargan",
          "slug": "livry-gargan",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "La Courneuve",
          "slug": "la-courneuve",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Épinay-sur-Seine",
          "slug": "epinay-sur-seine",
          "population": "55000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Pierrefitte-sur-Seine",
          "slug": "pierrefitte-sur-seine",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Stains",
          "slug": "stains",
          "population": "38000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Montfermeil",
          "slug": "montfermeil",
          "population": "26000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Clichy-sous-Bois",
          "slug": "clichy-sous-bois",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Neuilly-Plaisance",
          "slug": "neuilly-plaisance",
          "population": "20000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Neuilly-sur-Marne",
          "slug": "neuilly-sur-marne",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Villetaneuse",
          "slug": "villetaneuse",
          "population": "12000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Le Raincy",
          "slug": "le-raincy",
          "population": "14000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "94": {
      "name": "Val-de-Marne",
      "cities": [
        {
          "name": "Créteil",
          "slug": "creteil",
          "population": "92000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Vitry-sur-Seine",
          "slug": "vitry-sur-seine",
          "population": "95000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Champigny-sur-Marne",
          "slug": "champigny-sur-marne",
          "population": "77000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Saint-Maur-des-Fossés",
          "slug": "saint-maur-des-fosses",
          "population": "75000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Nogent-sur-Marne",
          "slug": "nogent-sur-marne",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Le Perreux-sur-Marne",
          "slug": "le-perreux-sur-marne",
          "population": "34000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Bry-sur-Marne",
          "slug": "bry-sur-marne",
          "population": "17000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Villeneuve-Saint-Georges",
          "slug": "villeneuve-saint-georges",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Sucy-en-Brie",
          "slug": "sucy-en-brie",
          "population": "27000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Boissy-Saint-Léger",
          "slug": "boissy-saint-leger",
          "population": "17000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "77": {
      "name": "Seine-et-Marne",
      "cities": [
        {
          "name": "Meaux",
          "slug": "meaux",
          "population": "55000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Melun",
          "slug": "melun",
          "population": "40000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Chelles",
          "slug": "chelles",
          "population": "55000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Champs-sur-Marne",
          "slug": "champs-sur-marne",
          "population": "25000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Torcy",
          "slug": "torcy",
          "population": "23000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Lagny-sur-Marne",
          "slug": "lagny-sur-marne",
          "population": "21000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "78": {
      "name": "Yvelines",
      "cities": [
        {
          "name": "Versailles",
          "slug": "versailles",
          "population": "85000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Saint-Germain-en-Laye",
          "slug": "saint-germain-en-laye",
          "population": "40000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Le Chesnay",
          "slug": "le-chesnay",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Rambouillet",
          "slug": "rambouillet",
          "population": "26000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Château"]
        },
        {
          "name": "Montigny-le-Bretonneux",
          "slug": "montigny-le-bretonneux",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Trappes",
          "slug": "trappes",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Élancourt",
          "slug": "elancourt",
          "population": "26000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Plaisir",
          "slug": "plaisir",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Mantes-la-Jolie",
          "slug": "mantes-la-jolie",
          "population": "45000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Poissy",
          "slug": "poissy",
          "population": "38000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Conflans-Sainte-Honorine",
          "slug": "conflans-sainte-honorine",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Achères",
          "slug": "acheres",
          "population": "20000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "91": {
      "name": "Essonne",
      "cities": [
        {
          "name": "Évry",
          "slug": "evry",
          "population": "68000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Massy",
          "slug": "massy",
          "population": "50000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Palaiseau",
          "slug": "palaiseau",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Orsay",
          "slug": "orsay",
          "population": "16000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Les Ulis",
          "slug": "les-ulis",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Morangis",
          "slug": "morangis",
          "population": "12000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Athis-Mons",
          "slug": "athis-mons",
          "population": "35000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Juvisy-sur-Orge",
          "slug": "juvisy-sur-orge",
          "population": "17000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Viry-Châtillon",
          "slug": "viry-chatillon",
          "population": "32000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Grigny",
          "slug": "grigny",
          "population": "28000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Ris-Orangis",
          "slug": "ris-orangis",
          "population": "28000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Étampes",
          "slug": "etampes",
          "population": "25000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Dourdan",
          "slug": "dourdan",
          "population": "11000",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Corbeil-Essonnes",
          "slug": "corbeil-essonnes",
          "population": "52000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    },
    "95": {
      "name": "Val-d'Oise",
      "cities": [
        {
          "name": "Cergy",
          "slug": "cergy",
          "population": "65000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Pontoise",
          "slug": "pontoise",
          "population": "30000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Argenteuil",
          "slug": "argenteuil",
          "population": "110000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Sarcelles",
          "slug": "sarcelles",
          "population": "60000",
          "priority": "haute",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Garges-lès-Gonesse",
          "slug": "garges-les-gonesse",
          "population": "42000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Villiers-le-Bel",
          "slug": "villiers-le-bel",
          "population": "28000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Gonesse",
          "slug": "gonesse",
          "population": "25000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de la République", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Roissy-en-France",
          "slug": "roissy-en-france",
          "population": "2500",
          "priority": "basse",
          "zones": ["Centre-ville", "Quartier de l'aéroport", "Quartier de la Gare", "Quartier du Parc"]
        },
        {
          "name": "Le Bourget",
          "slug": "le-bourget",
          "population": "15000",
          "priority": "moyenne",
          "zones": ["Centre-ville", "Quartier de l'aéroport", "Quartier de la Gare", "Quartier du Parc"]
        }
      ]
    }
  }
};

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';

// Fonction pour générer le fichier de données
function generateCompleteData() {
  console.log('🚀 Génération des données complètes des villes d\'Île-de-France...\n');
  
  // Calculer les statistiques
  const totalCities = Object.values(completeCitiesData.departments)
    .reduce((sum, dept) => sum + dept.cities.length, 0);
  
  const criticalCities = Object.values(completeCitiesData.departments)
    .flatMap(dept => dept.cities.filter(city => city.priority === 'critique'));
  
  const highPriorityCities = Object.values(completeCitiesData.departments)
    .flatMap(dept => dept.cities.filter(city => city.priority === 'haute'));
  
  const mediumPriorityCities = Object.values(completeCitiesData.departments)
    .flatMap(dept => dept.cities.filter(city => city.priority === 'moyenne'));
  
  const lowPriorityCities = Object.values(completeCitiesData.departments)
    .flatMap(dept => dept.cities.filter(city => city.priority === 'basse'));
  
  console.log(`📊 Statistiques:`);
  console.log(`   - Total des villes: ${totalCities}`);
  console.log(`   - Villes critiques: ${criticalCities.length}`);
  console.log(`   - Villes haute priorité: ${highPriorityCities.length}`);
  console.log(`   - Villes moyenne priorité: ${mediumPriorityCities.length}`);
  console.log(`   - Villes basse priorité: ${lowPriorityCities.length}\n`);
  
  // Sauvegarder le fichier
  fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(completeCitiesData, null, 2));
  console.log(`✅ Fichier de données sauvegardé: ${CITIES_DATA_PATH}`);
  
  // Créer un rapport
  const report = {
    generatedAt: new Date().toISOString(),
    totalCities,
    statistics: {
      critical: criticalCities.length,
      high: highPriorityCities.length,
      medium: mediumPriorityCities.length,
      low: lowPriorityCities.length
    },
    departments: Object.entries(completeCitiesData.departments).map(([code, dept]) => ({
      code,
      name: dept.name,
      citiesCount: dept.cities.length
    })),
    cities: Object.values(completeCitiesData.departments)
      .flatMap(dept => dept.cities)
      .map(city => ({
        name: city.name,
        slug: city.slug,
        priority: city.priority,
        population: city.population
      }))
  };
  
  fs.writeFileSync('./CITIES_DATA_REPORT.json', JSON.stringify(report, null, 2));
  console.log(`✅ Rapport généré: CITIES_DATA_REPORT.json`);
  
  console.log('\n🎉 Génération des données terminée !');
  console.log('📋 Prochaines étapes:');
  console.log('   1. node scripts/generate-all-cities.js');
  console.log('   2. node scripts/deploy-cities.js check');
  console.log('   3. node scripts/deploy-cities.js deploy');
}

// Exécuter le script
if (require.main === module) {
  generateCompleteData();
}

module.exports = { generateCompleteData, completeCitiesData };
