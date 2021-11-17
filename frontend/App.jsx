import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"
import { Box, Button, Typography } from "@mui/material"

function App() {
  const [count, setCount] = useState()

  const refreshCounter = async () => {
    const res = await counter.getValue()
    setCount(res.toString())
  }

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = async () => {
    await counter.increment()
    refreshCounter()
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        children="Hello from Internet Computer + Material UI"
        sx={{ margin: "2rem 0" }}
      />
      <Button
        variant="contained"
        onClick={onIncrementClick}
      >{`Counter ${count}`}</Button>
    </Box>
  )
}

export default App
