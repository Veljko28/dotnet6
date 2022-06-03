import React from 'react'
import {useRouter} from 'next/router';
import {Grid} from '@mui/material'

import ProfileBlock from '../../components/ProfileBlock'

const profile = () => {
  const router = useRouter()
  const id = router.query['id'];

  return (
    <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={6}>
            <ProfileBlock id={id}/>
        </Grid>
        <Grid item xs={3}/>
    </Grid>
  )
}

export default profile