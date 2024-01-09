import useSWR, { mutate } from "swr";
import { useMemo } from "react";
// utils
import { fetcher, endpoints, put_fetcher } from "../../utils/axios.js";

// ----------------------------------------------------------------------

export function useGetPosts() {
  const URL = endpoints.post.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      posts: data?.posts || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.posts.length,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetPost(title) {
  const URL = title ? [endpoints.post.details, { params: { title } }] : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      post: data?.post,
      postLoading: isLoading,
      postError: error,
      postValidating: isValidating,
    }),
    [data?.post, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetLatestPosts(title) {
  const URL = title ? [endpoints.post.latest, { params: { title } }] : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      latestPosts: data?.latestPosts || [],
      latestPostsLoading: isLoading,
      latestPostsError: error,
      latestPostsValidating: isValidating,
      latestPostsEmpty: !isLoading && !data?.latestPosts.length,
    }),
    [data?.latestPosts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchPosts(query) {
  const URL = query ? [endpoints.post.search, { params: { query } }] : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, {
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetTopViewedPosts(query) {
  const URL = endpoints.post.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      posts: data?.posts || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.posts.length,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}
// ----------------------------------------------------------------------

export function useGetTopSharedPosts(query) {
  const URL = endpoints.post.top_shared;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      posts: data || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
// ----------------------------------------------------------------------

export function useGetTopLikedPosts(query) {
  const URL = endpoints.post.top_liked;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      posts: data || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetPostsByCategory(query) {
  //   const URL = query
  //     ? [endpoints.post.by_category, { params: { id: query, page: 0 } }]
  //     : null;

  const URL = `https://server.blog.digiunction.com/api/post/category/${query}?page=0`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, {
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      posts: data?.posts || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.posts?.length,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export const useGetPostByID = (id) => {
  const URL = `https://server.blog.digiunction.com/api/post/get/${id}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      post: data,
      postLoading: isLoading,
      postError: error,
      postValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
};

export const useGetCommentsByPostID = (id) => {
  const URL = `https://server.blog.digiunction.com/api/post/${id}/comments`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      comments: data?.comments,
      commentsLoading: isLoading,
      commentsError: error,
      commentsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
};

export const useAddCommentOnPost = (id) => {
  const URL = `https://server.blog.digiunction.com/api/post/comment/${id}`;

  const addComment = async (content, author) => {
    const body = {
      content,
      author,
    };

    const data = await put_fetcher(URL, body );
   
    mutate(URL);
    return data;
  };

  const memoizedValue = useMemo(
    () => ({
      addComment,
    }),
    [addComment]
  );


  return memoizedValue;
};

export const useAddReplyToComment = (id, commentId) => {
  
  const addReply = async (postId, commentId, content, author) => {
    const URL = `https://server.blog.digiunction.com/api/post/reply/${postId}/${commentId}`;

    const body = {
      content,
      author,
    };

    const data = await put_fetcher(URL, body );
   
    mutate(URL);
    return data;
  };

  const memoizedValue = useMemo(
    () => ({
      addReply,
    }),
    [addReply]
  );


  return memoizedValue;
};