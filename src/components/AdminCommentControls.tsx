"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquareOff, Loader2 } from 'lucide-react';

interface AdminCommentControlsProps {
  className?: string;
}

export function AdminCommentControls({ className }: AdminCommentControlsProps) {
  const [isDisabling, setIsDisabling] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleDisableComments = async () => {
    setIsDisabling(true);
    setMessage(null);
    setIsSuccess(null);

    try {
      const response = await fetch('/api/disable-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      
      setMessage(result.message);
      setIsSuccess(result.success);
    } catch (error) {
      console.error('Failed to disable comments:', error);
      setMessage('Failed to disable comments. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsDisabling(false);
    }
  };

  return (
    <div className={`p-4 border border-border rounded-lg bg-card ${className}`}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MessageSquareOff className="w-5 h-5" />
        Comment Management
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4">
        Use this tool to disable comments on your WordPress backend. This will close comments on all existing posts and set the default for new posts to have comments disabled.
      </p>

      <Button
        onClick={handleDisableComments}
        disabled={isDisabling}
        variant="destructive"
        className="w-full"
      >
        {isDisabling ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Disabling Comments...
          </>
        ) : (
          <>
            <MessageSquareOff className="w-4 h-4 mr-2" />
            Disable All Comments
          </>
        )}
      </Button>

      {message && (
        <div className={`mt-4 p-3 rounded-md text-sm ${
          isSuccess 
            ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
            : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
        }`}>
          {message}
        </div>
      )}

      <div className="mt-4 text-xs text-muted-foreground">
        <p><strong>Note:</strong> This action affects your WordPress backend settings. Make sure you have proper admin permissions.</p>
      </div>
    </div>
  );
}