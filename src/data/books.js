import threadsOfLightCover from '../assets/threads.png';
import threads2 from '../assets/threads-2.png';
import threads3 from '../assets/threads-3.png';
import threads4 from '../assets/threads-4.jpg';
import threads5 from '../assets/threads-5.jpg';
import threads6 from '../assets/threads-6.jpg';

export const books = [
  {
    id: 1,
    title: "Threads of Light",
    subtitle: "In the quiet corners of adolescence, every shadow hides a spark...",
    description: "Set in the lush, rain-soaked valleys of late 1990s Dehradun, Threads of Light is a lyrical coming-of-age tale that follows Vid, a boy navigating the bittersweet rhythms of growing up in a world on the cusp of change.",
    images: [threadsOfLightCover, threads2, threads3, threads4, threads5, threads6],
    year: "2023",
    genre: "FICTION",
    purchaseLinks: [
      { name: "AMAZON UK", url: "https://www.amazon.co.uk/dp/B0GCF16W93", icon: "shopping-bag" },
      { name: "AMAZON US", url: "https://www.amazon.com/dp/B0GCF16W93", icon: "shopping-bag" },
      { name: "AMAZON IN", url: "https://www.amazon.in/dp/B0GCF16W93", icon: "shopping-bag" },
      { name: "FLIPKART", url: "https://www.flipkart.com/threads-of-light/p/itm113add512efee?pid=9798902079873&affid=editornoti", icon: "shopping-bag" },
      { name: "NOTION PRESS", url: "https://notionpress.com/in/read/threads-of-light", icon: "shopping-bag" }
    ],
    detailedDescription: `
      <p>Set in the lush, rain-soaked valleys of late 1990s Dehradun, <em>Threads of Light</em> is a lyrical coming-of-age tale that follows Vid, a boy navigating the bittersweet rhythms of growing up in a world on the cusp of change. As the familiar comfort of his childhood begins to fray under the weight of unsaid expectations and shifting friendships, Vid discovers solace in an unlikely place: the art of storytelling.</p>
      <p>Through the lens of his vivid imagination, the mundane becomes magical—a dusty classroom transforms into a theater of dreams, and the monsoon rain whispers secrets of a future he is yet to understand. But when a family secret resurfaces, threatening to unravel the delicate tapestry of his life, Vid must confront the shadows he has long tried to outrun.</p>
      <p>With prose as evocative as the petrichor of the hills, <em>Threads of Light</em> explores the fragility of memory, the quiet power of resilience, and the enduring bonds that hold us together even when we feel most apart. It is a story about finding one’s voice in the silence and discovering that even in the darkest corners, there is always a thread of light waiting to be found.</p>
    `
  }
];
