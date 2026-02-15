import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export async function getPostBySlug(type: 'blog' | 'case-studies', slug: string) {
    const filePath = path.join(root, 'content', type, `${slug}.md`);
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return { meta: { title: 'Not Found', date: '', slug }, content: '' };
        }
        const source = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(source);
        return { meta: { ...data, slug }, content };
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return { meta: { title: 'Error', date: '', slug }, content: '' };
    }
}

export async function getAllPosts(type: 'blog' | 'case-studies') {
    const files = fs.readdirSync(path.join(root, 'content', type));

    return files.filter(file => file.endsWith('.md')).reduce((allPosts: any, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'content', type, postSlug),
            'utf8'
        );
        const { data } = matter(source);

        return [
            { ...data, slug: postSlug.replace('.md', '') },
            ...allPosts,
        ];
    }, []);
}
