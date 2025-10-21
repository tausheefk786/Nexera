import {
  Dialog,
  DialogTitle,
  InputAdornment,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  List,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import UserItem from "../components/shared/UserItem";

import { Search as SearchIcon } from "@mui/icons-material";
import { sampleUsers } from "../constants/sampleData";

const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const addFriendHandler = (id) =>{console.log(id);}
  const [users,setusers] = useState(sampleUsers);
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
