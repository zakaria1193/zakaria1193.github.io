import { Box, Button, Typography } from '@mui/material';
import { CardTitle, StyledCard } from './CardsCommon';

const BlogPosts = () => {
  return (
    <StyledCard>
    <Box bgcolor="background.paper" py={6}>
      <CardTitle>Blog Posts</CardTitle>
      <Typography align="center">
        <Button variant="outlined" color="primary" href="/blog">
          View Latest Blog Posts
        </Button>
      </Typography>
    </Box>

    </StyledCard>
  );
};

export default BlogPosts;
