'use server'

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

export const getPosts = async () => {
    const res = await fetch(`${process.env.API_URL}/posts`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json()
}

export const getPost = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json()
}

export type CreatePostPayload = {
    title: string;
    content: string;
    cover_image?: string | null;
    author?: {
      id?: number;
      username?: string;
      email?: string;
      bio?: string;
      avatar?: string | null;
      website?: string;
      github_profile?: string;
      twitter_profile?: string;
      created_at?: string;
    };
    topics: { [key: number]: any };
    published_at?: string | null;
    created_at?: string;
    updated_at?: string;
  };

export const createPost = async (postData: CreatePostPayload) => {
    console.log("POST DETAILS : ", postData)
    const res = await fetch(`${process.env.API_URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(JSON.stringify(errorData));
    }
  
    return res.json();
  }
  