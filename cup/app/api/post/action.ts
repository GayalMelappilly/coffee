'use server'

export const getPosts = async () => {
    const res = await fetch(`${process.env.API_URL}/posts`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json()
}

export type TypePost = {
    id: number;
    title: string;
    slug: string;
    content: string;
    cover_image: string | null;
    author: {
        id: number;
        username: string;
        email: string;
        bio: string;
        avatar: string | null;
        website: string;
        github_profile: string;
        twitter_profile: string;
        created_at: string;
    };
    topics: [key: string];
    published_at: string | null;
    created_at: string; 
    updated_at: string; 
};