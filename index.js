import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const displayitemcount=10;
var categoriesdrinks= [
  {
      "strCategory": "Cocktail"
  },
  {
      "strCategory": "Ordinary Drink"
  },
  {
      "strCategory": "Punch / Party Drink"
  },
  {
      "strCategory": "Shake"
  },
  {
      "strCategory": "Other / Unknown"
  },
  {
      "strCategory": "Cocoa"
  },
  {
      "strCategory": "Shot"
  },
  {
      "strCategory": "Coffee / Tea"
  },
  {
      "strCategory": "Homemade Liqueur"
  },
  {
      "strCategory": "Beer"
  },
  {
      "strCategory": "Soft Drink"
  }
  ]   ;


  var  glassdrinks= [
      {
          "strGlass": "Highball glass"
      },
      {
          "strGlass": "Old-fashioned glass"
      },
      {
          "strGlass": "Cocktail glass"
      },
      {
          "strGlass": "Copper Mug"
      },
      {
          "strGlass": "Whiskey Glass"
      },
      {
          "strGlass": "Collins glass"
      },
      {
          "strGlass": "Pousse cafe glass"
      },
      {
          "strGlass": "Champagne flute"
      },
      {
          "strGlass": "Whiskey sour glass"
      },
      {
          "strGlass": "Brandy snifter"
      },
      {
          "strGlass": "White wine glass"
      },
      {
          "strGlass": "Nick and Nora Glass"
      },
      {
          "strGlass": "Hurricane glass"
      },
      {
          "strGlass": "Coffee mug"
      },
      {
          "strGlass": "Shot glass"
      },
      {
          "strGlass": "Jar"
      },
      {
          "strGlass": "Irish coffee cup"
      },
      {
          "strGlass": "Punch bowl"
      },
      {
          "strGlass": "Pitcher"
      },
      {
          "strGlass": "Pint glass"
      },
      {
          "strGlass": "Cordial glass"
      },
      {
          "strGlass": "Beer mug"
      },
      {
          "strGlass": "Margarita/Coupette glass"
      },
      {
          "strGlass": "Beer pilsner"
      },
      {
          "strGlass": "Beer Glass"
      },
      {
          "strGlass": "Parfait glass"
      },
      {
          "strGlass": "Wine Glass"
      },
      {
          "strGlass": "Mason jar"
      },
      {
          "strGlass": "Margarita glass"
      },
      {
          "strGlass": "Martini Glass"
      },
      {
          "strGlass": "Balloon Glass"
      },
      {
          "strGlass": "Coupe Glass"
      }
  ];

  
  var  ingredientsdrinks= [
          {
              "strIngredient1": "Light rum"
          },
          {
              "strIngredient1": "Bourbon"
          },
          {
              "strIngredient1": "Vodka"
          },
          {
              "strIngredient1": "Gin"
          },
          {
              "strIngredient1": "Blended whiskey"
          },
          {
              "strIngredient1": "Tequila"
          },
          {
              "strIngredient1": "Sweet Vermouth"
          },
          {
              "strIngredient1": "Apricot brandy"
          },
          {
              "strIngredient1": "Triple sec"
          },
          {
              "strIngredient1": "Southern Comfort"
          },
          {
              "strIngredient1": "Orange bitters"
          },
          {
              "strIngredient1": "Brandy"
          },
          {
              "strIngredient1": "Lemon vodka"
          },
          {
              "strIngredient1": "Dry Vermouth"
          },
          {
              "strIngredient1": "Dark rum"
          },
          {
              "strIngredient1": "Amaretto"
          },
          {
              "strIngredient1": "Tea"
          },
          {
              "strIngredient1": "Applejack"
          },
          {
              "strIngredient1": "Champagne"
          },
          {
              "strIngredient1": "Scotch"
          },
          {
              "strIngredient1": "Coffee liqueur"
          },
          {
              "strIngredient1": "Añejo rum"
          },
          {
              "strIngredient1": "Bitters"
          },
          {
              "strIngredient1": "Sugar"
          },
          {
              "strIngredient1": "Kahlua"
          },
          {
              "strIngredient1": "Dubonnet Rouge"
          },
          {
              "strIngredient1": "Lime juice"
          },
          {
              "strIngredient1": "Irish whiskey"
          },
          {
              "strIngredient1": "Apple brandy"
          },
          {
              "strIngredient1": "Carbonated water"
          },
          {
              "strIngredient1": "Cherry brandy"
          },
          {
              "strIngredient1": "Creme de Cacao"
          },
          {
              "strIngredient1": "Grenadine"
          },
          {
              "strIngredient1": "Port"
          },
          {
              "strIngredient1": "Coffee brandy"
          },
          {
              "strIngredient1": "Red wine"
          },
          {
              "strIngredient1": "Rum"
          },
          {
              "strIngredient1": "Grapefruit juice"
          },
          {
              "strIngredient1": "Ricard"
          },
          {
              "strIngredient1": "Sherry"
          },
          {
              "strIngredient1": "Cognac"
          },
          {
              "strIngredient1": "Sloe gin"
          },
          {
              "strIngredient1": "Strawberry schnapps"
          },
          {
              "strIngredient1": "Apple juice"
          },
          {
              "strIngredient1": "Pineapple juice"
          },
          {
              "strIngredient1": "Lemon juice"
          },
          {
              "strIngredient1": "Sugar syrup"
          },
          {
              "strIngredient1": "Milk"
          },
          {
              "strIngredient1": "Strawberries"
          },
          {
              "strIngredient1": "Chocolate syrup"
          },
          {
              "strIngredient1": "Yoghurt"
          },
          {
              "strIngredient1": "Mango"
          },
          {
              "strIngredient1": "Ginger"
          },
          {
              "strIngredient1": "Lime"
          },
          {
              "strIngredient1": "Cantaloupe"
          },
          {
              "strIngredient1": "Berries"
          },
          {
              "strIngredient1": "Grapes"
          },
          {
              "strIngredient1": "Kiwi"
          },
          {
              "strIngredient1": "Tomato juice"
          },
          {
              "strIngredient1": "Cocoa powder"
          },
          {
              "strIngredient1": "Chocolate"
          },
          {
              "strIngredient1": "Heavy cream"
          },
          {
              "strIngredient1": "Galliano"
          },
          {
              "strIngredient1": "Peach Vodka"
          },
          {
              "strIngredient1": "Ouzo"
          },
          {
              "strIngredient1": "Coffee"
          },
          {
              "strIngredient1": "Spiced rum"
          },
          {
              "strIngredient1": "Water"
          },
          {
              "strIngredient1": "Espresso"
          },
          {
              "strIngredient1": "Angelica root"
          },
          {
              "strIngredient1": "Orange"
          },
          {
              "strIngredient1": "Cranberries"
          },
          {
              "strIngredient1": "Johnnie Walker"
          },
          {
              "strIngredient1": "Apple cider"
          },
          {
              "strIngredient1": "Everclear"
          },
          {
              "strIngredient1": "Cranberry juice"
          },
          {
              "strIngredient1": "Egg yolk"
          },
          {
              "strIngredient1": "Egg"
          },
          {
              "strIngredient1": "Grape juice"
          },
          {
              "strIngredient1": "Peach nectar"
          },
          {
              "strIngredient1": "Lemon"
          },
          {
              "strIngredient1": "Firewater"
          },
          {
              "strIngredient1": "Lemonade"
          },
          {
              "strIngredient1": "Lager"
          },
          {
              "strIngredient1": "Whiskey"
          },
          {
              "strIngredient1": "Absolut Citron"
          },
          {
              "strIngredient1": "Pisco"
          },
          {
              "strIngredient1": "Irish cream"
          },
          {
              "strIngredient1": "Ale"
          },
          {
              "strIngredient1": "Chocolate liqueur"
          },
          {
              "strIngredient1": "Midori melon liqueur"
          },
          {
              "strIngredient1": "Sambuca"
          },
          {
              "strIngredient1": "Cider"
          },
          {
              "strIngredient1": "Sprite"
          },
          {
              "strIngredient1": "7-Up"
          },
          {
              "strIngredient1": "Blackberry brandy"
          },
          {
              "strIngredient1": "Peppermint schnapps"
          },
          {
              "strIngredient1": "Creme de Cassis"
          },
          {
              "strIngredient1": "Jack Daniels"
          },
          {
              "strIngredient1": "Baileys irish cream"
          }
  ];
  var alcoholicdrink=[
      {
          "strAlcoholic": "Alcoholic"
      },
      {
          "strAlcoholic": "Non alcoholic"
      },
      {
          "strAlcoholic": "Optional alcohol"
      }
  ];

  var selecteddrinktype="Ordinary Drink";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use((req,res,next)=>{
  res.locals.categoriesdrinks=categoriesdrinks;
  res.locals.glassdrinks=glassdrinks;
  res.locals.ingredientsdrinks=ingredientsdrinks;
  res.locals.alcoholicdrink=alcoholicdrink;
  res.locals.selecteddrinktype=selecteddrinktype;
  next();   
});

