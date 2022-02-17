import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as api from "../../api";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Link from "next/link";

const List = () => {
  const [state, setState] = useState();

  useEffect(() => {
    async function fetchApi() {
      const formData = await api.getAllProduct(
        "https://api.freerealapi.com/blogs"
      );
      console.log(formData);
      setState(formData.data);
    }
    fetchApi();
  }, []);

  return (
    <>
      {state?.blogs?.map((x) => (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            height="100px"
            image={x.image}
            alt="green iguana"
          />
          <CardContent>
            <Tooltip title={x.user.email}>
              <Typography gutterBottom variant="h5" component="div">
                {x.user.name}
              </Typography>
            </Tooltip>
            <Typography variant="body2" color="text.secondary">
              {x.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Save</Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Link
                href={`/comment/${x._id}`}
                // query={x}
                style={{ textDecoration: "none" }}
              >
                <CreateNewFolderIcon style={{ color: "gray" }} />
              </Link>
            </IconButton>
          </CardActions>
          <Stack direction="row" style={{ flexWrap: "wrap" }}>
            {x.tags.map((x) => (
              <Chip label={x} style={{ margin: 5 }} />
            ))}
          </Stack>
        </Card>
      ))}
    </>
  );
};
export default List;
