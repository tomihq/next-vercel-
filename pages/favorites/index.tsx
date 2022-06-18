import {useState, useEffect} from 'react';
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui";
import { localFavorites } from '../../utils';
import { GetStaticProps } from 'next';
import { pokeApi } from '../../api';



const FavoritesPage = () => {

  //Si tiene pokemon (que lo guardamos por id), entonces simplemente traemos la imagen correspondiente. Hay que usar la que viene en postman, es decir, solo cambiamos el id en la img

  const [favoritePokemons, sethaveFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    sethaveFavoritesPokemons(localFavorites.pokemons());
  }, []);
  

  return (
    <>
        <Layout title='Pokémons - Favoritos'>
               {favoritePokemons.length==0
               ?<NoFavorites/>
               :(
                 <Grid.Container gap={2} direction='row' justify='flex-start'>
                   {
                      favoritePokemons.map((id)=>(
                        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                            <Card 
                             isHoverable={true} 
                             css={{cursor: 'pointer', padding: 10}}
                            > 
                            <Card.Image
                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                              width={'100%'}
                              height={140}
                            />

                  

                            </Card>
                        </Grid>
                      ))
                   }
                 </Grid.Container>
               )
              
              } 
        </Layout>
    </>
  )
}


export default FavoritesPage;
