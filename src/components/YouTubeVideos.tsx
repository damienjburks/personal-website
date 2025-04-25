import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Loader2 } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  thumbnail: string;
}

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = 'UCOSYuY_e_r5GtVdlCVwY83Q';
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const corsProxy = 'https://api.allorigins.win/raw?url=';
        
        const response = await fetch(corsProxy + encodeURIComponent(feedUrl));
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        const latestVideos = entries.slice(0, 3).map(entry => {
          const videoId = entry.getElementsByTagName('yt:videoId')[0]?.textContent || '';
          const title = entry.getElementsByTagName('title')[0]?.textContent || '';
          const link = entry.getElementsByTagName('link')[0]?.getAttribute('href') || '';
          const pubDate = entry.getElementsByTagName('published')[0]?.textContent || '';
          
          return {
            id: videoId,
            title,
            link,
            publishedAt: new Date(pubDate).toLocaleDateString(),
            thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
          };
        });

        setVideos(latestVideos);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos. Please try again later.');
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
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-yellow-600 dark:text-yellow-400">Videos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Most recent videos from my channel</p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader2 className="w-8 h-8 text-yellow-600 dark:text-yellow-400 animate-spin" />
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
                    <ExternalLink size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{video.publishedAt}</span>
                  </div>
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
            <span>View All Videos</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;