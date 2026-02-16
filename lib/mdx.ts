import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export interface BlogMeta {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags?: string[];
    image?: string;
}

export interface CaseStudyMeta extends BlogMeta {
    client?: string;
    industry?: string;
    services?: string[];
    stat?: string;
    techStack?: string[];
}

export async function getPostBySlug(type: 'blog', slug: string): Promise<{ meta: BlogMeta; content: string }>;
export async function getPostBySlug(type: 'case-studies', slug: string): Promise<{ meta: CaseStudyMeta; content: string }>;
export async function getPostBySlug(type: 'blog' | 'case-studies', slug: string): Promise<{ meta: BlogMeta | CaseStudyMeta; content: string }> {
    const filePath = path.join(root, 'content', type, `${slug}.md`);
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return {
                meta: {
                    title: 'Not Found',
                    description: 'The requested post could not be found.',
                    date: '',
                    slug
                },
                content: ''
            };
        }
        const source = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(source);

        // Ensure data matches BlogMeta or CaseStudyMeta
        const meta = {
            ...data,
            slug,
            description: data.description || '', // Fallback for safety
        } as BlogMeta | CaseStudyMeta;

        return { meta, content };
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return {
            meta: {
                title: 'Error',
                description: 'An error occurred while loading this post.',
                date: '',
                slug
            },
            content: ''
        };
    }
}

export async function getAllPosts(type: 'blog'): Promise<BlogMeta[]>;
export async function getAllPosts(type: 'case-studies'): Promise<CaseStudyMeta[]>;
export async function getAllPosts(type: 'blog' | 'case-studies'): Promise<(BlogMeta | CaseStudyMeta)[]> {
    const files = fs.readdirSync(path.join(root, 'content', type));

    return files.filter(file => file.endsWith('.md')).reduce((allPosts: (BlogMeta | CaseStudyMeta)[], postSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'content', type, postSlug),
            'utf8'
        );
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: postSlug.replace('.md', ''),
                description: data.description || '',
            } as BlogMeta | CaseStudyMeta,
            ...allPosts,
        ];
    }, []);
}
