import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Card, Container, Grid } from "@tds/ui";
import { DefaultLink } from "../DefaultLink";
import type { LinkComponent, PostSummary } from "../types";

export interface LatestNewsProps {
  title?: string;
  posts: PostSummary[];
  linkComponent?: LinkComponent;
}

/**
 * Curated highlight section for a small number of featured posts (e.g. the
 * 3 most recent). For a full paginated archive, use PostList instead.
 * Presentational only — the caller supplies `posts`, already fetched.
 */
export function LatestNews({ title = "Latest from the blog", posts, linkComponent: Link = DefaultLink }: LatestNewsProps) {
  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea component={Link} href={post.href} sx={{ height: "100%", alignItems: "stretch" }}>
                {post.imageUrl && <CardMedia component="img" height="160" image={post.imageUrl} alt="" />}
                <CardContent>
                  <Stack spacing={1}>
                    {post.date && (
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                        {post.date}
                      </Typography>
                    )}
                    <Typography variant="h6" component="h3">
                      {post.title}
                    </Typography>
                    {post.excerpt && (
                      <Typography variant="body1" color="text.secondary">
                        {post.excerpt}
                      </Typography>
                    )}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
