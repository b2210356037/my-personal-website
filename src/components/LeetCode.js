import React, { useState, useEffect } from 'react';
import styles from './LeetCode.module.css';

function LeetCode() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const playlistId = 'PLGk-FsMwQ8lXgT569naEgZ9_RQhC-Ie2f';
  const apiKey = process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        if (!apiKey) {
          throw new Error('YouTube API key is not set');
        }
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [apiKey]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={styles.leetcode}>
      <h2>Competitive Programming & LeetCode Solutions</h2>
      <p>As a junior member of Hacettepe Huprog, I have secured 3rd place in the main programming contest. HUPROG is Turkey's first and largest competitive programming competition aimed towards university students.</p>
      <p>My experience with HUPROG includes:</p>
      <ul>
        <li>Participating in various lessons on algorithms and data structures</li>
        <li>Using C++ to solve complex programming problems</li>
        <li>Being tutored in advanced data structures and algorithms by senior members</li>
        <li>Preparing to create problems for HUPROG'25 and HUPROG Juniors as a future senior member</li>
      </ul>
      <p>To enhance my skills, I regularly practice problem-solving on platforms like LeetCode. Here are some of my solution explanations:</p>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoItem}>
            <h3>{video.snippet.title}</h3>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <p>My competitive programming skills complement my diverse software development experience, including:</p>
      <p>This combination of algorithmic problem-solving and practical development skills across various technologies allows me to approach software engineering challenges from multiple perspectives, contributing to my success in both academic and professional settings.</p>
    </section>
  );
}

export default LeetCode;
