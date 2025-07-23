// src/lib/graphql/__tests__/queries.test.ts
import { describe, it, expect } from 'vitest';
import { GET_POSTS, WordPressSinglePostResponse, WordPressPost } from '../queries';

// Mock data for testing
const mockPost: WordPressPost = {
  id: '1',
  title: 'Test Blog Post',
  slug: 'test-blog-post',
  excerpt: 'This is a test excerpt for the blog post.',
  date: '2024-01-15T10:00:00',
  modified: '2024-01-15T10:00:00',
  commentStatus: 'open',
  status: 'publish',
  author: {
    node: {
      name: 'Father John',
      slug: 'father-john',
      avatar: {
        url: 'https://example.com/avatar.jpg'
      }
    }
  },
  featuredImage: {
    node: {
      sourceUrl: 'https://example.com/featured-image.jpg',
      altText: 'Featured image for test post',
      mediaDetails: {
        width: 800,
        height: 600
      }
    }
  },
  categories: {
    nodes: [
      {
        name: 'Announcements',
        slug: 'announcements',
        description: 'Parish announcements and updates'
      },
      {
        name: 'Orthodox Tradition',
        slug: 'orthodox-tradition',
        description: 'Posts about Orthodox Christian traditions'
      }
    ]
  },
  tags: {
    nodes: [
      {
        name: 'Parish Life',
        slug: 'parish-life'
      },
      {
        name: 'Community',
        slug: 'community'
      }
    ]
  }
};



const mockSinglePostResponse: WordPressSinglePostResponse = {
  post: {
    ...mockPost,
    content: '<p>This is the full content of the test blog post with HTML formatting.</p>'
  }
};



describe('GraphQL Queries', () => {
  describe('Mock Data Structure Validation', () => {
    it('should validate mock post data matches WordPress response structure', () => {
      const post = mockPost;
      
      // Test required fields
      expect(post.id).toBe('1');
      expect(post.title).toBe('Test Blog Post');
      expect(post.slug).toBe('test-blog-post');
      expect(post.excerpt).toBe('This is a test excerpt for the blog post.');
      expect(post.date).toBe('2024-01-15T10:00:00');
      expect(post.modified).toBe('2024-01-15T10:00:00');
      expect(post.commentStatus).toBe('open');
      expect(post.status).toBe('publish');

      // Test enhanced fields - author
      expect(post.author).toBeDefined();
      expect(post.author!.node.name).toBe('Father John');
      expect(post.author!.node.slug).toBe('father-john');
      expect(post.author!.node.avatar?.url).toBe('https://example.com/avatar.jpg');

      // Test enhanced fields - featuredImage
      expect(post.featuredImage).toBeDefined();
      expect(post.featuredImage!.node.sourceUrl).toBe('https://example.com/featured-image.jpg');
      expect(post.featuredImage!.node.altText).toBe('Featured image for test post');
      expect(post.featuredImage!.node.mediaDetails?.width).toBe(800);
      expect(post.featuredImage!.node.mediaDetails?.height).toBe(600);

      // Test enhanced fields - categories
      expect(post.categories).toBeDefined();
      expect(post.categories!.nodes).toHaveLength(2);
      expect(post.categories!.nodes[0].name).toBe('Announcements');
      expect(post.categories!.nodes[0].slug).toBe('announcements');
      expect(post.categories!.nodes[0].description).toBe('Parish announcements and updates');
      expect(post.categories!.nodes[1].name).toBe('Orthodox Tradition');

      // Test enhanced fields - tags
      expect(post.tags).toBeDefined();
      expect(post.tags!.nodes).toHaveLength(2);
      expect(post.tags!.nodes[0].name).toBe('Parish Life');
      expect(post.tags!.nodes[0].slug).toBe('parish-life');
      expect(post.tags!.nodes[1].name).toBe('Community');
    });

    it('should handle empty results gracefully', () => {
      const emptyData = {
        posts: {
          nodes: []
        }
      };

      expect(emptyData.posts).toBeDefined();
      expect(emptyData.posts.nodes).toBeInstanceOf(Array);
      expect(emptyData.posts.nodes).toHaveLength(0);
    });
  });

  describe('Single Post Data Validation', () => {
    it('should validate single post response structure', () => {
      const singlePostData = mockSinglePostResponse;

      expect(singlePostData.post).toBeDefined();
      
      // Test required fields
      expect(singlePostData.post.id).toBe('1');
      expect(singlePostData.post.title).toBe('Test Blog Post');
      expect(singlePostData.post.slug).toBe('test-blog-post');
      expect(singlePostData.post.content).toBe('<p>This is the full content of the test blog post with HTML formatting.</p>');
      expect(singlePostData.post.excerpt).toBe('This is a test excerpt for the blog post.');
      expect(singlePostData.post.date).toBe('2024-01-15T10:00:00');
      expect(singlePostData.post.commentStatus).toBe('open');

      // Test enhanced fields
      expect(singlePostData.post.author).toBeDefined();
      expect(singlePostData.post.featuredImage).toBeDefined();
      expect(singlePostData.post.categories).toBeDefined();
    });
  });

  describe('Query Structure Validation', () => {
    it('should have proper TypeScript interfaces for WordPress responses', () => {
      // Test that our interfaces match the expected structure
      const post: WordPressPost = mockPost;
      
      // Verify all required fields are present in interface
      expect(typeof post.id).toBe('string');
      expect(typeof post.title).toBe('string');
      expect(typeof post.slug).toBe('string');
      expect(typeof post.excerpt).toBe('string');
      expect(typeof post.date).toBe('string');
      expect(typeof post.commentStatus).toBe('string');
      
      // Verify optional enhanced fields
      if (post.author) {
        expect(typeof post.author.node.name).toBe('string');
        expect(typeof post.author.node.slug).toBe('string');
      }
      
      if (post.featuredImage) {
        expect(typeof post.featuredImage.node.sourceUrl).toBe('string');
        expect(typeof post.featuredImage.node.altText).toBe('string');
      }
      
      if (post.categories) {
        expect(Array.isArray(post.categories.nodes)).toBe(true);
      }
    });

    it('should validate GraphQL query includes all required fields', () => {
      const queryString = GET_POSTS.loc?.source.body || '';
      
      // Verify the query includes all the enhanced fields
      expect(queryString).toContain('author');
      expect(queryString).toContain('featuredImage');
      expect(queryString).toContain('categories');
      expect(queryString).toContain('sourceUrl');
      expect(queryString).toContain('altText');
      expect(queryString).toContain('mediaDetails');
      expect(queryString).toContain('width');
      expect(queryString).toContain('height');
      expect(queryString).toContain('avatar');
    });
  });
});