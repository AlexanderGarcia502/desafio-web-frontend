import HomeTemplate from "../components/templates/home";



const HomePage= () => {
  return (

    <HomeTemplate >
        <HomeTemplate.ProductList products={[{nombre:"Jabon", precio:2.54}]}/>
    </HomeTemplate>

  );
};


export default HomePage;