app.get("/", async (req, res) => {
    try {
        let category="Ordinary_Drink";
        selecteddrinktype="Ordinary Drink";
      const response = await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const result = response.data;
     
      res.render("index.ejs", { data:result,categoriesdrinks,glassdrinks,alcoholicdrink,ingredientsdrinks,selecteddrinktype });

    } catch (error) {
        console.log(error);
      
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });
  app.get("/Missing", async (req, res) => {
        res.render("Missing.ejs")
  });
  app.get("/About", async (req, res) => {
    res.render("about.ejs")
  });
  app.get("/Faq", async (req, res) => {
    res.render("faq.ejs")
  });
  app.get("/Contact", async (req, res) => {
    res.render("contact.ejs")
  });
  app.post('/search',async(req,res)=>{
    try{
   let searchdata=req.body.searchdata;
   if(searchdata)
    {
  
      var response=await axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchdata}`);
      const result=response.data;
      res.render('searchdata.ejs',{searchdata:result});
    }
    }
    catch(error)
    {
      console.log(error.message);
      res.render('searchdata.ejs',{error:error.message});
     
    }
  
});
app.post('/categories',async(req,res)=>{
  let categoriesname=req.body.categories;
  selecteddrinktype=categoriesname;
    let response=await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${categoriesname}`);
    res.render("index.ejs",{data:response.data,selecteddrinktype});
});
app.post('/alcoholics',async(req,res)=>{
  var alcoholicsname=req.body.Alcoholic;
  selecteddrinktype=alcoholicsname;
    let response=await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholicsname}`);
    res.render("index.ejs",{data:response.data,selecteddrinktype});
})
app.post('/glasses',async(req,res)=>{
  var glassname=req.body.glasses;
  console.log(req.body);
  selecteddrinktype=glassname;
    let response=await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?g=${glassname}`);
    res.render("index.ejs",{data:response.data,selecteddrinktype});
})
app.post('/Ingredients',async(req,res)=>{
    var ingredientname=req.body.Ingredients;
    selecteddrinktype=ingredientname;
    let response=await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientname}`);
    res.render("index.ejs",{data:response.data,selecteddrinktype});
})

app.get('/Details/:id',async(req,res)=>{
  try{
 //let searchdata=JSON.parse(req.params.id).replace(/\\|\//g,'');
 let searchdata=(req.params.id).replace(/\\|\//g,'');
 
   if(!searchdata.includes('width'))
    {
      console.log(`search data in details ${searchdata}`);
      var url=`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchdata}`;
    var response=await axios.get(url);
    const result=response.data;
    //console.log(`result in details ${JSON.stringify(result)} , URL is =${url}`);
    res.render('drinkDetails.ejs',{searchdataDetails:JSON.stringify(result.drinks[0]) }); 
    }
  }
  catch(error)
  {
    console.log(error.message);
    res.render('drinkDetails.ejs',{error:error.message});
   
  }

});

app.get('/IngredientsDetails/:id',async(req,res)=>{
  try{
 //let searchdata=JSON.parse(req.params.id).replace(/\\|\//g,'');
 let searchdata=(req.params.id).replace(/\\|\//g,'');
 
   if(!searchdata.includes('width'))
    {
      //console.log(`search data in details ${searchdata}`);
      var url=`https://thecocktaildb.com/images/ingredients/=${searchdata}-small.png`;
    var response=await axios.get(url);
    const result=response.data;
    console.log(result);
    //console.log(`result in details ${JSON.stringify(result)} , URL is =${url}`);
    res.render('drinkDetails.ejs',{ingredientimage:json.stringify(result)  }); 
    }
  }
  catch(error)
  {
    console.log(error.message);
    res.render('drinkDetails.ejs',{error:error.message});
   
  }

});
app.listen(port,(req,res)=>{
    console.log(`listening to the port ${port}`);
})