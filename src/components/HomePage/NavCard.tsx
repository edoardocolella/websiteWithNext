import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export function NavCard(props: { page: string; image: string; title: string }) {
    const router = useRouter()
  
    let navigateSlash = function () {
      router.replace(`/${props.page}`)
    }
    return (
      <Card className="mb-3 mt-4">
        <CardActionArea onClick={navigateSlash}>
          <CardMedia
            component="img"
            height="240"
            image={props.image}
            alt={props.page}
          />
          <CardContent>
            <Typography gutterBottom align="center" variant="h4" component="div">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }