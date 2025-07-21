import { NextResponse } from 'next/server';
import { disableCommentsOnPosts } from '@/lib/wordpress';

export async function POST() {
  try {
    const success = await disableCommentsOnPosts();
    
    if (success) {
      return NextResponse.json({ 
        message: 'Comments disabled successfully on WordPress backend',
        success: true 
      });
    } else {
      return NextResponse.json({ 
        message: 'Failed to disable comments',
        success: false 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in disable-comments API:', error);
    return NextResponse.json({ 
      message: 'Internal server error',
      success: false 
    }, { status: 500 });
  }
}