import React, { useState } from 'react'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces/pokemon-full';
import { getPokemonInfo, localFavorites } from '../../utils';
import confetti from 'canvas-confetti';


interface Props {
  pokemon: Pokemon
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {
  const { id, name, sprites } = pokemon;

  //Verificar si se renderiza del lado del servidor o cliente 
  /* console.log({existeLocalStorage: typeof localStorage}); */

  const [isInFavorites, setisInFavorites] = useState(localFavorites.existPokemonInFavorites(id));

  const onToggleFavorite = () =>{
    setisInFavorites(!localFavorites.existPokemonInFavorites(id));
    localFavorites.toggleFavorite(id);

    if(isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
   
  }




  return (
    <Layout title={name}>
       <Grid.Container css={{marginTop: '5px'}} gap={2}> 
        <Grid xs={12} sm={4} > 
          <Card isHoverable={true} css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent:'space-between', flexDirection:'column'}}>
              <Text h1 transform='capitalize'>
                {name}
              </Text>
              <Button color="gradient" ghost={!isInFavorites} onClick={onToggleFavorite}>
                {isInFavorites?'En favoritos':'Guardar en favoritos'}
              </Button>

            </Card.Header>
            <Card.Body>
              <Text size={30}> Sprites: </Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                src={sprites.front_default}
                alt={name}
                width={100}
                height={100}
                />
                <Image
                src={sprites.back_default}
                alt={name}
                width={100}
                height={100}
                />
                 <Image
                src={sprites.front_shiny}
                alt={name}
                width={100}
                height={100}
                />
                 <Image
                src={sprites.back_shiny}
                alt={name}
                width={100}
                height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
       </Grid.Container> 
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151: string[] = [...Array(151)].map((value, index)=>`${index+1}`); //Creo un array que va desde 1 a 151.

  return {
    paths: pokemons151.map(id => ({
      params: {id} //Genero 151 paths que vayan de 1 hasta 151 porque hace el map.
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
 const { id } = params as { id: string };

 return {
   props: {
     pokemon: await getPokemonInfo(id)
   }
 }
}






export default PokemonPage;