import { useGetPosts } from "@/app/api/blog";

// usePosts.js
export function usePosts() {
    const { posts } = useGetPosts();
    return posts
}
