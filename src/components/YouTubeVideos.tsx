import React, { useState, useEffect } from 'react';
import { Youtube, Loader2 } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
}

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const channelId = 'UCOSYuY_e_r5GtVdlCVwY83Q';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3&type=video`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        
        if (!data.items) {
          throw new Error('No videos found');
        }

        const formattedVideos = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          link: `https://youtube.com/watch?v=${item.id.videoId}`,
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString()
        }));

        setVideos(formattedVideos);
      } catch (err) {
        console.error('YouTube API Error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-red-600 dark:text-red-400">
            <p>Error loading videos: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Youtube size={32} className="text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Latest <span className="text-yellow-600 dark:text-yellow-400">Videos</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Check out my latest YouTube content</p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader2 size={40} className="animate-spin text-yellow-600 dark:text-yellow-400" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Youtube size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Published: {video.publishedAt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@damienjburks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium transition-colors duration-200"
          >
            <Youtube size={20} />
            <span>Visit My Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;