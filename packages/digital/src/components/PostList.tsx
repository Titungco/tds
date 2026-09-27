import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Card, Container, Grid } from "@tds/ui";
import { DefaultLink } from "../DefaultLink";
import type { LinkComponent, PostSummary } from "../types";

export interface PostListPagination {
  page: number;
  totalPages: number;
  /**
   * Consumer decides what a page change does — re-query and pass new
   * `posts` (fully server-rendered) or hydrate this block and fetch
   * client-side. PostList itself has no opinion on that (see ADR 0002).
   */
  onPageChange: (page: number) => void;
}

export interface PostListProps {
  posts: PostSummary[];
  emptyMessage?: string;
  pagination?: PostListPagination;
  linkComponent?: LinkComponent;
}

/**
 * General-purpose post archive/listing — every post gets equal billing
 * (unlike LatestNews' curated highlight layout). Presentational only: the
 * caller supplies `posts` already fetched for the current page.
 */
export function PostList({ posts, emptyMessage = "No posts yet.", pagination, linkComponent: Link = DefaultLink }: PostListProps) {
  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      {posts.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          {emptyMessage}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  component={Link}
                  href={post.href}
                  sx={{ display: "flex", gap: 2, alignItems: "stretch", height: "100%" }}
                >
                  {post.imageUrl && (
                    <CardMedia component="img" sx={{ width: 120, flexShrink: 0 }} image={post.imageUrl} alt="" />
                  )}
                  <CardContent>
                    <Stack spacing={1}>
                      {post.date && (
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                          {post.date}
                          {post.author ? ` · ${post.author}` : ""}
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
      )}
      {pagination && pagination.totalPages > 1 && (
        <Stack sx={{ alignItems: "center", pt: 4 }}>
          <Pagination
            page={pagination.page}
            count={pagination.totalPages}
            onChange={(_event, page) => pagination.onPageChange(page)}
          />
        </Stack>
      )}
    </Container>
  );
}
