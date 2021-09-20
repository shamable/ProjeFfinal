import React from 'react';
import { useEffect, useState } from 'react'; 
import './ModifierRecette';
import './Accueil.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const Accueil = () => {
        const [recettes, setRecettes] = useState(null);
        const [btnSupp, setSupp]=useState(false);
        const getRecetteApi = ()=>{
          fetch('http://localhost:9000/api/recipes')
          .then(res => res.json())
          .then(recipes => {
            setRecettes(recipes);
          });
        }
      
        useEffect(()=> {
          getRecetteApi();
        }, []);
      
        const supprimerRecette = (btnSupp, id) => {

          console.log(id);
          console.log("btna",btnSupp);

          if(btnSupp===true){
            const requestOptions = {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }};
      
              fetch(`http://localhost:9000/api/recipe/${id}`, requestOptions)
                .then((res) => res.json())
                .then(
                  (result) => {
                    console.log(result);
                    setSupp(false); 
                    getRecetteApi();                                                         
                  },
                  (error) => {
                  }
                );
            }
          
        }
            

        return (
          <div className="App">
            <header> 
              <div
        className='p-5 text-center bg-image'

      >
        <div className='mask header'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'>LA CANTINA</h1>
            </div>
          </div>
        </div>
      </div>
            </header>
            <h1>Liste des recettes </h1>
            <div className="d-flex flex-wrap">
            {recettes && recettes.map(recette =>
           <div className="col-md-4" key={recette.id}>
            <MDBCard className="mx-auto" style={{ maxWidth: '22rem' }}>
                  <MDBCardImage src={recette.photo} position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle><h2><a href={"/recette/" + recette.id}>{recette.titre}</a></h2></MDBCardTitle>
                    <MDBCardText>
                    <p>{recette.description}</p>
                    <p><MDBIcon far icon="clock" />{recette.tempsPreparation} min</p>
                    <p><MDBIcon fas icon="user-friends" />{recette.personnes} pers</p>
                    <p><MDBIcon fas icon="star-half-alt" />niveau :{recette.niveau}</p>
                    </MDBCardText>
                    <MDBBtn className="me-3" onClick={()=>supprimerRecette(true, recette.id)}>Supprimer </MDBBtn>
                    <MDBBtn onClick href={"/ModifierRecette"}>Modifier</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
            </div>)}
              </div>
      
          </div>
        );
      }


export default Accueil;