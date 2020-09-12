import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import ArtistCard from './ArtistCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '80px 24px',
    width: 'auto',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const artists = [
   {
      name: 'Artist One',
      role: 'Singer',
      description: 'Sold the most albums in 1995',
      album: 'Awesome Album',
      tracks: [
         'Awesome Song 1',
         'Awesome Song 2',
      ]
   },
   {
      name: 'Artist Two',
      role: 'Guitarist',
      description: 'Has three grammy awards',
      album: 'Great Album',
      tracks: [
         'Great Song 1',
         'Great Song 2',
      ]
   },
   {
      name: 'Artist Three',
      role: 'Bassist',
      description: 'Rock & Roll Hall of Fame',
      album: 'Best Album',
      tracks: [
         'Best Song 1',
         'Best Song 2',
      ]
   },
   {
      name: 'Artist Four',
      role: 'Drums',
      description: 'Played on Mars',
      album: 'Sweet Album',
      tracks: [
         'Sweet Song 1',
         'Sweet Song 2',
      ]
   },
   {
      name: 'Artist Five',
      role: 'Piano',
      description: 'Jazz superstar',
      album: 'Good Album',
      tracks: [
         'Good Song 1',
         'Good Song 2',
      ]
   },
]

export default function Artists() {
  const spacing = 2;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <FormLabel>Artists</FormLabel>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {artists.map((artist, index) => (
            <Grid key={index} item>
               <ArtistCard 
                  name={artist.name} 
                  role={artist.role} 
                  description={artist.description}
                  album={artist.album}
                  tracks={artist.tracks} 
               />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
