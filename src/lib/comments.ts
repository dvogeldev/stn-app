/**
 * Utility functions for handling comment-related functionality
 * Since comments are disabled, these functions help manage the UI accordingly
 */

export interface CommentStatus {
  isEnabled: boolean;
  status: 'open' | 'closed' | 'disabled';
  message?: string;
}

/**
 * Check if comments are enabled for a post
 */
export function getCommentStatus(commentStatus?: string): CommentStatus {
  if (!commentStatus || commentStatus === 'closed') {
    return {
      isEnabled: false,
      status: 'closed',
      message: 'Comments are disabled for this post.'
    };
  }
  
  if (commentStatus === 'open') {
    return {
      isEnabled: true,
      status: 'open'
    };
  }
  
  return {
    isEnabled: false,
    status: 'disabled',
    message: 'Comments are not available.'
  };
}

/**
 * Get a user-friendly message for comment status
 */
export function getCommentStatusMessage(commentStatus?: string): string | null {
  const status = getCommentStatus(commentStatus);
  return status.message || null;
}

/**
 * Check if we should show comment-related UI
 */
export function shouldShowCommentUI(commentStatus?: string): boolean {
  return getCommentStatus(commentStatus).isEnabled;
}